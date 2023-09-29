import { useContext } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import CloseIcon from "../../../../assets/closeIcon.svg";
import { ModalsContext } from "../../../../context/ModalsContext";
import Frame from "../../../../assets/Frame.svg";
import useCharges from "../../../../hooks/useCharges";
import useCustomers from "./../../../../hooks/useCustomers";
import { format } from "date-fns";

export default function DeleteChargeModal() {
	const { chargeDelete, setChargeDelete, handleDeleteCharge, getCharges } =
		useCharges();
	const { getCustomer } = useCustomers();
	const {
		openChargeDeleteModal,
		setOpenChargeDeleteModal,
		setOpenSnackChargeDelete,
		setOpenSnackChargeCannotDelete,
	} = useContext(ModalsContext);

	function closeModal() {
		setChargeDelete({
			customerId: "",
			name: "",
			description: "",
			dueDate: "",
			value: 0,
			status: "pago",
		});
		setOpenChargeDeleteModal(false);
	}

	async function handleDelete() {
		try {
			await handleDeleteCharge();
			getCustomer(chargeDelete.customerId);
			getCharges();

			const currentDate = format(new Date(), "dd-MM-yyyy");
			const chargeDate = chargeDelete.duedate;
			const chargeDateFormatted = format(
				new Date(chargeDate),
				"dd-MM-yyyy"
			);

			if (chargeDelete.status === "pago") {
				setOpenSnackChargeCannotDelete(true);
			}

			if (chargeDateFormatted < currentDate) {
				setOpenSnackChargeCannotDelete(true);
			}

			setOpenSnackChargeDelete(true);

			closeModal();
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<Modal
			open={openChargeDeleteModal}
			onClose={() => {
				closeModal();
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
						closeModal();
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
							textTransform: "capitalize",
						}}
						type="button"
						onClick={() => {
							closeModal();
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
							textTransform: "capitalize",
						}}
						onClick={() => handleDelete()}
					>
						Sim
					</Button>
				</Box>
			</Box>
		</Modal>
	);
}
