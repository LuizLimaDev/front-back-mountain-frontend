import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import { Link } from "react-router-dom";
import ChevronUpDown from "../../../assets/chevron-Up-Down.png";
import useCharges from "../../../hooks/useCharges";
import "./style.css";

export default function BillingsTable() {
	const { charges } = useCharges();
	console.log(charges);

	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
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
					</TableRow>
				</TableHead>
				<TableBody>
					{charges.map((charge) => (
						<TableRow key={charge.id}>
							<TableCell>{charge.name}</TableCell>
							<TableCell>{charge.id}</TableCell>
							<TableCell align="left">{charge.value}</TableCell>
							<TableCell align="left">{charge.dueDate}</TableCell>
							<TableCell align="left">{charge.status}</TableCell>
							<TableCell align="left">
								{charge.description}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
