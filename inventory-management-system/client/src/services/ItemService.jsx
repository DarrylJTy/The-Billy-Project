import axios from 'axios';

const API_URL = 'http://localhost:8001/items'; // Replace with your backend API URL

const ItemService = {
    getAllItems: async () => {
        return await axios.get(API_URL);
    },
    createItem: async (itemData) => {
        return await axios.post(API_URL, itemData);
    },
    deleteItem: async (itemId) => {
        return await axios.delete(`${API_URL}/${itemId}`);
    }
};

export default ItemService;
