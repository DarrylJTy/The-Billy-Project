import axios from 'axios';
import server from './config';

const API_URL = `${server.hostname}`; // backend API URLL

const TokenService = {
    getAdmin: async () => {
        axios.get(`${API_URL}/adminDetails`, {withCredentials: true})
            .then(response => {
                return response;
            })
            .catch(error => {
                console.log("Error:", error)
            });
    }
}

export default TokenService;