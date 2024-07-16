import React from "react";
import {
	CDBSidebar,
	CDBSidebarContent,
	CDBSidebarFooter,
	CDBSidebarHeader,
	CDBSidebarMenu,
	CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
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
						href="/"
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
							to="/ViewItems"
							activeClassName="activeClicked"
						>
							<CDBSidebarMenuItem icon="table">
								Items
							</CDBSidebarMenuItem>
						</NavLink>
						<NavLink
							exact
							to="/404" // for master admin panel to register new branches or admin accounts
							activeClassName="activeClicked"
						>
							<CDBSidebarMenuItem icon="user">
								Admins
							</CDBSidebarMenuItem>
							<hr/>
						</NavLink>
				


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