import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
import db from './db.js'
import {config} from 'dotenv';
const saltRounds = 10;
import {ItemRouter} from './routers/ItemRouter.js'
import {BranchRouter} from './routers/BranchRouter.js'
import { AdminRouter } from './routers/AdminRouter.js';

const app = express();
app.use(express.json());
app.use(cors({
    origin: [process.env.INVENTORY_URL, process.env.SHOWCASE_URL],
    methods: ["POST", "GET"],
    credentials: true
}));

app.use(cookieParser());

config();

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

app.get('/verify', verifyUser, (req, res) => {
    return res.json({Status: "Success", username: req.admin.username})
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

app.post('/login', (req, res) => {
    const query = 'SELECT * FROM Admin WHERE username = ? AND isDeleted = 0';
    db.query(query, [req.body.username], (error, data) => {
        if(error) return res.json({Error: "Login error in server."})
        if(data.length > 0) {
            bcrypt.compare(req.body.password.toString(), data[0].password, (error, response) => {
                if(error) return res.json({Error: "Password compare error."})
            if(response) {
                const admin = {
                    admin_id: data[0].admin_id,
                    username: data[0].username,
                    password: data[0].password,
                    role: data[0].role,
                    branch_id: data[0].branch_id
                };
                const token = jwt.sign(admin, process.env.JWT_SECRET, {expiresIn: '2h'})
                
                const now = new Date();
                const expireDate = new Date(now.getTime() + 2 * 60 * 60 * 1000); // 2 hours from now

                res.cookie('token', token, {
                        expires: expireDate,
                });
                
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

app.use('/items', ItemRouter)
app.use('/branches', BranchRouter)
app.use('/admins', AdminRouter)

app.listen(8001, () => {
    console.log('Running in port 8001')
})