import React from "react";
import { Navigate, Outlet } from "react-router-dom";


function ProtectedRoute() {
    const token = document.cookie;
    return token ? <Outlet/>:<Navigate to="/login"/>;
}

export default ProtectedRoute;