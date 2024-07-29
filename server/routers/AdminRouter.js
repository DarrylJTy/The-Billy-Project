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
            if (error.code === 'ER_DUP_ENTRY') {
                    return res.status(409).json({ Error: "Username already exists" });
                }
            if(error) return res.json({Error: "Error inserting data into server."});
            return res.json({Status: "Success"});
        })
    })
})

// Get all admins
AdminRouter.get("/getAdmins", (req, res) => {
    const selectQuery = "SELECT * FROM Admin WHERE isDeleted = 0";
    db.query(selectQuery, (err, result) => {
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
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const updateQuery = "UPDATE Admin SET username = ?, password = ?, branch_id = ? WHERE admin_id = ?";
        db.query(updateQuery, [username, hashedPassword, branch_id, admin_id], (err, result) => {
            if (err) {
                console.error("Database error:", err);

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
    } catch (err) {
        console.error("Error hashing password:", err);
        return res.status(500).json({ error: "Failed to hash password" });
    }
});


// Delete an admin (flag as deleted)
AdminRouter.post("/delete", (req, res) => {
    const admin_id = req.body.admin_id;
    const deleteQuery = "UPDATE Admin SET isDeleted = 1 WHERE admin_id = ?";

    db.query(deleteQuery, [admin_id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Failed to delete admin" });
        }
        return res.status(200).json({ message: "Admin deleted successfully" });
    });
});

export { AdminRouter };
