import axios from 'axios';
import server from './config.js'

const API_URL = `${server.hostname}/items`; 

const ItemService = {
    getAllItems: async (filters) => {
        return await axios.post(`${API_URL}/getItemsWithFilters`, filters);
    },
    getFromBranch: async (branch_id) => {
        return await axios.post(`${API_URL}/getFromBranch`, {branch_id})
    },
    getItemById: async (item_id) => {
        return await axios.get(`${API_URL}/${item_id}`);
    },
};

export default ItemService;
