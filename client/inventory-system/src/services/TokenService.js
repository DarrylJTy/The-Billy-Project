import axios from 'axios';
import server from './config';

const API_URL = `${server.hostname}`; // backend API URL

const TokenService = {
    getAdmin: async () => {
        try {
            // Perform the request and wait for the response
            const response = await axios.get(`${API_URL}/adminDetails`, { withCredentials: true });
            
            // Log and return the response data
            console.log("From Token Service (role):", response.data.role);
            console.log("From Token Service (data):", response.data);
            console.log("From Token Service (response):", response);

            return response.data;
        } catch (error) {
            // Handle any errors that occur during the request
            console.log("From Token Service Error:", error);
            // Optionally, you can rethrow the error if you want to handle it further up the chain
            throw error;
        }
    }
}

export default TokenService;
