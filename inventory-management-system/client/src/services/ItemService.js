import axios from 'axios';

const API_URL = 'http://localhost:8001/items'; // Replace with your backend API URL

const ItemService = {
    getAllItems: async () => {
        return await axios.get(API_URL);
    },
    createItem: async (itemData) => {
        console.log(itemData);
        return await axios.post(`${API_URL}/create`, itemData);
    },
    updateItem: async (itemData) => {{
        return await axios.post(`${API_URL}/update`, itemData);
    }},
    deleteItem: async (item_id) => {
        return await axios.post(`${API_URL}/delete`, {item_id});
    }
};

export default ItemService;
