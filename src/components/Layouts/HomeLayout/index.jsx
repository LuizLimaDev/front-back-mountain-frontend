import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";
import HeaderDashBoard from "../../Layouts/HeaderDashBoard/index";
import MenuIcon from "./menu-icon/index";
import EditChargeModal from "../../Utils/Modals/EditChargeModal/EditChargeModal";
import DeleteChargeModal from "../../Utils/Modals/DeleteChargeModal";

export default function HomeLayout() {
	return (
		<Box
			sx={{
				width: "100vw",
			}}
		>
			<Box>
				<MenuIcon />
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",

					marginRight: ".5rem",
				}}
			>
				<HeaderDashBoard />
				<Outlet />
				<EditChargeModal />
				<DeleteChargeModal />
			</Box>
		</Box>
	);
}
