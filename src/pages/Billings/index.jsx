import { useContext } from "react";
import BillingsTable from "../../components/DataDisplay/Tables/Billings-table";
import BillingsSearch from "../../components/Inputs/billings-search/index";
import useCharges from "../../hooks/useCharges";
import { Box, useTheme } from "@mui/material";
import { ModalsContext } from "../../context/ModalsContext";
import SnackBar from "../../components/Feedback/SnackBar";

function Billings() {
	const { charges } = useCharges();
	const {
		openSnackChargeEdit,
		setOpenSnackChargeEdit,
		openSnackChargeDelete,
		setOpenSnackChargeDelete,
	} = useContext(ModalsContext);
	const theme = useTheme();

	return (
		<Box sx={theme.layoutOutletHome} marginBottom={"3rem"}>
			<BillingsSearch />
			<BillingsTable charges={charges} />
			<SnackBar
				phrase={"Cobrança editada com sucesso!"}
				openSnack={openSnackChargeEdit}
				setOpenSnack={setOpenSnackChargeEdit}
			/>
			<SnackBar
				phrase={"Cobrança excluída com sucesso!"}
				openSnack={openSnackChargeDelete}
				setOpenSnack={setOpenSnackChargeDelete}
			/>
		</Box>
	);
}

export default Billings;
