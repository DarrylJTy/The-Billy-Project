import React, { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import TokenDecoder from "../src/services/TokenDecoder";

const renderPage = (isMasterAdmin, token) => {
    if(!isMasterAdmin && token) {
        return <Outlet/> 
    } else {
        return <Navigate to="/login"/>;
    }
}

const BranchProtectedRoutes = () => {
	const [isMasterAdmin, setIsMasterAdmin] = useState(false);
    const [token, setToken] = useState(false)

	useEffect(() => {
        const tokenExists = async () => {
            const token = await TokenDecoder.getToken();
            setToken(token);
        }
		const checkAdminStatus = async () => {
			const status = await TokenDecoder.isMasterAdmin();
			setIsMasterAdmin(status);
		};
		checkAdminStatus();
        tokenExists();
        renderPage(isMasterAdmin, token);
	}, []);
}

export default BranchProtectedRoutes;