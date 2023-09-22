/* eslint-disable react/prop-types */
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ChevronUpDown from "../../../assets/chevron-Up-Down.png";
import EditIcon from "../../../assets/edit.svg";
import DeleteIcon from "../../../assets/delete-icon-billing.svg";
import { Stack, Typography, useTheme } from "@mui/material";
import { moneyFormat } from "../../../utils/moneyFormat";
import format from "date-fns/format";

// eslint-disable-next-line react/prop-types
export default function BillingsTable({ charges }) {
	const theme = useTheme();

	return (
		<TableContainer
			component={Paper}
			sx={{
				...theme.layoutOutletContents,
				overflowY: "auto",
				maxHeight: "42rem",
			}}
		>
			<Table
				sx={{
					minWidth: 650,
				}}
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
						<TableCell>
							<div className="client-icon">
								<img src={ChevronUpDown} /> Cobranças
							</div>
						</TableCell>
						<TableCell>
							<div className="client-icon">
								<img src={ChevronUpDown} /> ID Cob.
							</div>
						</TableCell>
						<TableCell align="left">Valor</TableCell>
						<TableCell align="left">Data de venc.</TableCell>
						<TableCell align="left">Status</TableCell>
						<TableCell align="left">Descrição</TableCell>
						<TableCell align="left"></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{charges.map((charge) => {
						const colorStatusStyled =
							charge.status === "pendente"
								? theme.billingsYellow
								: charge.status === "vencido"
								? theme.billingsRed
								: theme.billingsCyan;
						return (
							<TableRow key={charge.id}>
								<TableCell sx={theme.infoBillingsTable}>
									{charge.name}
								</TableCell>
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
									<Stack
										component="div"
										sx={{
											whiteSpace: "nowrap",
											overflow: "hidden",
											width: "15rem",
											textOverflow: "ellipsis",
										}}
									>
										{charge.description}
									</Stack>
								</TableCell>
								<TableCell
									sx={theme.infoBillingsTable}
									align="left"
								>
									<Stack direction={"row"} spacing={"1.5rem"}>
										<Stack
											direction={"column"}
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
