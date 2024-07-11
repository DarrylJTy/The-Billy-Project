import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
const saltRounds = 10;

const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(cookieParser());

const db = mysql.createConnection({
    host: "thebillyproject-db.c102sq8osf99.ap-southeast-2.rds.amazonaws.com",
    user: "root",
    password: "*ROOTpass121212*",
    database: "The-Billy-Project"
})

// just to check connection

// const pool = mysql.createPool({
//     host: "thebillyproject-db.c102sq8osf99.ap-southeast-2.rds.amazonaws.com",
//     user: "root",
//     password: "*ROOTpass121212*",
//     database: "The-Billy-Project"
// })

// if(pool) {
//     console.log("nice connection");
// }

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    console.log(req.cookies.token);
    if(!token) {
        console.log(req.cookies.token);
        return res.json({Error: "You not authenticated." + req.cookies.token})
    } else {
        jwt.verify(token, "secret", (err, decoded) => {
            if(err) {
                return res.json({Error: "Error with token."})
            } else {
                req.username = decoded.username;
                next();
            }
        })
    }
}

app.get('/', verifyUser, (req, res) => {
    return res.json({Status: "Success", username: req.username})
})

app.post('/register', (req, res) =>{
    const registerQuery = "INSERT INTO Admin (admin_id, username, password, role, branch_id) VALUES (?)"
    bcrypt.hash(req.body.password.toString(), saltRounds, (error, hash) => {
        if(error) return res.json({Error: "Error for hashing password"});
        const values = [
            req.body.admin_id,
            req.body.username,
            hash,
            req.body.role,
            req.body.branch_id,
        ]
        db.query(registerQuery, [values], (error, result) => {
            if(error) return res.json({Error: "Error inserting data into server."});
            return res.json({Status: "Success"});
        })
    })
})

// work on cookies on why its not working

app.post('/login', (req, res) => {
    const query = 'SELECT * FROM Admin WHERE username = ?';
    db.query(query, [req.body.username], (error, data) => {
        if(error) return res.json({Error: "Login error in server."})
        if(data.length > 0) {
            bcrypt.compare(req.body.password.toString(), data[0].password, (error, response) => {
                if(error) return res.json({Error: "Password compare error."})
            if(response) {
                const username = data[0].username;
                const token = jwt.sign({username}, "secret", {expiresIn: '1d'}) // change this to a private key in an .env file
                res.cookie('token', token);
                return res.json({Status: "Success"});
            } else {
                return res.json({Error: "Incorrect Password."});
            }
            });
        } else {
            return res.json({Error: "Username not found."})
        }
    })
})

app.get('/logout', (req, res) => {
    res.clearCookie('token');
    return res.json({Status: "Success"})
})

// ----------------------------------------------

// Create an item
app.post("/items", (req, res) => {
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
app.get("/items", (req, res) => {
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
app.get("/items/:id", (req, res) => {
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
app.put("/items/:id", (req, res) => {
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
app.delete("/items/:id", (req, res) => {
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


// ----------------------------------------------

app.listen(8001, () => {
    console.log('Running in port 8001')
})