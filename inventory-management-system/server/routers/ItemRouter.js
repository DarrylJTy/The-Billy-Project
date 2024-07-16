import express from "express";
import db from "../db.js";
import multer from "multer";

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'public/images');
	},
	filename: (req, file, cb) => {
		cb(null, `img-${file.originalname}`)
	}
})

const isImage = (req, file, cb) => {
	if(file.mimetype.startsWith("img")) {
		cb(null, true);
	} else {
		cb(null, Error("Please upload an image."))
	}
}

const upload = multer({
	storage: storage,
	fileFilter:isImage
})

const ItemRouter = express.Router();

// Create an item
ItemRouter.post("/create", upload.single("item_image"), (req, res) => {
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
	console.log(req.body);
	console.log(req.file.filename);

	const insertQuery =
		"INSERT INTO Item (item_name, description, quantity, price, item_image, created_at, updated_at, branch_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
	db.query(
		insertQuery,
		[
			item_name,
			description,
			quantity,
			price,
			req.file.filename,
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
