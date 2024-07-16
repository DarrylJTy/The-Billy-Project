import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ViewItems from "./components/ViewItems";
import AddItem from "./components/AddItem";
import NotFound from './pages/404';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/viewitems' element={<ViewItems />} />
        <Route path='/additem' element={<AddItem />} />
        <Route path='/404' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
