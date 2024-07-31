import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { ORIGINS } from './config.js';
import { LoginRouter } from './routers/LoginRouter.js';
import { ItemRouter } from './routers/ItemRouter.js';
import { BranchRouter } from './routers/BranchRouter.js';
import { AdminRouter } from './routers/AdminRouter.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allowedOrigins = Object.values(ORIGINS)

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        } else {
            return callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["POST", "GET"],
    credentials: true,
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization"
}

app.use(cors(corsOptions));

app.use(cookieParser());

app.get('/', (req, res) => {
    res.send("You are connected!");
})

app.use('/', LoginRouter)
app.use('/items', ItemRouter)
app.use('/branches', BranchRouter)
app.use('/admins', AdminRouter)

app.listen(8001, () => {
    console.log("Server is running!")
})