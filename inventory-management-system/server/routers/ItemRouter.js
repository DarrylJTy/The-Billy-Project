import express from "express";
import db from "../db.js";

const ItemRouter = express.Router();

// Create an item
ItemRouter.post("/create", (req, res) => {
	const {
		item_name,
		description,
		size,
		quantity,
		price,
		branch_id,
		item_image,
	} = req.body;
	const created_at = new Date();
	const updated_at = new Date();
	console.log(req.body);

	const insertQuery =
		"INSERT INTO Item (item_name, description, size, quantity, price, created_at, updated_at, branch_id, item_image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
	db.query(
		insertQuery,
		[
			item_name,
			description,
			size,
			quantity,
			price,
			created_at,
			updated_at,
			branch_id,
			item_image,
		],
		(err, result) => {
			if (err) {
				console.error(err);
				return res
					.status(500)
					.json({ error: "Failed to create item" });
			}
			return res
				.status(201)
				.json({ message: "Item created successfully" });
		}
	);
});

// Get all items
ItemRouter.get("/", (req, res) => {
    const selectQuery = "SELECT * FROM Item WHERE isDeleted = 0";
    
    db.query(selectQuery, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Failed to retrieve items" });
        }
        return res.status(200).json(result);
    });
});

ItemRouter.get("/getAllWithDeleted", (req, res) => {
	const selectQuery = "SELECT * FROM Item";
	db.query(selectQuery, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Failed to retrieve items" });
        }
        return res.status(200).json(result);
    });
})


// Get items from a specific branch
ItemRouter.post("/getFromBranch", (req, res) => {
    const selectQuery = "SELECT * FROM Item WHERE branch_id = ? AND isDeleted = ?";
    
    db.query(selectQuery, [req.body.branch_id, 0], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Failed to retrieve items" });
        }
        return res.status(200).json(result);
    });
});


// Update an item
ItemRouter.post("/update", (req, res) => {
	const {
		item_name,
		description,
		size,
		quantity,
		price,
		item_image,
		branch_id,
		item_id,
	} = req.body;
	const updated_at = new Date();

	const updateQuery =
		"UPDATE Item SET item_name = ?, description = ?, size = ?, quantity = ?, price = ?, item_image = ?, updated_at = ?, branch_id = ? WHERE item_id = ?";
	db.query(
		updateQuery,
		[
			item_name,
			description,
			size,
			quantity,
			price,
			item_image,
			updated_at,
			branch_id,
			item_id,
		],
		(err, result) => {
			if (err) {
				console.error(err);
				return res
					.status(500)
					.json({ error: "Failed to update item" });
			}
			return res
				.status(200)
				.json({ message: "Item updated successfully" });
		}
	);
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
		return res
			.status(200)
			.json({ message: "Item deleted successfully" });
	});
});

export {ItemRouter};
