import express from "express";
import db from "../db.js";

const BranchRouter = express.Router();

// Create an item
BranchRouter.post("/create", (req, res) => {
	const {
		branch_name,
		branch_image,
		branch_address,
		branch_contact,
	} = req.body;

	const insertQuery =
		"INSERT INTO Branch (branch_name, branch_image, branch_address, branch_contact) VALUES (?, ?, ?, ?)";
	db.query(
		insertQuery,
		[
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
    const selectQuery = "SELECT * FROM Branch WHERE isDeleted = 0";
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

// Gets all branches
BranchRouter.get("/getBranchesWithDeleted", (req, res) => {
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

// Gets specific branch
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

// Update Branch
BranchRouter.post("/update", (req, res) => {
	const {
		branch_name,
		branch_image,
		branch_address,
		branch_contact,
		branch_id,
	} = req.body;
	// const updated_at = new Date();
	console.log(req.body);

	const updateQuery =
		"UPDATE Branch SET branch_name = ?, branch_image = ?, branch_address = ?, branch_contact = ? WHERE branch_id = ?";
	db.query(
		updateQuery,
		[
			branch_name,
			branch_image,
			branch_address,
			branch_contact,
			branch_id
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

// Delete a Branch and flag related items and users as deleted
BranchRouter.post("/delete", (req, res) => {
    const branch_id = req.body.branch_id;

    // Queries to update the isDeleted flag
    const deleteBranchQuery = "UPDATE Branch SET isDeleted = ? WHERE branch_id = ?";
    const deleteItemsQuery = "UPDATE Item SET isDeleted = ? WHERE branch_id = ?";
    const deleteUsersQuery = "UPDATE Admin SET isDeleted = ? WHERE branch_id = ?";

    // Start a transaction
    db.beginTransaction(err => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Failed to start transaction" });
        }

        // Flag the branch as deleted
        db.query(deleteBranchQuery, [true, branch_id], (err, result) => {
            if (err) {
                return db.rollback(() => {
                    console.error(err);
                    return res.status(500).json({ error: "Failed to delete branch" });
                });
            }

            // Flag the related items as deleted
            db.query(deleteItemsQuery, [true, branch_id], (err, result) => {
                if (err) {
                    // Check if the error is due to a non-existing table
                    if (err.code === 'ER_NO_SUCH_TABLE') {
                        console.warn("Items table does not exist. Skipping items deletion.");
                    } else {
                        return db.rollback(() => {
                            console.error(err);
                            return res.status(500).json({ error: "Failed to delete items" });
                        });
                    }
                }

                // Flag the related users as deleted
                db.query(deleteUsersQuery, [true, branch_id], (err, result) => {
                    if (err) {
                        // Check if the error is due to a non-existing table
                        if (err.code === 'ER_NO_SUCH_TABLE') {
                            console.warn("Admin table does not exist. Skipping admin deletion.");
                        } else {
                            return db.rollback(() => {
                                console.error(err);
                                return res.status(500).json({ error: "Failed to delete admin" });
                            });
                        }
                    }

                    // Commit the transaction if all queries were successful or skipped due to missing tables
                    db.commit(err => {
                        if (err) {
                            return db.rollback(() => {
                                console.error(err);
                                return res.status(500).json({ error: "Failed to commit transaction" });
                            });
                        }

                        return res.status(200).json({ message: "Branch and related items/users deleted successfully" });
                    });
                });
            });
        });
    });
});

export { BranchRouter };
