import axios from 'axios';

const API_URL = 'http://localhost:8001/branches'; // backend API URL

const BranchService = {
    createBranch: async (branchData) => {
        return await axios.post(`${API_URL}/create`, branchData)
    },
    getAllBranches: async () => {
        return await axios.get(`${API_URL}/getBranches`);
    },
    getSpecificBranchName: async (branch_id) => {
        return await axios.post(`${API_URL}/getSpecificBranchName`, {branch_id});
    },
    updateBranch: async (branchData) => {{
        return await axios.post(`${API_URL}/update`, branchData);
    }},
    deleteBranch: async (branch_id) => {
        console.log(branch_id)
        return await axios.post(`${API_URL}/delete`, {branch_id});
    }
}

export default BranchService;