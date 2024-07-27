import React, { useEffect, useState } from "react";
import {
	CDBSidebar,
	CDBSidebarContent,
	CDBSidebarFooter,
	CDBSidebarHeader,
	CDBSidebarMenu,
	CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink, useNavigate } from "react-router-dom";
import TokenDecoder from "../services/TokenDecoder";
import BranchService from "../services/BranchService";
import axios from "axios";
import server from "../services/config"

const Sidebar = () => {
	const [isMasterAdmin, setIsMasterAdmin] = useState(false);
	const [branchName, setBranchName] = useState(null);

	useEffect(() => {
		const checkAdminStatus = async () => {
			// const status = await TokenDecoder.isMasterAdmin();
			axios.get(`${server.hostname}/adminDetails`, {withCredentials: true})
				.then(res => {
					console.log(res);
					if(res.role === "admin") {
						setIsMasterAdmin(true);
					}
				})
				.catch(error => {
					console.log("Error:", error);
				})
			
		};
		const checkBranchName = async () => {
			const branchID = await TokenDecoder.getBranchId();
			// console.log(branchID);
			const branch = await BranchService.getSpecificBranchName(branchID);
			// console.log(branch.data[0]);
			setBranchName(branch.data[0].branch_name)
		}
		checkAdminStatus();
		// checkBranchName();
	}, []);


	const handleLogout = async () => {
		await axios.get(`${server.hostname}/logout`, { withCredentials: true})
		.then(res => {
			location.reload(true);
			localStorage.removeItem('admin')
		}).catch(err => console.log(err));
    };

	const showMenuItems = () => { // Responsible for showing menu items only master admin can see
		if (isMasterAdmin) {
			return (
				<>
					<NavLink exact to="/admins" activeClassName="activeClicked">
						<CDBSidebarMenuItem icon="user">
							Admins
						</CDBSidebarMenuItem>
					</NavLink>
					<NavLink exact to="/branches" activeClassName="activeClicked">
						<CDBSidebarMenuItem icon="store">
							Branches
						</CDBSidebarMenuItem>
					</NavLink>
				</>
			);
		}
		return (
			<>	
				{/* Return Reservations for specific branch */}
			</>
		);
	};

	return (
		<div
			style={{
				display: "flex",
				height: "100vh",
				overflow: "scroll initial",
			}}
		>
			<CDBSidebar textColor="#fff" backgroundColor="#960018">
				<CDBSidebarHeader
					prefix={<i className="fa fa-bars fa-large"></i>}
				>
					<a
						className="text-decoration-none"
						style={{ color: "inherit" }}
					>
						Mr Billy 
					</a>
				</CDBSidebarHeader>

				<CDBSidebarContent className="sidebar-content">
					<CDBSidebarMenu>
						<NavLink exact to="/dashboard" activeClassName="activeClicked">
							<CDBSidebarMenuItem icon="columns">
								Dashboard
							</CDBSidebarMenuItem>
						</NavLink>
						<NavLink
							exact
							to={isMasterAdmin ? "/viewallitems" : "/viewitems"}
							activeClassName="activeClicked"
						>
							<CDBSidebarMenuItem icon="table">
								Items
							</CDBSidebarMenuItem>
						</NavLink>
						{showMenuItems()}
						<CDBSidebarMenuItem icon="sign-out-alt" onClick={handleLogout}>
                            Logout
                        </CDBSidebarMenuItem>
						<hr/>

					</CDBSidebarMenu>
				</CDBSidebarContent>

				<CDBSidebarFooter style={{ textAlign: "center" }}>
					<div
						style={{
							padding: "20px 5px",
						}}
					>
						{!isMasterAdmin ? branchName: "Master Admin"}
					</div>
				</CDBSidebarFooter>
			</CDBSidebar>
		</div>
	);
};

export default Sidebar;