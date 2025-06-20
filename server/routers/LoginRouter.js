import express from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { JWT_SECRET, NODE_PRODUCTION } from '../config.js'
import db from '../db.js'

const LoginRouter = express.Router();

const saltRounds = 10;

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if(!token) {
        return res.sendStatus(401); // Unauthorized
    } else {
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if(err) {
                return res.sendStatus(403); // Forbidden
            } else {
                req.admin = decoded;
                next();
            }
        })
    }
}

LoginRouter.get('/dashboard', verifyUser, (req, res) => {
    return res.json({Status: "Success", username: req.admin.usernamne})
})

LoginRouter.get('/adminDetails', verifyUser, (req, res) => {
    return res.json(req.admin)
})

LoginRouter.post('/register', (req, res) => {
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

LoginRouter.post('/login', (req, res) => {
    const query = 'SELECT * FROM Admin WHERE username = ? AND isDeleted = 0';
    db.query(query, [req.body.username], (error, data) => {
        if (error) return res.status(500).json({ Error: "Server Error." })
        if (data.length > 0) {
            bcrypt.compare(req.body.password.toString(), data[0].password, (error, response) => {
                if(error) return res.status(401).json({ error: "Invalid username or password" });
            if(response) {
                const admin = {
                    admin_id: data[0].admin_id,
                    username: data[0].username,
                    password: data[0].password,
                    role: data[0].role,
                    branch_id: data[0].branch_id
                };
                const token = jwt.sign(admin, JWT_SECRET, {expiresIn: '2h'})
                
                const now = new Date();
                const expireDate = new Date(now.getTime() + 12 * 60 * 60 * 1000); // 12 hours

                const cookieOptions = {
                    path: "/",
                    expires: expireDate,
                    httpOnly: true,
                    secure: NODE_PRODUCTION, 
                }

                if (NODE_PRODUCTION) {
                    cookieOptions.sameSite = "None";
                }

                res.cookie('token', token, cookieOptions);
                
                return res.status(200).json({Status: "Login Successful"});
            } else {
                return res.json({Error: "Incorrect Password."});
            }
            });
        } else {
            return res.status(401).json({ error: "Invalid username or password" });
        }
    })
})

LoginRouter.get('/logout', (req, res) => {
    const cookieOptions = {
        path: "/",
        expires: new Date(0),
        httpOnly: true,
        secure: NODE_PRODUCTION, 
    }

    if (NODE_PRODUCTION) {
        cookieOptions.sameSite = "None";
    }
    
    res.cookie('token', '', cookieOptions);
    res.json({ message: 'Logged out successfully' });
});

export { LoginRouter };
