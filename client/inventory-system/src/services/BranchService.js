import axios from 'axios';

const API_URL = `${import.meta.env.VITE_SERVER_URL}/branches`; // backend API URL

const BranchService = {
    createBranch: async (branchData) => {
        return await axios.post(`${API_URL}/create`, branchData)
    },
    getAllBranches: async () => {
        return await axios.get(`${API_URL}/getBranches`);
    },
    getAllBranchWithDeleted: async () => {
        return await axios.get(`${API_URL}/getBranchesWithDeleted`);
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