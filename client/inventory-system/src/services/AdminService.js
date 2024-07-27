import axios from 'axios';
import server from './config';

const API_URL = `${server.hostname}/admins`; // backend API URL

const AdminService = {
    getAllAdmins: async () => {
        return await axios.get(`${API_URL}/getAdmins`);
    },
    // Get a specific admin by ID
    getAdminById: async (admin_id) => {
        return await axios.post(`${API_URL}/getAdmin`, { admin_id });
    },

    // Create a new admin
    createAdmin: async (adminData) => {
        console.log(adminData)
        return await axios.post(`${API_URL}/create`, adminData);
    },

    // Update an existing admin
    updateAdmin: async (adminData) => {
        return await axios.post(`${API_URL}/update`, adminData);
    },

    // Delete (flag as deleted) an admin
    deleteAdmin: async (admin_id) => {
        return await axios.post(`${API_URL}/delete`, { admin_id });
    }
}

export default AdminService;