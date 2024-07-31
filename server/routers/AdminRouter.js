import express from "express";
import db from "../db.js";
import bcrypt from 'bcrypt';

const AdminRouter = express.Router();

// Create an admin
AdminRouter.post("/create", async (req, res) => {
    const registerQuery = "INSERT INTO Admin (username, password, role, branch_id) VALUES (?)"
    bcrypt.hash(req.body.password.toString(), 10, (error, hash) => {
        if(error) return res.json({Error: "Error for hashing password"});
        const values = [
            req.body.username,
            hash,
            "branch_user",
            req.body.branch_id,
        ]
        db.query(registerQuery, [values], (error, result) => {
            if (error) {
                if (error.code == 'ER_DUP_ENTRY') {
                    return res.status(409).json({ Error: "Username already exists." });
                }
                if(error) return res.status(500).json({Error: "Error inserting data into server."});
            }
            return res.status(201).json({Status: "Success"});
        })
    })
})

// Get all admins
AdminRouter.post("/getAdmins", (req, res) => {
    const { username, branch_id, isDeleted } = req.body;

    console.log(req.body)

    let selectQuery = `
        SELECT * 
        FROM Admin
        WHERE 1=1
    `;

    const params = [];
    
    if (username) {
        selectQuery += ' AND username LIKE ?';
        params.push(`%${username}%`)
    }
    if (branch_id) {
        selectQuery += ' AND branch_id = ?';
        params.push(branch_id);
    }

    if (isDeleted !== undefined) {
        selectQuery += ' AND isDeleted = ?';
        params.push(isDeleted);
    }

    selectQuery += ' ORDER BY admin_id';

    console.log(selectQuery, params)

    db.query(selectQuery, params, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Failed to retrieve admins" });
        }
        return res.status(200).json(result);
    });
});

// Get specific admin by ID
AdminRouter.post("/getAdmin", (req, res) => {
    const selectQuery = "SELECT * FROM Admin WHERE admin_id = ? AND isDeleted = 0";
    db.query(selectQuery, [req.body.admin_id], (error, result) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: "Failed to retrieve admin" });
        }
        return res.status(200).json(result);
    });
});

// Update an admin
AdminRouter.post("/update", async (req, res) => {
    const { username, password, branch_id, admin_id } = req.body;

    try {
        // Check if the branch exists
        const branchQuery = "SELECT COUNT(*) AS count FROM Branch WHERE branch_id = ?";
        db.query(branchQuery, [branch_id], (err, results) => {
            if (err) {
                console.error("Database error while checking branch:", err);
                return res.status(500).json({ error: "Failed to check branch existence" });
            }

            if (results[0].count == 0) {
                return res.status(404).json({ error: "Branch not found" });
            }

            // Construct the update query and parameters
            let updateQuery = "UPDATE Admin SET username = ?, branch_id = ?";
            let queryParams = [username, branch_id];

            // Include password if it is provided
            if (password && password.trim() !== '') {
                // Hash the password
                bcrypt.hash(password, 10, (err, hashedPassword) => {
                    if (err) {
                        console.error("Error hashing password:", err);
                        return res.status(500).json({ error: "Failed to hash password" });
                    }

                    // Add the password to the update query
                    updateQuery += ", password = ?";
                    queryParams.push(hashedPassword);

                    // Add the condition for admin_id
                    updateQuery += " WHERE admin_id = ?";
                    queryParams.push(admin_id);

                    // Execute the query
                    db.query(updateQuery, queryParams, (err, result) => {
                        if (err) {
                            console.error("Database error while updating admin:", err);

                            if (err.code === 'ER_DUP_ENTRY') {
                                return res.status(409).json({ error: "Username already exists" });
                            }

                            return res.status(500).json({ error: "Failed to update admin" });
                        }

                        if (result.affectedRows === 0) {
                            return res.status(404).json({ error: "Admin not found" });
                        }

                        return res.status(200).json({ message: "Admin updated successfully" });
                    });
                });
            } else {
                // No password provided, just update username and branch_id
                updateQuery += " WHERE admin_id = ?";
                queryParams.push(admin_id);

                // Execute the query
                db.query(updateQuery, queryParams, (err, result) => {
                    if (err) {
                        console.error("Database error while updating admin:", err);

                        if (err.code === 'ER_DUP_ENTRY') {
                            return res.status(409).json({ error: "Username already exists" });
                        }

                        return res.status(500).json({ error: "Failed to update admin" });
                    }

                    if (result.affectedRows === 0) {
                        return res.status(404).json({ error: "Admin not found" });
                    }

                    return res.status(200).json({ message: "Admin updated successfully" });
                });
            }
        });
    } catch (err) {
        console.error("Unexpected error:", err);
        return res.status(500).json({ error: "Unexpected error occurred" });
    }
});




// Delete an admin (flag as deleted)
AdminRouter.post("/delete", (req, res) => {
    const { admin_id, username } = req.body

    // Ensure the item_name includes "(Deleted)" and the id
    const updatedAdminName = `${username} (Deleted - ID: ${admin_id})`;
    const deleteQuery = "UPDATE Admin SET username = ?, isDeleted = 1 WHERE admin_id = ?";

    db.query(deleteQuery, [updatedAdminName, admin_id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Failed to delete admin" });
        }
        return res.status(200).json({ message: "Admin deleted successfully" });
    });
});

export { AdminRouter };
