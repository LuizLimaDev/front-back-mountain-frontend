import { useTheme } from "@emotion/react";
import { Box, Modal, Paper, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import closeModal from "../../../../assets/close.svg";
import paperIcon from "../../../../assets/paper-chargedetails.svg";
import { ChargesContext } from "../../../../context/ChargesContext";
import { ModalsContext } from "../../../../context/ModalsContext";
import { moneyFormat } from "../../../../utils/moneyFormat";

function ChargeDetailModal() {
	const { openChargeDetailsModal, setOpenChargeDetailsModal } =
		useContext(ModalsContext);
	const { chargeDetailSelected } = useContext(ChargesContext);
	const theme = useTheme();

	function statusColor() {
		if (chargeDetailSelected.status === "pago") {
			return { ...theme.billingsCyan, ...theme.statusBillings };
		}

		if (chargeDetailSelected.status === "vencido") {
			return { ...theme.billingsRed, ...theme.statusBillings };
		}

		if (chargeDetailSelected.status === "pendente") {
			return { ...theme.billingsYellow, ...theme.statusBillings };
		}
	}

	return (
		<Stack>
			<Modal
				open={openChargeDetailsModal}
				onClose={() => setOpenChargeDetailsModal(false)}
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",

					width: "100%",
					height: "100%",
				}}
			>
				<Paper
					sx={{
						position: "relative",
						width: "31.68rem",
						padding: "2.5rem 3.5rem",
						borderRadius: "1.87rem",
					}}
				>
					<img
						src={closeModal}
						alt="fechar modal"
						style={{
							position: "absolute",
							top: "1.5rem",
							right: "1.5rem",

							width: "2rem",

							cursor: "pointer",
						}}
						onClick={() => setOpenChargeDetailsModal(false)}
					/>

					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",

							marginBottom: "1rem",
						}}
					>
						<img src={paperIcon} alt="imagem de cobrança" />
						<Typography sx={theme.SCmodalTile}>
							Detalhe da Cobrança
						</Typography>
					</Box>

					<Box>
						<Box mb={"1.5rem"}>
							<Typography sx={theme.inputModalLabelStyle}>
								Nome
							</Typography>
							<Typography
								sx={{
									fontFamily: "Nunito",
									fontSize: "1rem",
									fontWeight: "400",
								}}
							>
								{chargeDetailSelected.name}
							</Typography>
						</Box>

						<Box mb={"1.5rem"}>
							<Typography sx={theme.inputModalLabelStyle}>
								Descrição
							</Typography>
							<Typography
								sx={{
									fontFamily: "Nunito",
									fontSize: "1rem",
									fontWeight: "400",
								}}
							>
								{chargeDetailSelected.description}
							</Typography>
						</Box>

						<Box mb={"1.5rem"} sx={{ display: "flex" }}>
							<Box sx={{ width: "15rem" }}>
								<Typography sx={theme.inputModalLabelStyle}>
									Vencimento
								</Typography>
								<Typography
									sx={{
										fontFamily: "Nunito",
										fontSize: "1.25rem",
										fontWeight: "400",
									}}
								>
									{chargeDetailSelected.dueDate}
								</Typography>
							</Box>

							<Box>
								<Typography sx={theme.inputModalLabelStyle}>
									Valor
								</Typography>
								<Typography
									sx={{
										fontFamily: "Nunito",
										fontSize: "1.25rem",
										fontWeight: "400",
									}}
								>
									{moneyFormat
										.format(chargeDetailSelected.value)
										.replace(/^(\D+)/, "$1 ")}
								</Typography>
							</Box>
						</Box>

						<Box sx={{ display: "flex" }}>
							<Box sx={{ width: "15rem" }}>
								<Typography sx={theme.inputModalLabelStyle}>
									ID cobranças
								</Typography>
								<Typography
									sx={{
										fontFamily: "Nunito",
										fontSize: "1rem",
										fontWeight: "400",
									}}
								>
									{chargeDetailSelected.id}
								</Typography>
							</Box>

							<Box>
								<Typography sx={theme.inputModalLabelStyle}>
									Status
								</Typography>
								<Typography sx={statusColor}>
									{chargeDetailSelected.status}
								</Typography>
							</Box>
						</Box>
					</Box>
				</Paper>
			</Modal>
		</Stack>
	);
}

export default ChargeDetailModal;
