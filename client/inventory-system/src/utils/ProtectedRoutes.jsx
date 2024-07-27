import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";


function ProtectedRoute() {
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        const checkAdmin = localStorage.getItem('admin');
        if (checkAdmin) {
        setAdmin(checkAdmin);
        }
    }, [])
    
    return admin ? <Outlet/>:<Navigate to="/login"/>;
}

export default ProtectedRoute;