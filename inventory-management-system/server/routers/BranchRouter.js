import express from "express";
import db from "../db.js";

const BranchRouter = express.Router();

// Create an item
BranchRouter.post("/create", (req, res) => {
	const {
		branch_id,
		branch_name,
		branch_image,
		branch_address,
		branch_contact,
	} = req.body;

	const insertQuery =
		"INSERT INTO Branch (branch_id, branch_name, branch_image, branch_address, branch_contact) VALUES (?, ?, ?, ?, ?)";
	db.query(
		insertQuery,
		[
			branch_id,
			branch_name,
			branch_image,
			branch_address,
			branch_contact,
		],
		(err, result) => {
			if (err) {
				console.error(err);
				return res
					.status(500)
					.json({ error: "Failed to create branch" });
			}
			return res
				.status(201)
				.json({ message: "Branch created successfully" });
		}
	);
});

// Gets all branches
BranchRouter.get("/getBranches", (req, res) => {
    const selectQuery = "SELECT * FROM Branch";
	db.query(selectQuery, (err, result) => {
		if (err) {
			console.error(err);
			return res
				.status(500)
				.json({ error: "Failed to retrieve branches" });
		}
		return res.status(200).json(result);
	});
})

// Gets specific branchd
BranchRouter.post("/getSpecificBranchName", (req, res) => {
	const selectQuery = "SELECT * FROM Branch WHERE branch_id = ?";
	db.query(selectQuery, [req.body.branch_id , 0], (err, result) => {
		if (err) {
            console.error(err);
            return res.status(500).json({ error: "Failed to retrieve branch" });
        }
        return res.status(200).json(result);
    });
})


BranchRouter.post("/update", (req, res) => {
	const {
		branch_id,
		branch_name,
		branch_image,
		branch_address,
		branch_contact,
		prev_branch_id
	} = req.body;
	// const updated_at = new Date();
	console.log(req.body);

	const updateQuery =
		"UPDATE Branch SET branch_id = ?, branch_name = ?, branch_image = ?, branch_address = ?, branch_contact = ? WHERE branch_id = ?";
	db.query(
		updateQuery,
		[
			branch_id,
			branch_name,
			branch_image,
			branch_address,
			branch_contact,
			prev_branch_id
		],
		(err, result) => {
			if (err) {
				console.error(err);
				return res
					.status(500)
					.json({ error: "Failed to update branch" });
			}
			console.log(result)
			return res
				.status(200)
				.json({ message: "Branch updated successfully" });
		}
	);
});

// Delete an item
BranchRouter.post("/delete", (req, res) => {
	const branch_id = req.body.branch_id;
	const deleteQuery = "UPDATE Branch SET isDeleted = ? WHERE branch_id = ?";
	db.query(deleteQuery, [true, branch_id], (err, result) => {
		if (err) {
			console.error(err);
			return res.status(500).json({ error: "Failed to delete branch" });
		}
		return res
			.status(200)
			.json({ message: "Branch deleted successfully" });
	});
});

export {BranchRouter};