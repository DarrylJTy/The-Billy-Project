import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ViewItems from "./components/ViewItems";
import ViewAll from "./components/ViewAll";
import AdminRouteWrapper from "./components/MasterAdminWrapper";
import BranchAdminWrapper from "./components/BranchAdminWrapper";
import NotFound from './pages/404';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Home />} />
        <Route path="/404" element={<NotFound />} exact />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        {/* Protected Routes */}
        <AdminRouteWrapper path="/viewall" component={ViewAll} exact />
        <BranchAdminWrapper path="/viewitems" component={ViewItems} exact />

        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}
