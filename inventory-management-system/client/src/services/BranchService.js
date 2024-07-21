import axios from 'axios';

const API_URL = 'http://localhost:8001/branches'; // backend API URL

const BranchService = {
    getAllBranches: async () => {
        return await axios.get(`${API_URL}/getBranches`);
    },
    getSpecificBranchName: async (branch_id) => {
        return await axios.post(`${API_URL}/getSpecificBranchName`, {branch_id});
    }
}

export default BranchService;