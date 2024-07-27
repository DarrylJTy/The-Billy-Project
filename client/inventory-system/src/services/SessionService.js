import axios from 'axios';
import server from './config';

const API_URL = `${server.hostname}/items`; // backend API URL

const SessionService = {
    isLoggedIn: async () => {
        try {
            const response = await axios.get(`${API_URL}/login`);
            console.log(response);
            return response.data.isLoggedIn;
        } catch (err) {
            // console.error('Error checking login status:');
            return false; // Return a default value or handle error accordingly
        }
    },
    isMasterAdmin: async () => {
        try {
            const response = await axios.get(`${API_URL}/login`);
            return response.data.isMasterAdmin;
        } catch (err) {
            console.error('Error checking master admin status:');
            return false; // Return a default value or handle error accordingly
        }
    },
    getBranchId: async () => {
        try {
            const response = await axios.get(`${API_URL}/fetchAdminData`);
            console.log(response.data.branch_id);
            return response.data.branch_id;
        } catch (err) {
            console.error('Error fetching branch ID:', err);
            return null; // Return a default value or handle error accordingly
        }
    },
};

export default SessionService;
