// ItemRouter.js
import express from "express";
import mysql from "mysql";

const db = mysql.createConnection({
    host: "thebillyproject-db.c102sq8osf99.ap-southeast-2.rds.amazonaws.com",
    user: "root",
    password: "*ROOTpass121212*",
    database: "The-Billy-Project"
})

const ItemRouter = express.Router();

// Create an item
ItemRouter.post("/", (req, res) => {
	const {
		item_name,
		description,
		quantity,
		price,
		item_image,
		branch_id,
	} = req.body;
	const created_at = new Date();
	const updated_at = new Date();

	const insertQuery =
		"INSERT INTO Item (item_name, description, quantity, price, item_image, created_at, updated_at, branch_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
	db.query(
		insertQuery,
		[
			item_name,
			description,
			quantity,
			price,
			item_image,
			created_at,
			updated_at,
			branch_id,
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
	const selectQuery = "SELECT * FROM Item";
	db.query(selectQuery, (err, result) => {
		if (err) {
			console.error(err);
			return res
				.status(500)
				.json({ error: "Failed to retrieve items" });
		}
		return res.status(200).json(result);
	});
});

// // Get item by ID
// ItemRouter.get("/:id", (req, res) => {
// 	const itemId = req.params.id;
// 	const selectQuery = "SELECT * FROM Item WHERE item_id = ?";
// 	db.query(selectQuery, [itemId], (err, result) => {
// 		if (err) {
// 			console.error(err);
// 			return res
// 				.status(500)
// 				.json({ error: "Failed to retrieve item" });
// 		}
// 		if (result.length === 0) {
// 			return res.status(404).json({ message: "Item not found" });
// 		}
// 		return res.status(200).json(result[0]);
// 	});
// });

// Update an item
ItemRouter.post("/update", (req, res) => {
	const {
		item_name,
		description,
		quantity,
		price,
		item_image,
		branch_id,
		item_id,
	} = req.body;
	const updated_at = new Date();

	const updateQuery =
		"UPDATE Item SET item_name = ?, description = ?, quantity = ?, price = ?, item_image = ?, updated_at = ?, branch_id = ? WHERE item_id = ?";
	db.query(
		updateQuery,
		[
			item_name,
			description,
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
			console.log(req.body);
			return res
				.status(200)
				.json({ message: "Item updated successfully" });
		}
	);
});

// Delete an item
ItemRouter.post("/delete", (req, res) => {
	const item_id = req.body.item_id;
	const deleteQuery = "DELETE FROM Item WHERE item_id = ?";
	db.query(deleteQuery, [item_id], (err, result) => {
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
