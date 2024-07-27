import express from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { JWT_SECRET } from '../config.js'
import db from '../db.js'
import session from 'express-session'

const LoginRouter = express.Router();

const saltRounds = 10;

LoginRouter.use(session({
    key: "admin",
    secret: process.env.SECRET || 'secret',
    resave: true,
    saveUninitialized: false,
}))

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if(!token) {
        return res.json({Error: "You not authenticated."})
    } else {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(err) {
                return res.json({Error: "Error with token."})
            } else {
                req.admin = decoded;
                next();
            }
        })
    }
}

LoginRouter.get('/dashboard', verifyUser, (req, res) => {
    return res.json({Status: "Success", username: req.admin.username})
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

LoginRouter.get('/login', (req, res) => {
    if (req.session.admin) {
        if (req.session.admin.role === 'admin') {
            res.send({ isLoggedIn: true, isMasterAdmin: true, admin: req.session.admin })
        } else {
            res.send({ isLoggedIn: true, isMasterAdmin: false, admin: req.session.admin })
        }
    } else {
        res.send({ isLoggedIn: false})
    }
})

LoginRouter.post('/login', (req, res) => {
    const query = 'SELECT * FROM Admin WHERE username = ? AND isDeleted = 0';
    db.query(query, [req.body.username], (error, data) => {
        if(error) return res.json({Error: "Login error in server."})
        if(data.length > 0) {
            bcrypt.compare(req.body.password.toString(), data[0].password, (error, response) => {
                if(error) return res.json({Error: "Password Incorrect. Please try again."})
            if(response) {
                const admin = {
                    admin_id: data[0].admin_id,
                    username: data[0].username,
                    password: data[0].password,
                    role: data[0].role,
                    branch_id: data[0].branch_id
                };
                req.session.admin = admin;
                
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

LoginRouter.get('/logout', (req, res) => {
    req.session.destroy();
});

LoginRouter.get('/fetchAdminData', (req, res) => {
    res.send(req.session.admin);
})

export { LoginRouter };
