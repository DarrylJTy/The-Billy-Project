import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import RequireAuth from "react-auth-kit";

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<RequireAuth loginPath="/Login">
						<Dashboard />
					</RequireAuth>
				}
			></Route>
			<Route path="/Login" element={<Login />}></Route>
		</Routes>
	);
}

export default App;
