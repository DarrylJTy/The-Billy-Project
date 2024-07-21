import express from "express";
import db from "../db.js";

const BranchRouter = express.Router();

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

BranchRouter.get("/getSpecificBranchName", (req, res) => {
	const selectQuery = "SELECT branch_name FROM Branch WHERE branch_id = ?";
	db.query(selectQuery, [req.body.branch_id , 0], (err, result) => {
		if (err) {
            console.error(err);
            return res.status(500).json({ error: "Failed to retrieve branch" });
        }
        return res.status(200).json(result);
    });
})

export {BranchRouter};