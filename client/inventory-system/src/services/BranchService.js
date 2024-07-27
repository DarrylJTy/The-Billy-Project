import axios from 'axios';
import server from './config';

const API_URL = `${server.hostname}/branches`; // backend API URL

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