import axios from 'axios';
import server from './config';

const API_URL = `${server.hostname}/admins`; // backend API URL

const AdminService = {
    getAllAdmins: async (filters) => {
        return await axios.post(`${API_URL}/getAdmins`, filters);
    },

    // Create a new admin
    createAdmin: async (adminData) => {
        return await axios.post(`${API_URL}/create`, adminData);
    },

    // Update an existing admin
    updateAdmin: async (adminData) => {
        return await axios.post(`${API_URL}/update`, adminData);
    },

    // Delete (flag as deleted) an admin
    deleteAdmin: async (admin_id, username) => {
        return await axios.post(`${API_URL}/delete`, { admin_id, username });
    }
}

export default AdminService;