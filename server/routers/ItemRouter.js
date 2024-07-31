import express from "express";
import db from "../db.js";

const ItemRouter = express.Router();

// Create an item
ItemRouter.post("/create", async (req, res) => {
    const {
        item_name,
        description,
        category,
        branch_id,
        item_image,
        sizes // sizeDetails should be an object containing sizes and their details
    } = req.body;
    const created_at = new Date();
    const updated_at = new Date();

    let item_id = '';

    try {
        // Insert into Item table
        const insertItemQuery = `
            INSERT INTO Item (item_name, description, category, created_at, updated_at, branch_id, item_image) 
            VALUES (?, ?, ?, ?, ?, ?, ?)`;
        
       await new Promise((resolve, reject) => {
            db.query(insertItemQuery, [
                item_name,
                description,
                category,
                created_at,
                updated_at,
                branch_id,
                item_image
            ], (error, results) => {
                if (error) {
                    console.error("Query Error:", error);
                    reject(error);
                } else {
                    item_id = results.insertId;
                    resolve();
                }
            });
       });

        // Prepare item sizes for insertion
        const itemSizesQueries = Object.entries(sizes).map(([index, {size_id, quantity, price }]) => {
            return new Promise((resolve, reject) => {
                // Insert into Item_Data
                const insertItemDataQuery = 'INSERT INTO Item_Data (item_id, size_id, quantity, price) VALUES (?, ?, ?, ?)';
                db.query(insertItemDataQuery, [item_id, size_id, quantity, price], (err, res) => {
                    if (err) {
                        console.error("Query Error:", err);
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            });
        });

        await Promise.all(itemSizesQueries);

        res.status(201).json({ message: "Item created successfully" });
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ error: 'Duplicate entry detected' });
        }
        res.status(500).json({ error: 'Failed to update item' });
    }
});


ItemRouter.post("/getItemsWithFilters", (req, res) => {
    const { item_name, branch_id, category, size_id, isDeleted } = req.body;

    // Base SQL query to fetch items along with their sizes, quantities, and prices
    let selectQuery = `
        SELECT 
            Item.*,
            Size.size_id,
            Size.size_dimension,
            Item_Data.quantity,
            Item_Data.price
        FROM Item
        LEFT JOIN Item_Data ON Item.item_id = Item_Data.item_id
        LEFT JOIN Size ON Item_Data.size_id = Size.size_id
        WHERE 1=1
    `; 

    const params = [];

    if (item_name) {
        selectQuery += ' AND Item.item_name LIKE ?';
        params.push(`%${item_name}%`);
    }

    if (branch_id) {
        selectQuery += ' AND Item.branch_id = ?';
        params.push(branch_id);
    }

    if (category) {
        selectQuery += ' AND Item.category = ?';
        params.push(category);
    }

    if (size_id) {
        selectQuery += ' AND Item_Data.size_id = ?';
        params.push(size_id);
    }

    if (isDeleted !== undefined) {
        selectQuery += ' AND Item.isDeleted = ?';
        params.push(isDeleted);
    }

    // Order by item_id and size_id
    selectQuery += ' ORDER BY Item.item_id, Size.size_id';

    db.query(selectQuery, params, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Failed to retrieve items" });
        }

        // Process result to group sizes, quantities, and prices
        const items = result.reduce((acc, row) => {
             const formatDate = (date) => {
                return new Date(date).toLocaleDateString('en-PH');
            };

            // Check if item already exists in the accumulator
            if (!acc[row.item_id]) {
                acc[row.item_id] = {
                    item_id: row.item_id,
                    item_name: row.item_name,
                    description: row.description,
                    category: row.category,
                    item_image: row.item_image,
                    branch_id: row.branch_id,
                    created_at: formatDate(row.created_at),
                    updated_at: formatDate(row.updated_at),
                    isDeleted: row.isDeleted,
                    sizes: []
                };
            }

            // Push size details if available
            if (row.size_id || row.size_id == 0) {
                acc[row.item_id].sizes.push({
                    size_id: row.size_id,
                    size_dimension: row.size_dimension,
                    quantity: row.quantity,
                    price: row.price
                });
            }

            return acc;
        }, {});

        // Convert the accumulator object to an array
        const formattedResult = Object.values(items);

        return res.status(200).json(formattedResult);
    });
});

ItemRouter.post('/update', async (req, res) => {
    const {
        item_id,
        item_name,
        description,
        category,
        item_image,
        sizes
    } = req.body; 
    const updated_at = new Date()

    try {
        // Update Item table
        const updateItemQuery = `
            UPDATE Item 
            SET item_name = ?, description = ?, category = ?, item_image = ?, updated_at = ?
            WHERE item_id = ?`;
        await new Promise((resolve, reject) => {
            db.query(updateItemQuery, [
                item_name,
                description,
                category,
                item_image,
                updated_at,
                item_id
            ], (error) => {
                if (error) return reject(error);
                resolve();
            });
        });    

        // Get initial sizes from the database
        const getInitialSizesQuery = `
            SELECT size_id, quantity, price
            FROM Item_Data
            WHERE item_id = ?`;
        
        const initialSizes = await new Promise((resolve, reject) => {
            db.query(getInitialSizesQuery, [item_id], (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        });

        // Convert initial sizes to a map for easier comparison
        const initialSizesMap = new Map();
        initialSizes.forEach(size => {
            initialSizesMap.set(size.size_id, {
                quantity: size.quantity,
                price: size.price
            });
        });

        // Convert updated sizes array into a map for easier comparison
        const updatedSizesMap = new Map();
        sizes.forEach(size => {
            updatedSizesMap.set(size.size_id, {
                quantity: size.quantity,
                price: size.price
            });
        });

        // Find sizes to delete (initial sizes not in updated sizes)
        const sizesToDelete = Array.from(initialSizesMap.keys())
            .filter(size => !updatedSizesMap.has(size));

        // Find sizes to update (updated sizes that exist in initial sizes)
        const sizesToUpdate = sizes
            .filter(size => initialSizesMap.has(size.size_id));

        // Find sizes to add (sizes that are in updated sizes but not in initial sizes)
        const sizesToAdd = sizes
            .filter(size => !initialSizesMap.has(size.size_id));

        // Remove sizes
        if (sizesToDelete.length > 0) {
            const deleteSizesQuery = `
                DELETE FROM Item_Data 
                WHERE item_id = ? AND size_id IN (${sizesToDelete.map(() => '?').join(',')})`;
            
            await new Promise((resolve, reject) => {
                db.query(deleteSizesQuery, [item_id, ...sizesToDelete], (err) => {
                    if (err) {
                        console.error('Database query error:', err);
                        return reject(err);
                    }
                    resolve();
                });
            });
        }

        // Update existing sizes
        const updatePromises = sizesToUpdate.map(size => {
            const updateSizeQuery = `
                UPDATE Item_Data 
                SET quantity = ?, price = ?
                WHERE item_id = ? AND size_id = ?`;
            return new Promise((resolve, reject) => {
                db.query(updateSizeQuery, [size.quantity, size.price, item_id, size.size_id], (err) => {
                    if (err) {
                        console.error('Database query error:', err);
                        return reject(err);
                    }
                    resolve();
                });
            });
        });

        // Add new sizes
        const insertPromises = sizesToAdd.map(size => {
            const insertSizeQuery = `
                INSERT INTO Item_Data (item_id, size_id, quantity, price) 
                VALUES (?, ?, ?, ?)`;
            return new Promise((resolve, reject) => {
                db.query(insertSizeQuery, [item_id, size.size_id, size.quantity, size.price], (err) => {
                    if (err) {
                        console.error('Database query error:', err);
                        return reject(err);
                    }
                    resolve();
                });
            });
        });

        await Promise.all([...updatePromises, ...insertPromises]);

        res.status(200).json({ message: 'Item updated successfully' });
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ error: 'Duplicate entry detected' });
        }
        res.status(500).json({ error: 'Failed to update item' });
    }
});

// Delete an item
ItemRouter.post("/delete", (req, res) => {
    const { item_id, item_name } = req.body;
    const updated_at = new Date();

    // Ensure the item_name includes "(Deleted)" and the id
    const updatedItemName = `${item_name} (Deleted - ID: ${item_id})`;

    // Query to update the item
    const updateQuery = "UPDATE Item SET item_name = ?, isDeleted = ?, updated_at = ? WHERE item_id = ?";
    db.query(updateQuery, [updatedItemName, true, updated_at, item_id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Failed to delete item" });
        }
        return res.status(200).json({ message: "Item deleted successfully" });
    });
});


// Get all sizes
ItemRouter.get("/sizes", (req, res) => {
    const selectQuery = "SELECT * FROM Size";

    db.query(selectQuery, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Failed to retrieve sizes" });
        }
        return res.status(200).json(result);
    });
});

// Get total products in a branch
ItemRouter.post("/totalProductsInBranch", (req, res) => {
    const branch_id = req.body.branch_id;
    const isMasterAdmin = req.body.isMasterAdmin;
    let selectQuery;

    if (isMasterAdmin) {
        selectQuery = `
            SELECT COUNT(item_id) AS total_products
            FROM Item
            WHERE isDeleted = 0
        `;
    } else {
            selectQuery = `
            SELECT COUNT(item_id) AS total_products
            FROM Item
            WHERE branch_id = ? AND isDeleted = 0
        `;
    }
    

    db.query(selectQuery, [branch_id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Failed to retrieve total products" });
        }
        return res.status(200).json(result[0]);
    });
});

// Get total item stocks in a branch
ItemRouter.post("/totalItemStocksInBranch", (req, res) => {
    const branch_id = req.body.branch_id;
    const isMasterAdmin = req.body.isMasterAdmin;
    let selectQuery;

    if (isMasterAdmin) {
        selectQuery = `
            SELECT SUM(quantity) AS total_item_stocks
            FROM Item_Data
            JOIN Item ON Item_Data.item_id = Item.item_id
            WHERE Item.isDeleted = 0
        `;
    } else {
        selectQuery = `
            SELECT SUM(quantity) AS total_item_stocks
            FROM Item_Data
            JOIN Item ON Item_Data.item_id = Item.item_id
            WHERE Item.branch_id = ? AND Item.isDeleted = 0
        `;
    }

    db.query(selectQuery, [branch_id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Failed to retrieve total item stocks" });
        }
        return res.status(200).json(result[0]);
    });
});

// Get total inventory cost in a branch
ItemRouter.post("/totalInventoryCostInBranch", (req, res) => {
    const branch_id = req.body.branch_id;
    const isMasterAdmin = req.body.isMasterAdmin;
    let selectQuery;

    if (isMasterAdmin) {
        selectQuery = `
            SELECT SUM(price * quantity) AS total_inventory_cost
            FROM Item_Data
            JOIN Item ON Item_Data.item_id = Item.item_id
            WHERE Item.isDeleted = 0
        `;
    } else {
        selectQuery = `
            SELECT SUM(price * quantity) AS total_inventory_cost
            FROM Item_Data
            JOIN Item ON Item_Data.item_id = Item.item_id
            WHERE Item.branch_id = ? AND Item.isDeleted = 0
        `;
    }

    db.query(selectQuery, [branch_id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Failed to retrieve total inventory cost" });
        }
        return res.status(200).json(result[0]);
    });
});


// Get total out of stock items in a branch
ItemRouter.post("/totalOutOfStockInBranch", async (req, res) => {
    const { branch_id, isMasterAdmin } = req.body;

    // Prepare query based on user role
    const selectQuery = isMasterAdmin 
        ? `
            SELECT COUNT(Item_Data.item_id) AS total_out_of_stock_items
            FROM Item_Data
            JOIN Item ON Item.item_id = Item_Data.item_id
            WHERE Item_Data.quantity = 0 AND Item.isDeleted = 0
          `
        : `
            SELECT COUNT(Item_Data.item_id) AS total_out_of_stock_items
            FROM Item_Data
            JOIN Item ON Item.item_id = Item_Data.item_id
            WHERE Item.branch_id = ? AND Item_Data.quantity = 0 AND Item.isDeleted = 0
          `;

        // Execute the query
        await db.query(selectQuery, isMasterAdmin ? [] : [branch_id], (error, result) => {
            if (error) {
                console.error('Error retrieving total out of stock items:', error);
                res.status(500).json({ error: "Failed to retrieve total out of stock items" });
            }
            res.status(200).json(result[0].total_out_of_stock_items);
        });

});


// Get top items based on quantity and include sizes
ItemRouter.post("/topItems", async (req, res) => {
    const { branch_id, isMasterAdmin } = req.body;

    // Define the query based on user role
    let selectQuery;

    if (isMasterAdmin) {
        selectQuery = `
            SELECT 
                i.item_name, 
                id.size_id,
                s.size_dimension,  -- Assuming there is a 'size_name' in the Size table
                SUM(id.quantity) AS total_quantity
            FROM Item i
            JOIN Item_Data id ON i.item_id = id.item_id
            JOIN Size s ON id.size_id = s.size_id  -- Join with Size table to get size names
            WHERE i.isDeleted = 0
            GROUP BY i.item_name, id.size_id, s.size_dimension
            ORDER BY total_quantity DESC
            LIMIT 10
        `;
    } else {
        selectQuery = `
            SELECT 
                i.item_name, 
                id.size_id,
                s.size_dimension,  -- Assuming there is a 'size_name' in the Size table
                SUM(id.quantity) AS total_quantity
            FROM Item i
            JOIN Item_Data id ON i.item_id = id.item_id
            JOIN Size s ON id.size_id = s.size_id  -- Join with Size table to get size names
            WHERE i.branch_id = ? AND i.isDeleted = 0
            GROUP BY i.item_name, id.size_id, s.size_dimension
            ORDER BY total_quantity DESC
            LIMIT 10
        `;
    }

    db.query(selectQuery, isMasterAdmin ? [] : [branch_id], (error, result) => {
        if (error) {
            console.error('Error retrieving top items:', error);
            res.status(500).json({ error: "Failed to retrieve top items" });
        }
        res.status(200).json(result);
    });
});



ItemRouter.post("/itemsPerCategory", (req, res) => {
    const branch_id = req.body.branch_id;
    const isMasterAdmin = req.body.isMasterAdmin;
    let selectQuery;

    if (isMasterAdmin) {
        selectQuery = `
            SELECT category, COUNT(*) AS count 
            FROM Item 
            WHERE isDeleted = 0 
            GROUP BY category
        `;
    } else {
        selectQuery = `
            SELECT category, COUNT(*) AS count 
            FROM Item 
            WHERE branch_id = ? AND isDeleted = 0 
            GROUP BY category
        `;
    }

  db.query(selectQuery, [branch_id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to retrieve items per category" });
    }
    return res.status(200).json(result);
  });
});


export { ItemRouter };
