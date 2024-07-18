import axios from 'axios';

const API_URL = 'http://localhost:8001/branches'; // backend API URL

const BranchService = {
    getAllBranches: async () => {
        return await axios.get(`${API_URL}/getBranches`);
    },
}

export default BranchService;