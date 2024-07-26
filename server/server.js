import express from 'express';
import path from 'path';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { fileURLToPath } from 'url';
import { ORIGINS } from './config.js';
import { LoginRouter } from './routers/LoginRouter.js';
import { ItemRouter } from './routers/ItemRouter.js';
import { BranchRouter } from './routers/BranchRouter.js';
import { AdminRouter } from './routers/AdminRouter.js';

const app = express();
app.use(express.json());

// Serve static files from the "build" directory
app.use(express.static('dist'));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve the index.html file for all routes except API endpoints
app.get(['/', '/register', '/login', '/viewitems', '/viewallitems', '/branches', '/admins', '/dashboard'], (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

// app.get('*', (req, res) => {
//     res.status(404).send({ error: 'unknown endpoint' });
// });

// const allowedOrigins = Object.values(ORIGINS)

// const corsOptions = {
//     origin: (origin, callback) => {
//         if (!origin) return callback(null, true);
//         if (allowedOrigins.includes(origin)) {
//             return callback(null, true);
//         } else {
//             return callback(new Error("Not allowed by CORS"));
//         }
//     },
//     methods: ["POST", "GET"],
//     credentials: true,
//     allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization"
// }

// app.use(cors(corsOptions));

app.use(cookieParser());

// app.get('/', (req, res) => {
//     res.send("You are connected!");
// })

app.use('/api', LoginRouter)
app.use('/api/items', ItemRouter)
app.use('/api/branches', BranchRouter)
app.use('/api/admins', AdminRouter)

app.listen(8001, () => {
    console.log("ORIGINS:", ORIGINS)
    console.log('Running in port 8001')
})