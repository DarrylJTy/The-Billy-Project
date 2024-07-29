import dotenv from 'dotenv';

dotenv.config();

const NODE_PRODUCTION = process.env.NODE_PRODUCTION || false

const JWT_SECRET = process.env.JWT_SECRET

const INVENTORY_ORIGIN = process.env.INVENTORY_ORIGIN || "http://localhost:5173"
const SHOWCASE_ORIGIN = process.env.SHOWCASE_ORIGIN || "http://localhost:8000"

const ORIGINS = {
    inventory: INVENTORY_ORIGIN,
    showcase: SHOWCASE_ORIGIN,
}

export { ORIGINS, JWT_SECRET, NODE_PRODUCTION };