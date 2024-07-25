import express from "express";
import db from "../db.js";

const ItemRouter = express.Router();

// Create an item
ItemRouter.post("/create", async (req, res) => {
    const {
        item_name,
        description,
        sizes, // array of size dimensions as strings
		category,
        quantity,
        price,
        branch_id,
        item_image,
    } = req.body;
    const created_at = new Date();
    const updated_at = new Date();

	let item_id = '';

    try {
        // Insert into Item table
        const insertItemQuery =
            "INSERT INTO Item (item_name, description, category, quantity, price, created_at, updated_at, branch_id, item_image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        
			await db.query(insertItemQuery, [
				item_name,
				description,
				category,
				quantity,
				price,
				created_at,
				updated_at,
				branch_id,
				item_image,
			],
			(err, results) => {
				if(err) {
					console.error("Query Error:", err);
				} else {
					item_id = results.insertId;
				}
			}
		);

        // Retrieve size_ids for each size_description
        const itemSizes = sizes ? sizes.split(',') : [];

        const sizeQueries = itemSizes.map(size_description => {
            return new Promise(async (resolve, reject) => {
                try {
                    await db.query('SELECT size_id FROM Size WHERE size_dimension = ?', [size_description], 
						(err, sizeResult) => {
							if (sizeResult.length > 0) {
								const size_id = sizeResult[0].size_id;
								const insertSizeQuery = 'INSERT INTO Item_Size (item_id, size_id) VALUES (?, ?)';
								resolve( db.query(insertSizeQuery, [item_id, size_id]));
							} else {
								reject(new Error(`Size dimension ${size_description} not found`));
							}
						}
					);
                } catch (error) {
                    reject(error);
                }
            });
        });

        await Promise.all(sizeQueries);

        res.status(201).json({ message: "Item created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to create item" });
    }
});

// Get all items with sizes
ItemRouter.get("/", (req, res) => {
    const selectQuery =
        "SELECT Item.*, GROUP_CONCAT(Size.size_dimension) AS sizes FROM Item LEFT JOIN Item_Size ON Item.item_id = Item_Size.item_id LEFT JOIN Size ON Item_Size.size_id = Size.size_id WHERE Item.isDeleted = 0 GROUP BY Item.item_id";
    
    db.query(selectQuery, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Failed to retrieve items" });
        }
        return res.status(200).json(result);
    });
});

// Get all items including deleted
ItemRouter.get("/getAllWithDeleted", (req, res) => {
    const selectQuery =
        "SELECT Item.*, GROUP_CONCAT(Size.size_dimension) AS sizes FROM Item LEFT JOIN Item_Size ON Item.item_id = Item_Size.item_id LEFT JOIN Size ON Item_Size.size_id = Size.size_id GROUP BY Item.item_id";

    db.query(selectQuery, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Failed to retrieve items" });
        }
        return res.status(200).json(result);
    });
});

// Get items from a specific branch
ItemRouter.post("/getFromBranch", (req, res) => {
    const selectQuery =
        "SELECT Item.*, GROUP_CONCAT(Size.size_dimension) AS sizes FROM Item LEFT JOIN Item_Size ON Item.item_id = Item_Size.item_id LEFT JOIN Size ON Item_Size.size_id = Size.size_id WHERE Item.branch_id = ? AND Item.isDeleted = 0 GROUP BY Item.item_id";
    
    db.query(selectQuery, [req.body.branch_id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Failed to retrieve items" });
        }
        return res.status(200).json(result);
    });
});

const getInitialSizes = async (item_id) => {
    return new Promise((resolve, reject) => {
        db.query(`
            SELECT GROUP_CONCAT(Size.size_dimension) AS sizes 
            FROM Item 
            LEFT JOIN Item_Size ON Item.item_id = Item_Size.item_id 
            LEFT JOIN Size ON Item_Size.size_id = Size.size_id 
            WHERE Item.item_id = ?`, 
            [item_id], 
            (err, results) => {
                if (err) {
                    console.error('Query Error:', err);
                    return reject(err);
                }
        
                // Access the sizes string
                const initialSizesString = results[0].sizes;
        
                // Convert the string to an array if needed
                const initialSizesArray = initialSizesString ? initialSizesString.split(',') : [];
        
                resolve(initialSizesArray);
            }
        );
    });
};

ItemRouter.post('/update', async (req, res) => {
    const {
        item_id,
        item_name,
        description,
		category,
        quantity,
        price,
        item_image,
        sizes
    } = req.body;

    try {
        // Update Item table
        const updateItemQuery = `
            UPDATE Item SET item_name = ?, description = ?, category = ?, quantity = ?, price = ?, item_image = ? 
            WHERE item_id = ?`;
        await db.query(updateItemQuery, [
            item_name,
            description,
			category,
            quantity,
            price,
            item_image,
            item_id
        ]);

		// Get initial sizes from the database
        const initialSizesArray = await getInitialSizes(item_id);

        // Split updated sizes into an array
        const updatedSizesArray = sizes ? sizes.split(',').map(size => size.trim()) : [];

        // Find sizes to delete (initial sizes not in updated sizes)
        const sizesToDelete = initialSizesArray.filter(sizes => !updatedSizesArray.includes(sizes));

        // Find sizes to add (updated sizes not in initial sizes)
        const sizesToAdd = updatedSizesArray.filter(size => !initialSizesArray.includes(size));

        // Remove sizes
        if (sizesToDelete.length > 0) {
            const deleteSizesQuery = `
                DELETE FROM Item_Size 
                WHERE item_id = ? AND size_id IN (
                    SELECT size_id FROM Size WHERE size_dimension IN (?)
                )`;
            await db.query(deleteSizesQuery, [item_id, sizesToDelete]);
        }

        // Add new sizes
        if (sizesToAdd.length > 0) {
            const insertPromises = sizesToAdd.map(async size => {
                // Get the size_id for the size
                await db.query('SELECT size_id FROM Size WHERE size_dimension = ?', [size], 
					(err, results) => {
						if(err) {
							console.error("Query Error:", err);
						} else {
							if(results.length > 0) {
								const size_id = results[0].size_id
								const insertSizeQuery = 'INSERT INTO Item_Size (item_id, size_id) VALUES (?, ?)';
                    			return db.query(insertSizeQuery, [item_id, size_id]);
							}
						}
					}
				);
            });
            await Promise.all(insertPromises);
        }

        res.status(200).json({ message: 'Item updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update item' });
    }
});


// Delete an item
ItemRouter.post("/delete", (req, res) => {
    const item_id = req.body.item_id;
    const deleteQuery = "UPDATE Item SET isDeleted = ? WHERE item_id = ?";
    db.query(deleteQuery, [true, item_id], (err, result) => {
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
            FROM Item
            WHERE isDeleted = 0
        `;
    } else {
        selectQuery = `
            SELECT SUM(quantity) AS total_item_stocks
            FROM Item
            WHERE branch_id = ? AND isDeleted = 0
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
            FROM Item
            WHERE isDeleted = 0
        `;
    } else {
        selectQuery = `
            SELECT SUM(price * quantity) AS total_inventory_cost
            FROM Item
            WHERE branch_id = ? AND isDeleted = 0
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
ItemRouter.post("/totalOutOfStockInBranch", (req, res) => {
    const branch_id = req.body.branch_id;
    const isMasterAdmin = req.body.isMasterAdmin;
    let selectQuery;

    if (isMasterAdmin) {
        selectQuery = `
            SELECT COUNT(item_id) AS total_out_of_stock_items
            FROM Item
            WHERE quantity = 0 AND isDeleted = 0
        `;
    } else {
        selectQuery = `
            SELECT COUNT(item_id) AS total_out_of_stock_items
            FROM Item
            WHERE branch_id = ? AND quantity = 0 AND isDeleted = 0
        `;
    }

    db.query(selectQuery, [branch_id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Failed to retrieve total out of stock items" });
        }
        return res.status(200).json(result[0]);
    });
});

ItemRouter.post("/topItems", async (req, res) => {
    const branch_id = req.body.branch_id;
    const isMasterAdmin = req.body.isMasterAdmin;
    let selectQuery;

    if (isMasterAdmin) {
        selectQuery = `
            SELECT item_name, SUM(quantity) AS total_quantity
            FROM Item
            WHERE isDeleted = 0
            GROUP BY item_name
            ORDER BY total_quantity DESC
            LIMIT 10
        `;
    } else {
        selectQuery = `
            SELECT item_name, SUM(quantity) AS total_quantity
            FROM Item
            WHERE branch_id = ? AND isDeleted = 0
            GROUP BY item_name
            ORDER BY total_quantity DESC
            LIMIT 10
        `;
    }

    db.query(selectQuery, [branch_id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Failed to retrieve top items" });
        }
        return res.status(200).json(result);
    });

})

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
