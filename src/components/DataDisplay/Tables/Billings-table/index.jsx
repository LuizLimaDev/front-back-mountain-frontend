/* eslint-disable react/prop-types */
import { Stack, Typography, useTheme } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import format from "date-fns/format";
import ChevronUpDown from "../../../../assets/chevron-Up-Down.png";
import DeleteIcon from "../../../../assets/delete-icon-billing.svg";
import EditIcon from "../../../../assets/edit.svg";
import { moneyFormat } from "../../../../utils/moneyFormat";

// eslint-disable-next-line react/prop-types
export default function BillingsTable({ charges, isClientDetailed }) {
	const theme = useTheme();

	return (
		<TableContainer
			sx={{
				...theme.layoutOutletContents,
				overflowY: "auto",
				maxHeight: "42rem",
				width: "71.25rem",
				borderRadius: "1.875rem"
			}}
		>
			<Table
				aria-label="simple table"
			>
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
								/>{" "}
								ID Cob.
							</div>
						</TableCell>
						<TableCell align="left" sx={theme.inputModalLabelStyle}>
							<div className="client-icon">
								<img
									style={{ cursor: "pointer" }}
									src={ChevronUpDown}
								/>{" "}
								Data de venc.
							</div>
						</TableCell>
						<TableCell align="left" sx={theme.inputModalLabelStyle}>Valor</TableCell>
						<TableCell align="left" sx={theme.inputModalLabelStyle}>Status</TableCell>
						<TableCell align="left" sx={theme.inputModalLabelStyle}>Descrição</TableCell>
						<TableCell align="left" sx={theme.inputModalLabelStyle}></TableCell>
					</TableRow>
				</TableHead>
				<TableBody sx={{ backgroundColor: "white" }} >
					{charges.map((charge) => {
						const colorStatusStyled =
							charge.status === "pendente"
								? theme.billingsYellow
								: charge.status === "vencido"
									? theme.billingsRed
									: theme.billingsCyan;
						return (
							<TableRow key={charge.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								{isClientDetailed ? null : (
									<TableCell sx={theme.infoBillingsTable}>
										{charge.name}
									</TableCell>
								)}
								<TableCell sx={theme.infoBillingsTable}>
									{charge.id}
								</TableCell>
								<TableCell
									sx={theme.infoBillingsTable}
									align="left"
								>
									{moneyFormat
										.format(charge.value)
										.replace(/^(\D+)/, "$1 ")}
								</TableCell>
								<TableCell
									sx={theme.infoBillingsTable}
									align="left"
								>
									{format(
										new Date(charge.duedate),
										"dd/MM/yyyy"
									)}
								</TableCell>
								<TableCell
									sx={theme.infoBillingsTable}
									align="left"
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
		</TableContainer>
	);
}