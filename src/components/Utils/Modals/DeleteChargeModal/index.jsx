import { useContext } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import CloseIcon from "../../../../assets/closeIcon.svg";
import { ModalsContext } from "../../../../context/ModalsContext";
import api from "../../../../services/api";
import { SingContext } from "../../../../context/SingContext";
import useCustomers from "../../../../hooks/useCustomers";
import Frame from "../../../../assets/frame.svg";

export default function DeleteChargeModal() {
	const {
		openDeleteChargeModal,
		setOpenDeleteChargeModal,
		chargeToDelete,
		setChargeToDelete,
	} = useContext(ModalsContext);
	const { value } = useContext(SingContext);
	const { getCustomer } = useCustomers();

	async function handleDeleteCharge(event) {
		event.preventDefault();
		try {
			await api.delete(`/charges/${chargeToDelete.id}`, {
				headers: {
					Authorization: `Bearer ${value}`,
				},
			});

			setOpenDeleteChargeModal(false);
			getCustomer(chargeToDelete.customerId);
			setChargeToDelete(null);
		} catch (error) {
			console.log(error.response.data.message);
		}
	}

	return (
		<Modal
			open={openDeleteChargeModal}
			onClose={() => {
				setOpenDeleteChargeModal(false);
				setChargeToDelete(null);
			}}
		>
			<Box
				sx={{
					width: "37.5rem",
					minHeight: "25rem",
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					backgroundColor: "#FFF",
					border: "none",
					borderRadius: "1.875rem",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<img
					src={CloseIcon}
					alt="Ícone de fechar"
					style={{
						alignSelf: "flex-end",
						margin: "1.8rem 1.5rem 0 0",
						cursor: "pointer",
					}}
					onClick={() => {
						setOpenDeleteChargeModal(false);
						setChargeToDelete(null);
					}}
				/>
				<img
					src={Frame}
					alt="Ícone de atenção"
					style={{
						alignSelf: "center",
						width: "10rem",
						height: "10rem",
					}}
				/>

				<Typography
					sx={{
						color: " #CC7800",
						textAlign: "center",
						fontFamily: "Montserrat",
						fontSize: "1.125rem",
						fontStyle: "normal",
						fontWeight: "600",
					}}
				>
					Tem certeza que deseja excluir esta cobrança?
				</Typography>

				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						gap: "1.5rem",
						mt: "2rem",
					}}
				>
					<Button
						sx={{
							width: "6.25rem",
							height: "1.5rem",
							color: "#AE1100",
							fontFamily: "Nunito",
							fontSize: "1.125rem",
							fontWeight: "400",
							backgroundColor: "#F2D6D0",
							borderRadius: "0.25rem",
						}}
						onClick={() => {
							setOpenDeleteChargeModal(false);
							setChargeToDelete(null);
						}}
					>
						Não
					</Button>

					<Button
						sx={{
							width: "6.25rem",
							height: "1.5rem",
							color: "#034A2A",
							fontFamily: "Nunito",
							fontSize: "1.125rem",
							fontWeight: "400",
							backgroundColor: "#ACD9C5",
							borderRadius: "0.25rem",
						}}
						onClick={handleDeleteCharge}
					>
						Sim
					</Button>
				</Box>
			</Box>
		</Modal>
	);
}
