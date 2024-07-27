import {jwtDecode} from 'jwt-decode';

const TokenDecoder = {
    getToken: async () => {
        return document.cookie;
    },
    getAdminFromToken: async () => { // This function will get the information from the cookie.
        const token = await TokenDecoder.getToken(); // Gets the cookie from the page.
        console.log(token);
        try {
            const decodedToken = jwtDecode(token); // Decodes the token to show the information of the admin user.
            console.log(decodedToken);
            return decodedToken; // Returns the decoded token
        } catch (error) {
            console.error('Error decoding token:', error);
            return token;
        }
    },
    isMasterAdmin: async () => {
        const admin = await TokenDecoder.getAdminFromToken();
        return admin ? admin.role === 'admin' : false;
    },
    getBranchId: async () => {
        const admin = await TokenDecoder.getAdminFromToken();
        return admin.branch_id;
    }
};

export default TokenDecoder;
