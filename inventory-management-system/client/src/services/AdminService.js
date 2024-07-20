import axios from 'axios';

const API_URL = 'http://localhost:8001/admin'; // backend API URL

const AdminService = {
    getAllAdmins: async () => {
        return await axios.get(`${API_URL}/getAdmins`);
    },
}

export default AdminService;