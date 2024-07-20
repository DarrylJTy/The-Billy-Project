import React, { useEffect, useState } from "react";
import {
	CDBSidebar,
	CDBSidebarContent,
	CDBSidebarFooter,
	CDBSidebarHeader,
	CDBSidebarMenu,
	CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import TokenDecoder from "../services/TokenDecoder";

const Sidebar = () => {
	const [isMasterAdmin, setIsMasterAdmin] = useState(false);

	useEffect(() => {
		const checkAdminStatus = async () => {
			const status = await TokenDecoder.isMasterAdmin();
			setIsMasterAdmin(status);
		};
		checkAdminStatus();
	}, []);

	const showMenuItems = () => { // Responsible for showing menu items only master admin can see
		if (isMasterAdmin) {
			return (
				<>
					<NavLink exact to="/404" activeClassName="activeClicked">
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
		return <></>;
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
						<NavLink exact to="/" activeClassName="activeClicked">
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
						<hr/>

					</CDBSidebarMenu>
				</CDBSidebarContent>

				<CDBSidebarFooter style={{ textAlign: "center" }}>
					<div
						style={{
							padding: "20px 5px",
						}}
					>
						Inventory
					</div>
				</CDBSidebarFooter>
			</CDBSidebar>
		</div>
	);
};

export default Sidebar;