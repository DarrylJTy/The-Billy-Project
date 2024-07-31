import axios from 'axios';
import server from './config';

const API_URL = `${server.hostname}`; // backend API URL

const TokenService = {
    getAdmin: async () => {
        try {
            const response = await axios.get(`${API_URL}/adminDetails`, { withCredentials: true });

            return response.data;
        } catch (error) {
            console.log("From Token Service Error");
        }
    },
    getAdminBranchID: async () => {
        try {
            const response = await axios.get(`${API_URL}/adminDetails`, { withCredentials: true });
            return response.data.branch_id;
        } catch (error) {
            console.log("From Token Service Error");
        }
    },
    getIsMasterAdmin: async () => {
        try {
            const response = await axios.get(`${API_URL}/adminDetails`, { withCredentials: true });
            const isMasterAdmin = response.data.role === "admin"
            return isMasterAdmin;
        } catch (error) {
            console.log("From Token Service Error");
        }
    },
}

export default TokenService;
