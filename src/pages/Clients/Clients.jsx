import ClientsTable from "../../components/page-clients/clients-table";
import ClientHeader from "../../components/page-clients/clients-search";
import ClientModal from "../../components/ClientModal";
import SnackBar from "../../components/SnackBar";
import "./style.css";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useContext } from "react";
import { ModalsContext } from "../../context/ModalsContext";

function Clients() {
	const theme = useTheme();
	const {
		openSnackChargeAdd,
		setOpenSnackChargeAdd,
		openSnackClientAdd,
		setOpenSnackClientAdd,
	} = useContext(ModalsContext);

	return (
		<Box sx={{ ...theme.layoutOutletHome, marginBottom: "3rem" }}>
			<div>
				<div>
					<ClientHeader />
					<ClientsTable />
					<ClientModal />
					<SnackBar
						phrase={"Cadastro concluído com sucesso"}
						openSnack={openSnackClientAdd}
						setOpenSnack={setOpenSnackClientAdd}
					/>
					<SnackBar
						phrase={"Cobrança cadastrada com sucesso"}
						openSnack={openSnackChargeAdd}
						setOpenSnack={setOpenSnackChargeAdd}
					/>
				</div>
			</div>
		</Box>
	);
}

export default Clients;
