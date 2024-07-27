import axios from 'axios';
import server from './config.js'

const API_URL = `${server.hostname}/items`; // Replace with your backend API URL

const ItemService = {
    getAllItems: async () => {
        return await axios.get(API_URL);
    },
    getFromBranch: async (branch_id) => {
        return await axios.post(`${API_URL}/getFromBranch`, {branch_id})
    },
    getItemById: async (item_id) => {
        return await axios.get(`${API_URL}/${item_id}`);
    },
};

export default ItemService;
