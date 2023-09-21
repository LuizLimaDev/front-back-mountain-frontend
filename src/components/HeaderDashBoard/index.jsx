import LogoutIcon from "@mui/icons-material/Logout";
import { Box } from "@mui/material";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import editImg from "../../assets/edit.svg";
import { ModalsContext } from "../../context/ModalsContext";
import { SingContext } from "../../context/SingContext";
import api from "../../services/api";
import Avatar from "./Avatar";
import EditUserModal from "../../components/Modals/EditUserModal";

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

	const title =
		active === "home"
			? "Resumo das cobranças"
			: active === "clients"
			? "Clientes"
			: active === "billings"
			? "Cobranças"
			: "";

	const styleTitle =
		active === "clients" || active === "billings" ? "state-client" : "";

	return (
		<div className="dashboard-header">
			<div>
				<h1 className={styleTitle}>{title}</h1>
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
							<img
								src={editImg}
								alt="editar"
								style={{
									width: "1.25rem",
									paddingBottom: ".3rem",
								}}
							/>
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
							<LogoutIcon />
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
