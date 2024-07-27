import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ViewItems from "./components/ViewItems";
import ViewAll from "./components/ViewAll";
import NotFound from './pages/404';
import SessionService from "./services/SessionService";
import ProtectedRoute from "./utils/ProtectedRoutes"
import Branches from "./components/Branches";
import Admins from "./components/Admins";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMasterAdmin, setIsMasterAdmin] = useState(false);

  useEffect(() => {
    const checkIsLoggedIn = async () => {
      const status = await SessionService.isLoggedIn();
      setIsLoggedIn(status)
    }
		const checkAdminStatus = async () => {
      const role = await SessionService.isMasterAdmin();
        setIsMasterAdmin(role);
    };
    checkIsLoggedIn();
    checkAdminStatus();
	}, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        {!isLoggedIn && (
          <>
            <Route path='/' element={<Navigate to="/login" />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </>
        )}

        {/* Protected Routes */} 
        <Route element={<ProtectedRoute />}> {/* Master Admin Protected*/ }
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Navigate to="/viewitems" />} />
          <Route path="/register" element={<Navigate to="/viewitems" />} />
          <Route path="/404" element={<NotFound />} exact />
        {!isMasterAdmin ? (
            <>
              <Route path="/viewitems" element={<ViewItems />}/>
              <Route path="/viewallitems" element={<Navigate to="/viewitems" />}/>
              <Route path="/branches" element={<Navigate to="/viewitems"/>}/>
              <Route path="/admins" element={<Navigate to="/viewitems" />} />
            </>
        ): (
          
          <>
            <Route path="/viewallitems" element={<ViewAll />}/>
            <Route path="/viewitems" element={<Navigate to="/viewallitems" />}/>
            <Route path="/branches" element={<Branches />}/>
            <Route path="/admins" element={<Admins />} />
          </>
        )}
        </Route>
        

        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}
