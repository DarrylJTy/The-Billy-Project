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
BranchRouter.post("/getBranches", (req, res) => {
	const { branch_name, isDeleted } = req.body

    let selectQuery = `
        SELECT * 
        FROM Branch
        WHERE 1=1
    `;

	const params = [];

	 if (branch_name) {
        selectQuery += ' AND branch_name LIKE ?';
        params.push(`%${branch_name}%`);
    }

    if (isDeleted !== undefined) {
        selectQuery += ' AND isDeleted = ?';
        params.push(isDeleted);
    }

    selectQuery += ' ORDER BY branch_id';

    // Execute the query
    db.query(selectQuery, params, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Failed to retrieve branches" });
        }
        return res.status(200).json(result);
    });
});

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

BranchRouter.post("/delete", (req, res) => {
    const branch_id = req.body.branch_id;

    // Queries to update the name and isDeleted flag with IDs
    const deleteBranchQuery = "UPDATE Branch SET branch_name = CONCAT(branch_name, ' (Deleted - B_ID:', ? ,')'), isDeleted = ? WHERE branch_id = ?";
    const deleteItemsQuery = "UPDATE Item SET item_name = CONCAT(item_name, ' (Deleted - B_ID:', ? ,')'), isDeleted = ? WHERE branch_id = ? AND isDeleted = 0";
    const deleteUsersQuery = "UPDATE Admin SET username = CONCAT(username, ' (Deleted - B_ID:', ? ,')'), isDeleted = ? WHERE branch_id = ? AND isDeleted = 0";

    // Start a transaction
    db.beginTransaction(err => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Failed to start transaction" });
        }

        // Rename and flag the branch as deleted
        db.query(deleteBranchQuery, [branch_id, true, branch_id], (err, result) => {
            if (err) {
                return db.rollback(() => {
                    console.error(err);
                    return res.status(500).json({ error: "Failed to delete branch" });
                });
            }

            // Rename and flag the related items as deleted
            db.query(deleteItemsQuery, [branch_id, true, branch_id], (err, result) => {
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

                // Rename and flag the related users as deleted
                db.query(deleteUsersQuery, [branch_id, true, branch_id], (err, result) => {
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

                        return res.status(200).json({ message: "Branch and related items/users renamed and flagged as deleted successfully" });
                    });
                });
            });
        });
    });
});


export { BranchRouter };
