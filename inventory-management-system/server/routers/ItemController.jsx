// itemController.js
import express from "express";

const db = mysql.createConnection({
    host: "thebillyproject-db.c102sq8osf99.ap-southeast-2.rds.amazonaws.com",
    user: "root",
    password: "*ROOTpass121212*",
    database: "The-Billy-Project"
})

const router = express.Router();

// Create an item
router.post("/items", (req, res) => {
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
		"INSERT INTO Item (item_name, description, quantity, price, item_image, crreated_at, updated_at, branch_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
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
router.get("/items", (req, res) => {
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

// Get item by ID
router.get("/items/:id", (req, res) => {
	const itemId = req.params.id;
	const selectQuery = "SELECT * FROM Item WHERE item_id = ?";
	db.query(selectQuery, [itemId], (err, result) => {
		if (err) {
			console.error(err);
			return res
				.status(500)
				.json({ error: "Failed to retrieve item" });
		}
		if (result.length === 0) {
			return res.status(404).json({ message: "Item not found" });
		}
		return res.status(200).json(result[0]);
	});
});

// Update an item
router.put("/items/:id", (req, res) => {
	const itemId = req.params.id;
	const {
		item_name,
		description,
		quantity,
		price,
		item_image,
		branch_id,
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
			itemId,
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
router.delete("/items/:id", (req, res) => {
	const itemId = req.params.id;
	const deleteQuery = "DELETE FROM Item WHERE item_id = ?";
	db.query(deleteQuery, [itemId], (err, result) => {
		if (err) {
			console.error(err);
			return res.status(500).json({ error: "Failed to delete item" });
		}
		return res
			.status(200)
			.json({ message: "Item deleted successfully" });
	});
});

module.exports = router;
