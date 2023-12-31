import { Box, Stack, Typography, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import icon from "../../assets/Clients-icon.png";
import iconEdit from "../../assets/icon_edit.svg";
import useCustomers from "../../hooks/useCustomers";
import EditClientModal from "../../components/Utils/Modals/EditClient";
import { SingContext } from "../../context/SingContext";
import SnackBar from "../../components/Feedback/SnackBar";
import BillingsTable from "../../components/DataDisplay/Tables/Billings-table/index";
import { ModalsContext } from "../../context/ModalsContext";
import ChargeModal from "../../components/Utils/Modals/ChargeModal";
import ChargeDetailModal from "../../components/Utils/Modals/ChargeDetailModal";
import NotOkaySnack from "../../assets/notOkSnack.svg";
import NotOkayExitSnack from "../../assets/notOkayExitSnack.svg";
import OkSnack from "../../assets/okSnack.svg";
import ExitSnack from "../../assets/exitSnack.svg";

export default function ClientDetailed() {
	const { getCustomer, customer, chargesByCustomer } = useCustomers();
	const { customerId } = useParams();
	const theme = useTheme();
	const { setEditClientModal } = useContext(SingContext);
	const {
		openSnackClientEdit,
		setOpenSnackClientEdit,
		setOpenChargeModal,
		setCustomerCharges,
		openSnackChargeAdd,
		setOpenSnackChargeAdd,
		openSnackChargeEdit,
		setOpenSnackChargeEdit,
		openSnackChargeDelete,
		setOpenSnackChargeDelete,
		openSnackChargeCannotDelete,
		setOpenSnackChargeCannotDelete,
	} = useContext(ModalsContext);

	useEffect(() => {
		getCustomer(customerId);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<Box sx={theme.layoutOutletHome} marginBottom={"3rem"}>
			<Stack
				direction={"row"}
				spacing={1}
				sx={{
					alignItems: "center",
					width: "80vw",
					padding: ".5rem 0 1.5rem",
				}}
			>
				<img
					src={icon}
					alt=""
					className="icon"
					style={{ width: "2rem", height: "2rem" }}
				/>
				<Typography
					sx={{
						fontFamily: "Montserrat",
						fontSize: "1.62rem",
						fontWeight: "600",
					}}
				>
					{customer.name}
				</Typography>
			</Stack>

			<Stack
				spacing={"3.75rem"}
				p={"1.5rem 1.25rem"}
				sx={{
					width: "80vw",
					borderRadius: "1.8175rem",
					backgroundColor: "SCBackgroundWhite",
				}}
			>
				<Stack spacing={"0.5rem"}>
					<Stack direction="row" justifyContent="space-between">
						<Typography
							sx={{
								marginBottom: "1.5rem",

								fontFamily: "Montserrat",
								fontSize: "1.25rem",
								fontWeight: "600",
							}}
						>
							Dados do cliente
						</Typography>
						<IconButton
							sx={{
								width: "15rem",
								height: "2rem",
								borderRadius: ".625rem",
								border: "1px solid #DEDEE9",
								background: "#F8F8F9",
								color: "SCNormalGreen",

								fontFamily: "Nunito",
								fontSize: "1.25rem",
								textTransform: "capitalize",

								"&:hover": {
									opacity: ".7",
								},
							}}
							onClick={() => {
								setEditClientModal(true);
							}}
						>
							<img src={iconEdit} alt="" />
							Editar cliente
						</IconButton>
					</Stack>

					<Stack spacing={"3.5rem"}>
						<Stack direction={"row"} spacing={"4rem"}>
							<Stack width={"11.5rem"}>
								<Typography sx={theme.clientLabelStyle}>
									E-mail
								</Typography>
								<Typography sx={theme.clientValueStyle}>
									{customer.email}
								</Typography>
							</Stack>
							<Stack width={"11.5rem"}>
								<Typography sx={theme.clientLabelStyle}>
									Telefone
								</Typography>
								<Typography sx={theme.clientValueStyle}>
									{customer.phone}
								</Typography>
							</Stack>
							<Stack width={"11.5rem"}>
								<Typography sx={theme.clientLabelStyle}>
									CPF
								</Typography>
								<Typography sx={theme.clientValueStyle}>
									{customer.cpf}
								</Typography>
							</Stack>
						</Stack>
						<Stack direction={"row"} spacing={"4rem"}>
							<Stack width={"11.5rem"}>
								<Typography sx={theme.clientLabelStyle}>
									Endereço
								</Typography>
								<Typography sx={theme.clientValueStyle}>
									{customer.street}
								</Typography>
							</Stack>
							<Stack width={"11.5rem"}>
								<Typography sx={theme.clientLabelStyle}>
									Bairro
								</Typography>
								<Typography sx={theme.clientValueStyle}>
									{customer.neighborhood}
								</Typography>
							</Stack>
							<Stack width={"11.5rem"}>
								<Typography sx={theme.clientLabelStyle}>
									Complemento
								</Typography>
								<Typography sx={theme.clientValueStyle}>
									{customer.complement}
								</Typography>
							</Stack>
							<Stack width={"8rem"}>
								<Typography sx={theme.clientLabelStyle}>
									CEP
								</Typography>
								<Typography sx={theme.clientValueStyle}>
									{customer.zipcode}
								</Typography>
							</Stack>
							<Stack width={"3.5rem"}>
								<Typography sx={theme.clientLabelStyle}>
									Cidade
								</Typography>
								<Typography sx={theme.clientValueStyle}>
									{customer.city}
								</Typography>
							</Stack>
							<Stack width={"0.5em"}>
								<Typography sx={theme.clientLabelStyle}>
									UF
								</Typography>
								<Typography sx={theme.clientValueStyle}>
									{customer.state}
								</Typography>
							</Stack>
						</Stack>
					</Stack>
				</Stack>
			</Stack>

			<Stack
				mt={"3rem"}
				pl={"3.2rem"}
				justifyContent={"center"}
				alignItems={"center"}
				p={"1.25rem"}
				sx={{
					width: "80vw",
					borderRadius: "1.8175rem",
					backgroundColor: "SCBackgroundWhite",
				}}
			>
				<Stack
					direction={"row"}
					justifyContent={"space-between"}
					sx={{
						width: "100%",
						padding: "1.5rem 1rem",
					}}
				>
					<Typography
						sx={{
							fontFamily: "Montserrat",
							fontSize: "1.25rem",
							fontWeight: "600",
						}}
					>
						Cobranças do Cliente
					</Typography>
					<Button
						variant="contained"
						sx={{
							width: "15rem",
							height: "2rem",
							borderRadius: ".625rem",

							fontFamily: "Nunito",
							fontSize: "1.125rem",
							fontWeight: "400",
							textTransform: "capitalize",

							backgroundColor: "SCPink",

							"&:hover": {
								backgroundColor: "SCPink",
								opacity: ".7",
							},
						}}
						onClick={() => {
							setCustomerCharges((prevState) => {
								return {
									...prevState,
									customerId: customer.id,
									name: customer.name,
								};
							});
							setOpenChargeModal(true);
						}}
					>
						+ Nova cobrança
					</Button>
				</Stack>
				<BillingsTable
					charges={chargesByCustomer}
					isClientDetailed={true}
				/>
			</Stack>
			<EditClientModal id={customerId} />
			<ChargeModal />
			<ChargeDetailModal />
			<SnackBar
				openSnack={openSnackClientEdit}
				setOpenSnack={setOpenSnackClientEdit}
				phrase={"Edições do cadastro concluídas com sucesso"}
				backgroundColor={"SCLightBlue"}
				color={"SCDarkBlue"}
				SnackImage={OkSnack}
				ExitSnackImage={ExitSnack}
			/>
			<SnackBar
				phrase={"Cobrança cadastrada com sucesso"}
				openSnack={openSnackChargeAdd}
				setOpenSnack={setOpenSnackChargeAdd}
				backgroundColor={"SCLightBlue"}
				color={"SCDarkBlue"}
				SnackImage={OkSnack}
				ExitSnackImage={ExitSnack}
			/>
			<SnackBar
				phrase={"Cobrança editada com sucesso!"}
				openSnack={openSnackChargeEdit}
				setOpenSnack={setOpenSnackChargeEdit}
				backgroundColor={"SCLightBlue"}
				color={"SCDarkBlue"}
				SnackImage={OkSnack}
				ExitSnackImage={ExitSnack}
			/>
			<SnackBar
				phrase={"Cobrança excluída com sucesso!"}
				openSnack={openSnackChargeDelete}
				setOpenSnack={setOpenSnackChargeDelete}
				backgroundColor={"SCLightBlue"}
				color={"SCDarkBlue"}
				SnackImage={OkSnack}
				ExitSnackImage={ExitSnack}
			/>
			<SnackBar
				phrase={"Esta cobrança não pode ser excluída!"}
				openSnack={openSnackChargeCannotDelete}
				setOpenSnack={setOpenSnackChargeCannotDelete}
				backgroundColor={"SCSnackLightRed"}
				color={"SCSnackDarkRed"}
				SnackImage={NotOkaySnack}
				ExitSnackImage={NotOkayExitSnack}
			/>
		</Box>
	);
}
