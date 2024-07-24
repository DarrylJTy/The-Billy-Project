import axios from 'axios';

const API_URL = `${import.meta.env.VITE_SERVER_URL}/items`; // Replace with your backend API URL

const ItemService = {
    // Get all items with their sizes
    getAllItems: async () => {
        return await axios.get(API_URL);
    },
    
    // Get all items including deleted ones
    getAllWithDeleted: async () => {
        return await axios.get(`${API_URL}/getAllWithDeleted`); // Fixed the typo in the URL
    },
    
    // Get items from a specific branch
    getFromBranch: async (branch_id) => {
        return await axios.post(`${API_URL}/getFromBranch`, { branch_id });
    },
    
    // Create a new item
    createItem: async (itemData) => {
        return await axios.post(`${API_URL}/create`, itemData);
    },
    
    // Update an existing item
    updateItem: async (itemData) => {
        return await axios.post(`${API_URL}/update`, itemData);
    },
    
    // Delete an item
    deleteItem: async (item_id) => {
        return await axios.post(`${API_URL}/delete`, { item_id });
    },
    
    // Get all sizes
    getSizes: async () => {
        return await axios.get(`${API_URL}/sizes`);
    },

    getTotalProducts: async (branch_id, isMasterAdmin) => {
        return await axios.post(`${API_URL}/totalProductsInBranch`, { branch_id, isMasterAdmin })
    },

    getTotalItemStocks: async (branch_id, isMasterAdmin) => {
        return await axios.post(`${API_URL}/totalItemStocksInBranch`, { branch_id, isMasterAdmin })
    },

    getTotalOutOfStockInBranch: async (branch_id, isMasterAdmin) => {
        return await axios.post(`${API_URL}/totalOutOfStockInBranch`, { branch_id, isMasterAdmin })
    },

    getTotalInventoryCost: async (branch_id, isMasterAdmin) => {
        return await axios.post(`${API_URL}/totalInventoryCostInBranch`, { branch_id, isMasterAdmin })
    },

    getTopItems: async (branch_id, isMasterAdmin) => {
        return await axios.post(`${API_URL}/topItems`, { branch_id, isMasterAdmin  })
    },
    
    getItemsPerCategory: async (branch_id, isMasterAdmin) => {
        return await axios.post(`${API_URL}/itemsPerCategory`, { branch_id, isMasterAdmin  })
    },
};

export default ItemService;
