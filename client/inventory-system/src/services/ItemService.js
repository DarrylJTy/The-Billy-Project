import axios from 'axios';
import server from './config';

const API_URL = `${server.hostname}/items`; // backend API URL

const ItemService = {

    getAllItemsWithFilters: async (itemFilters) => {
        return await axios.post(`${API_URL}/getItemsWithFilters`, itemFilters);
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
    deleteItem: async (item_id, item_name) => {
        return await axios.post(`${API_URL}/delete`, { item_id, item_name });
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
