import {jwtDecode} from 'jwt-decode';

const TokenDecoder = {
    getAdminFromToken: async () => {
        const token = localStorage.getItem("token");
        try {
            console.log(token);
            // const decodedToken = jwtDecode(token);
            // console.log(decodedToken);
            // return decodedToken;
            return token;
        } catch (error) {
            // console.error('Error decoding token:', error);
            console.log(token)
            return token;
        }
    },
    getAdminRole: async () => {
        const token = localStorage.getItem('token');
        if(token) {
            const admin = getUserFromToken(token);
            if (admin) {
                console.log('Admin attributes from token:', admin);
                if (admin.adminRole === 'branch_user') {
                    // Perform actions for this admin role
                    console.log('Admin role verified on client side:', admin.role);
                } else {
                    // Handle case where admin role does not match
                    console.log('Invalid admin role on client side:', admin.role);
                }
            }
        }
    }
};

export default TokenDecoder;
