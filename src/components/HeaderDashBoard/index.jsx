import LogoutIcon from "@mui/icons-material/Logout";
import EditIcon from "@mui/icons-material/Edit";
import { Box } from "@mui/material";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import editImg from "../../assets/edit.svg";
import { ModalsContext } from "../../context/ModalsContext";
import { SingContext } from "../../context/SingContext";
import api from "../../services/api";
import Avatar from "./Avatar";
import EditUserModal from "../../components/Modals/EditUserModal";
import "./style.css";
import ClientBreadcrumbs from "./ClientBreadcrumbs/ClientBreadcrumbs";

function HeaderDashBoard() {
	const { value, remove } = useContext(SingContext);
	const { handleOpenEditUser, editFinished } = useContext(ModalsContext);
	const { active } = useContext(SingContext);
	const [anchorEl, setAnchorEl] = useState(null);
	const [username, setUsername] = useState("");
	const navigate = useNavigate();

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;

	function handleLogout() {
		navigate("/");
		remove("token");
	}

	async function userGetData() {
		try {
			const { data } = await api.get("/users/profile", {
				headers: {
					Authorization: `Bearer ${value}`,
				},
			});

			setUsername(data.name);
		} catch (error) {
			console.log(error.response.data);
		}
	}

	useEffect(() => {
		userGetData();

		if (editFinished) {
			userGetData();
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [editFinished]);

	const initialsName = [...username];
	return (
		<div className="dashboard-header">
			<div>
				{active === "clientDetail" ? (
					<ClientBreadcrumbs />
				) : (
					<h1
						className={
							(active === "clients" || active === "billings") &&
							"state-client"
						}
						style={{ marginLeft: "2.75rem" }}
					>
						{active === "home"
							? "Resumo das cobranças"
							: active === "clients"
							? "Clientes"
							: "Cobranças"}
					</h1>
				)}
			</div>
			<div className="dashboard-user">
				{username ? (
					<Avatar
						setAnchorEl={setAnchorEl}
						initialsName={initialsName}
						username={username}
					/>
				) : (
					""
				)}

				<Popover
					id={id}
					open={open}
					anchorEl={anchorEl}
					onClose={handleClose}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "left",
					}}
				>
					<Box
						sx={{
							display: "flex",
						}}
					>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								gap: ".25rem",

								padding: ".625rem .937rem",

								cursor: "pointer",
							}}
							onClick={() => handleOpenEditUser()}
						>
							<EditIcon sx={{ color: "SCGray3" }} />
							<Typography
								sx={{
									fontFamily: "Nunito",
									fontWeight: 500,
									fontSize: ".85rem",
									color: "SCGray3",
								}}
							>
								Editar
							</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								gap: ".25rem",

								padding: ".625rem .937rem",

								cursor: "pointer",
							}}
							onClick={handleLogout}
						>
							<LogoutIcon sx={{ color: "SCGray3" }} />
							<Typography
								sx={{
									fontFamily: "Nunito",
									fontWeight: 500,
									fontSize: ".85rem",
									color: "SCGray3",
								}}
							>
								Sair
							</Typography>
						</Box>
					</Box>
				</Popover>
				<EditUserModal />
			</div>
		</div>
	);
}

export default HeaderDashBoard;
