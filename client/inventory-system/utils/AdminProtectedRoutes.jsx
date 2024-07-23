import React, { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import TokenDecoder from "../src/services/TokenDecoder";

const renderPage = (isMasterAdmin) => {
    if(isMasterAdmin) {
        console.log(isMasterAdmin)
        return <Outlet/>;
    } else {
        return <Navigate to="/login"/>;
    }
}

const AdminProtectedRoutes = () => {
	const [isMasterAdmin, setIsMasterAdmin] = useState(false);

	useEffect(() => {
		const checkAdminStatus = async () => {
			const status = await TokenDecoder.isMasterAdmin();
			setIsMasterAdmin(status);
		};
		checkAdminStatus();
        renderPage(isMasterAdmin);
	}, []);
}

export default AdminProtectedRoutes;