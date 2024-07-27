import axios from 'axios';
import server from './config';

const API_URL = `${server.hostname}`; // backend API URLL

const TokenService = {
    getAdmin: async () => {
        axios.get(`${API_URL}/adminDetails`, {withCredentials: true})
            .then(response => {
                console.log("From Token Service (role):", response.data.role)
                console.log("From Token Service (data):", response.data)
                console.log("From Token Service (response):", response)
                return response.data;
            })
            .catch(error => {
                console.log("From Token Service Error:", error)
            });
    }
}

export default TokenService;