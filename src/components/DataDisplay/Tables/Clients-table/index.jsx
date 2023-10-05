/* eslint-disable no-unused-vars */
import { useTheme } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ChevronUpDown from "../../../../assets/chevron-Up-Down.png";
import CreateBilling from "../../../../assets/create-billing.png";
import { ModalsContext } from "../../../../context/ModalsContext";
import useCustomers from "../../../../hooks/useCustomers";
import ChargeModal from "../../../Utils/Modals/ChargeModal";
import ErrorSearchPage from "../../../Layouts/ErrorSearch";
import "./style.css";
import {
	CustomersContext,
	CustomersProvider,
} from "../../../../context/CustomersContext";

let red = (
	<div style={{ fontWeight: "600" }} className="red">
		Inadimplente
	</div>
);
let green = (
	<div style={{ fontWeight: "600" }} className="green">
		Em dia
	</div>
);

export default function ClientsTable() {
	const { customers, setCustomers } = useCustomers();
	const { setOpenChargeModal, setCustomerCharges } =
		useContext(ModalsContext);
	const [order, setOrder] = useState(false);
	const theme = useTheme();

	// function handleOrder() {
	// 	// setCustomersParams((prevState) => ({
	// 	// 	...prevState,
	// 	// 	orderName: order ? "desc" : "asc",
	// 	// }));
	// 	let clientes = customers;

	// 	clientes.sort((a, b) => {
	// 		if (!order) {
	// 			return a.name.localeCompare(b.name);
	// 		} else {
	// 			return b.name.localeCompare(a.name);
	// 		}
	// 	});

	// 	setOrder(!order);
	// 	setCustomers(clientes);
	// 	console.log(clientes);
	// }

	useEffect(() => {
		let clientes = customers;

		clientes.sort((a, b) => {
			if (order) {
				return a.name.localeCompare(b.name);
			} else {
				return b.name.localeCompare(a.name);
			}
		});

		setCustomers(clientes);
		console.log(clientes);
	}, [order]);

	return (
		<TableContainer
			sx={{
				...theme.layoutOutletContents,
				...theme.infoBillingsTable,
				overflowY: "auto",
				maxHeight: "42rem",
				borderRadius: "1.875rem",
			}}
		>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead
					sx={{
						position: "sticky",
						top: 0,
						backgroundColor: "white",
					}}
				>
					<TableRow>
						<TableCell sx={theme.inputModalLabelStyle}>
							<div className="client-icon">
								<img
									style={{ cursor: "pointer" }}
									src={ChevronUpDown}
									onClick={() => setOrder(!order)}
								/>{" "}
								Cliente
							</div>
						</TableCell>
						<TableCell align="left" sx={theme.inputModalLabelStyle}>
							CPF
						</TableCell>
						<TableCell align="left" sx={theme.inputModalLabelStyle}>
							E-mail
						</TableCell>
						<TableCell align="left" sx={theme.inputModalLabelStyle}>
							Telefone
						</TableCell>
						<TableCell align="left" sx={theme.inputModalLabelStyle}>
							Status
						</TableCell>
						<TableCell align="left" sx={theme.inputModalLabelStyle}>
							Criar Cobrança
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{customers.map((row) => (
						<TableRow
							key={row.id}
							sx={{
								"&:last-child td, &:last-child th": {
									border: 0,
								},
								...theme.clientValueStyle,
								backgroundColor: "SCBackgroundWhite",
							}}
						>
							<TableCell
								sx={theme.clientValueStyle}
								component="th"
								scope="row"
							>
								<Link
									className="link"
									to={`/clients/${row.id}`}
								>
									{row.name}
								</Link>
							</TableCell>
							<TableCell sx={theme.clientValueStyle} align="left">
								{row.cpf}
							</TableCell>
							<TableCell sx={theme.clientValueStyle} align="left">
								{row.email}
							</TableCell>
							<TableCell sx={theme.clientValueStyle} align="left">
								{row.phone}
							</TableCell>
							<TableCell sx={theme.clientValueStyle} align="left">
								{row.status === "pendente" ||
								row.status === "vencido"
									? red
									: green}
							</TableCell>
							<TableCell sx={theme.clientValueStyle} align="left">
								<img
									style={{ cursor: "pointer" }}
									src={CreateBilling}
									onClick={() => {
										setCustomerCharges((prevState) => {
											return {
												...prevState,
												customerId: row.id,
												name: row.name,
											};
										});
										setOpenChargeModal(true);
									}}
								></img>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			{customers.length === 0 ? <ErrorSearchPage /> : null}
			<ChargeModal />
		</TableContainer>
	);
}
