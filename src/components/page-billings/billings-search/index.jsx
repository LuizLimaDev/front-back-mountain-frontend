import { useState } from "react";
import BillingsIcon from "../../../assets/billings-icon.svg";
import Statics from "../../../assets/Statics.png";
import { Box, useTheme } from "@mui/material";

export default function BillingsSearch() {
	const [search, setSearch] = useState("");
	const theme = useTheme()

	const handleInputChange = (event) => {
		setSearch(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<Box sx={theme.layoutOutletContents}>
			<div className="client-header">
				<div className="client-icon">
					<img src={BillingsIcon} alt="Ícone Cobranças" />
					<h1>Cobranças</h1>
				</div>
				<div className="client-header-right">
					<button className="client-button-statics">
						<img src={Statics} alt="Ícone Estatísticas" />
					</button>
					<form onSubmit={handleSubmit}>
						<input
							className="client-input"
							type="text"
							placeholder="Pesquisa"
							value={search}
							onChange={handleInputChange}
						/>
					</form>
				</div>
			</div>
		</Box>
	);
}
