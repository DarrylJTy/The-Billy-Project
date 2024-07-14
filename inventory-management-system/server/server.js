import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
const saltRounds = 10;
import {ItemRouter as itemRouter} from '../server/routers/ItemRouter.js'

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

app.use('/items', itemRouter)

app.listen(8001, () => {
    console.log('Running in port 8001')
})