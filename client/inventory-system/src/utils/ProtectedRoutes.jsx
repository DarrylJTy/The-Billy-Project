import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";


function ProtectedRoute() {
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        const fetchAdminData = async () => {
            const adminData = await TokenService.getAdmin();
            if (adminData) {
                setAdmin(adminData);
            }
        }
        fetchAdminData();
    }, [])
    
    return admin ? <Outlet/>:<Navigate to="/login"/>;
}

export default ProtectedRoute;