import axios from 'axios';

const API_URL = 'http://localhost:8001/items'; // Replace with your backend API URL

const config = {
    headers:{
        "Content-Type":"multipart/form-data"
    }
}

const ItemService = {
    getAllItems: async () => {
        return await axios.get(API_URL);
    },
    createItem: async (itemData, item_image) => {
        const formData = new FormData();
        Object.keys(itemData).forEach(key => formData.append(key, itemData[key]));
        formData.append('item_image', item_image);
        return await axios.post(`${API_URL}/create`, formData, config);
    },
    updateItem: async (itemData) => {{
        return await axios.post(`${API_URL}/update`, itemData);
    }},
    deleteItem: async (item_id) => {
        return await axios.post(`${API_URL}/delete`, {item_id});
    }
};

export default ItemService;
