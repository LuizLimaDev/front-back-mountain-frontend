import { useContext, useState } from "react";
import ClientIcon from "../../../assets/Clients-icon.png";
import Statics from "../../../assets/Statics.png";
// import SearchIcon from '../../../assets/Search-icon.png'
import "./style.css";
import { SingContext } from "../../../context/SingContext";
import { OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import api from "../../../services/api";
import useCustomers from "../../../hooks/useCustomers";
import { CustomersContext } from "../../../context/CustomersContext";
import { ModalsContext } from "../../../context/ModalsContext";

function ClientHeader() {
	const [search, setSearch] = useState("");
	const { setOpenClientModal, value } = useContext(SingContext);
	const { setCustomers } = useContext(CustomersContext);
	const { setShowErrorSearch } = useContext(ModalsContext);
	const { customersUpdate } = useCustomers();
	

	const handleInputChange = (event) => {
		setSearch(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await api.get(`/customers?search=${ search }`, {
				headers: {
					Authorization: `Bearer ${ value }`
				}
			});

			if(response.data.customers.length === 0 && search.length === 0){
				setShowErrorSearch(false);
				return customersUpdate();
			}

			if(response.data.customers.length === 0 && search.length > 0){
				setCustomers((prevState) => prevState = []);
				return setShowErrorSearch(true);
			}

			setCustomers((prevState) => {
				return prevState = [...response.data.customers];
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<div className="client-header">
				<div className="client-icon">
					<img src={ClientIcon} alt="Ícone Cliente" />
					<h1>Clientes</h1>
				</div>
				<div className="client-header-right">
					<button
						className="client-button-add"
						onClick={() => {
							setOpenClientModal(true);
						}}
					>
						+ Adicionar cliente
					</button>
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
		</div>
	);
}

export default ClientHeader;
