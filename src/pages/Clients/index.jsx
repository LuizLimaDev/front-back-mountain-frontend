import ClientsTable from "../../components/DataDisplay/Tables/Clients-table";
import ClientHeader from "../../components/Inputs/clients-search";
import ClientModal from "../../components/Utils/Modals/ClientModal";
import SnackBar from "../../components/Feedback/SnackBar";
import "./style.css";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useContext } from "react";
import { ModalsContext } from "../../context/ModalsContext";
import OkSnack from "../../assets/okSnack.svg";
import ExitSnack from "../../assets/exitSnack.svg";

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
						backgroundColor={"SCLightBlue"}
						color={"SCDarkBlue"}
						SnackImage={OkSnack}
						ExitSnackImage={ExitSnack}
					/>
					<SnackBar
						phrase={"Cobrança cadastrada com sucesso"}
						openSnack={openSnackChargeAdd}
						setOpenSnack={setOpenSnackChargeAdd}
						backgroundColor={"SCLightBlue"}
						color={"SCDarkBlue"}
						SnackImage={OkSnack}
						ExitSnackImage={ExitSnack}
					/>
				</div>
			</div>
		</Box>
	);
}

export default Clients;
