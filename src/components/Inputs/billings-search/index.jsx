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
	const { getCharges } = useCharges();

	const handleInputChange = (event) => {
		setSearch(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await api.get(`/charges?search=${ search }`, {
				headers: {
					Authorization: `Bearer ${ value }`
				}
			});

			if(search.length === 0 && response.data.charges.length === 0){
				setShowErrorBilling(false);
				return getCharges();
			}

			if(search.length > 0 && response.data.charges.length === 0){
				setCharges((prevState) => prevState = []);
				return setShowErrorBilling(true);
			}

			setShowErrorBilling(false);
			setCharges((prevState) => prevState = [...response.data.charges]);
		} catch (error) {
			console.log(error);
		}
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
