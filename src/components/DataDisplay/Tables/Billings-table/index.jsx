/* eslint-disable react/prop-types */
import { Stack, Typography, useTheme } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { format, addHours } from "date-fns";
import ChevronUpDown from "../../../../assets/chevron-Up-Down.png";
import DeleteIcon from "../../../../assets/delete-icon-billing.svg";
import EditIcon from "../../../../assets/edit.svg";
import { moneyFormat } from "../../../../utils/moneyFormat";
import { ModalsContext } from "../../../../context/ModalsContext";
import { useContext, useState } from "react";
import ErrorSearchPage from "../../../Layouts/ErrorSearch";
import useCharges from "../../../../hooks/useCharges";

// eslint-disable-next-line react/prop-types
export default function BillingsTable({ charges, isClientDetailed }) {
	const theme = useTheme();
	const {
		setChargeEdit,
		openChargeDetails,
		setChargeDelete,
		setChargesParams,
	} = useCharges();
	const { setOpenChargeEditModal, setOpenChargeDeleteModal } =
		useContext(ModalsContext);
	const [orderName, setOrderName] = useState(false);
	const [orderID, setOrderID] = useState(false);

	function handleOrderName() {
		setOrderName(!orderName);
		setChargesParams(
			// eslint-disable-next-line no-unused-vars
			(prevState) => ({ ...prevState, orderID: "", orderName: orderName ? "desc" : "asc"})
		);
	}

	function handleOrderID() {
		setOrderID(!orderID);
		setChargesParams(
			// eslint-disable-next-line no-unused-vars
			(prevState) => ({ ...prevState, orderIdCharge: orderID ? "desc" : "asc", orderName: ""})
		);
	}
	return (
		<TableContainer
			sx={{
				...theme.layoutOutletContents,
				overflowY: "auto",
				maxHeight: "42rem",
				width: "71.25rem",
				borderRadius: "1.875rem",
			}}
		>
			<Table aria-label="simple table">
				<TableHead
					sx={{
						position: "sticky",
						top: 0,
						backgroundColor: "white",
					}}
				>
					<TableRow>
						{isClientDetailed ? null : (
							<TableCell>
								<div className="client-icon">
									<img
										style={{ cursor: "pointer" }}
										src={ChevronUpDown}
										onClick={() => handleOrderName()}
									/>{" "}
									Cliente
								</div>
							</TableCell>
						)}
						<TableCell>
							<div className="client-icon">
								<img
									style={{ cursor: "pointer" }}
									src={ChevronUpDown}
									onClick={() => handleOrderID()}
								/>{" "}
								ID Cob.
							</div>
						</TableCell>
						<TableCell align="left" sx={theme.inputModalLabelStyle}>
							Valor
						</TableCell>
						<TableCell align="left" sx={theme.inputModalLabelStyle}>
							Data de venc.
						</TableCell>
						<TableCell align="left" sx={theme.inputModalLabelStyle}>
							Status
						</TableCell>
						<TableCell align="left" sx={theme.inputModalLabelStyle}>
							Descrição
						</TableCell>
						<TableCell
							align="left"
							sx={theme.inputModalLabelStyle}
						></TableCell>
					</TableRow>
				</TableHead>
				<TableBody sx={{ backgroundColor: "white" }}>
					{charges.map((charge) => {
						const chargeDate = format(
							addHours(new Date(charge.duedate), 3),
							"dd-MM-yyyy"
						);
						const colorStatusStyled =
							charge.status === "pendente"
								? theme.billingsYellow
								: charge.status === "vencido"
								? theme.billingsRed
								: theme.billingsCyan;
						return (
							<TableRow
								key={charge.id}
								sx={{
									"&:last-child td, &:last-child th": {
										border: 0,
									},
								}}
							>
								{isClientDetailed ? null : (
									<TableCell
										sx={theme.infoBillingsTable}
										onClick={() =>
											openChargeDetails(charge)
										}
									>
										{charge.name}
									</TableCell>
								)}
								<TableCell
									sx={theme.infoBillingsTable}
									onClick={() => openChargeDetails(charge)}
								>
									{charge.id}
								</TableCell>
								<TableCell
									sx={theme.infoBillingsTable}
									align="left"
									onClick={() => openChargeDetails(charge)}
								>
									{moneyFormat
										.format(charge.value)
										.replace(/^(\D+)/, "$1 ")}
								</TableCell>
								<TableCell
									sx={theme.infoBillingsTable}
									align="left"
									onClick={() => openChargeDetails(charge)}
								>
									{chargeDate}
								</TableCell>
								<TableCell
									sx={theme.infoBillingsTable}
									align="left"
									onClick={() => openChargeDetails(charge)}
								>
									<Stack
										component="div"
										sx={{
											...theme.statusBillings,
											...colorStatusStyled,
										}}
									>
										{charge.status}
									</Stack>
								</TableCell>
								<TableCell
									sx={{
										...theme.infoBillingsTable,
									}}
									align="left"
									onClick={() => openChargeDetails(charge)}
								>
									<p
										style={{
											whiteSpace: "nowrap",
											overflow: "hidden",
											width: "17rem",
											textOverflow: "ellipsis",
										}}
									>
										{charge.description}
									</p>
								</TableCell>
								<TableCell
									sx={theme.infoBillingsTable}
									align="left"
								>
									<Stack direction={"row"} spacing={"1.5rem"}>
										<Stack
											direction={"column"}
											alignItems={"center"}
											spacing={"0.25rem"}
											sx={{
												cursor: "pointer",
											}}
											onClick={() => {
												setChargeEdit({
													name: charge.name,
													id: charge.id,
													status:
														charge.status ===
														"vencido"
															? "pendente"
															: charge.status,
													value: charge.value,
													dueDate: format(
														addHours(new Date(charge.duedate), 3),
														"yyyy'-'MM'-'dd"
													),
													description:
														charge.description,
													customerId:
														charge.customerid,
												});
												setOpenChargeEditModal(true);
											}}
										>
											<img
												src={EditIcon}
												alt="Ícone de editar"
												className="icon-small"
											/>
											<Typography
												sx={{
													color: "SCGray3",
													fontFamily: "Nunito",
													fontSize: "0.5rem",
													fontStyle: "normal",
													fontWeight: "600",
													lineHeight: "normal",
												}}
											>
												Editar
											</Typography>
										</Stack>
										<Stack
											direction={"column"}
											alignItems={"center"}
											spacing={"0.25rem"}
											sx={{
												cursor: "pointer",
											}}
											onClick={() => {
												setOpenChargeDeleteModal(true);
												setChargeDelete(charge);
											}}
										>
											<img
												src={DeleteIcon}
												alt="Ícone de excluir"
												className="icon-small"
											/>
											<Typography
												sx={{
													color: "SCDarkRed",
													fontFamily: "Nunito",
													fontSize: "0.5rem",
													fontStyle: "normal",
													fontWeight: "600",
													lineHeight: "normal",
												}}
											>
												Excluir
											</Typography>
										</Stack>
									</Stack>
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
			{charges.length == 0 && !isClientDetailed ? <ErrorSearchPage /> : null}
		</TableContainer>
	);
}
