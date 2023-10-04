import { useContext, useState } from "react";
import BillingsIcon from "../../../assets/billings-icon.svg";
import Statics from "../../../assets/Statics.png";
import {
	Box,
	useTheme,
	OutlinedInput,
	InputAdornment,
	IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import api from "../../../services/api";
import { SingContext } from "../../../context/SingContext";
import { ChargesContext } from "../../../context/ChargesContext";
import { ModalsContext } from "../../../context/ModalsContext";
import useCharges from "../../../hooks/useCharges";

export default function BillingsSearch() {
	const [search, setSearch] = useState("");
	const theme = useTheme();
	const { value } = useContext(SingContext);
	const { setCharges } = useContext(ChargesContext);
	const { setShowErrorBilling } = useContext(ModalsContext);
	const { getCharges, setChargesParams, chargesParams } = useCharges();

	const handleInputChange = (event) => {
		setSearch(event.target.value);
		// eslint-disable-next-line no-prototype-builtins
		if(!event.target.value){
			setChargesParams((prevState) => prevState = {});
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		let localChargesParams = chargesParams;

		if(search){
			localChargesParams.search = search;
		}else{
			localChargesParams = {};
		}
		setChargesParams((prevState) => prevState = localChargesParams)
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
						<OutlinedInput
							sx={{
								padding: "0",
								borderRadius: ".625rem",
								filter: "drop-shadow(7px 7px 4px rgba(218, 1, 117, 0.07))",
								"& fieldset": { border: "none" },
							}}
							id="search-input"
							className="client-input"
							type="search"
							placeholder="Pesquisa"
							value={search}
							onChange={handleInputChange}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										sx={{ marginRight: "0.5rem" }}
										edge="end"
										onClick={handleSubmit}
									>
										<SearchIcon />
									</IconButton>
								</InputAdornment>
							}
						/>
					</form>
				</div>
			</div>
		</Box>
	);
}
