import {jwtDecode} from 'jwt-decode';

const TokenDecoder = {
    getAdminFromToken: async () => { // This function will get the information from the cookie.
        const token = document.cookie; // Gets the cookie from the page.
        try {
            const decodedToken = jwtDecode(token); // Decodes the token to show the information of the admin user.
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
