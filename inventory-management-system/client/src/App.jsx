import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ViewItems from "./components/ViewItems";
import ViewAll from "./components/ViewAll";
import AdminProtectedRoutes from "../utils/AdminProtectedRoutes";
import BranchProtectedRoutes from "../utils/BranchProtectedRoutes";
import NotFound from './pages/404';
import TokenDecoder from "./services/TokenDecoder";
import ProtectedRoute from "../utils/ProtectedRoutes";
import Branches from "./components/Branches";

export default function App() {
  const token = document.cookie;
  const [isMasterAdmin, setIsMasterAdmin] = useState(false);

	useEffect(() => {
		const checkAdminStatus = async () => {
			const status = await TokenDecoder.isMasterAdmin();
			setIsMasterAdmin(status);
		};
		checkAdminStatus();
	}, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        {!token && (
          <>
            <Route path='/' element={<Home />} />
            <Route path="/404" element={<NotFound />} exact />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </>
        )}

        {/* Protected Routes */} 
        <Route element={<ProtectedRoute />}> {/* Master Admin Protected*/ }
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<Navigate to="/" />} />
          <Route path="/register" element={<Navigate to="/" />} />
          <Route path="/404" element={<NotFound />} exact />
        {!isMasterAdmin ? (
            <>
              <Route path="/viewitems" element={<ViewItems />}/>
              <Route path="/viewallitems" element={<Navigate to="/viewitems" />}/>
            </>
        ): (
          
          <>
            <Route path="/viewallitems" element={<ViewAll />}/>
            <Route path="/viewitems" element={<Navigate to="/viewallitems" />}/>
            <Route path="/branches" element={<Branches/>}/>
          </>
        )}
        </Route>
        

        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}
