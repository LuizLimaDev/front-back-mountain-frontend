import { useContext } from "react";
import BillingsTable from "../../components/DataDisplay/Tables/Billings-table";
import BillingsSearch from "../../components/Inputs/billings-search/index";
import useCharges from "../../hooks/useCharges";
import { Box, useTheme } from "@mui/material";
import { ModalsContext } from "../../context/ModalsContext";
import SnackBar from "../../components/Feedback/SnackBar";
import ChargeDetailModal from "../../components/Utils/Modals/ChargeDetailModal";
import NotOkaySnack from "../../assets/notOkSnack.svg";
import NotOkayExitSnack from "../../assets/notOkayExitSnack.svg";
import OkSnack from "../../assets/okSnack.svg";
import ExitSnack from "../../assets/exitSnack.svg";

function Billings() {
	const { charges } = useCharges();
	const {
		openSnackChargeEdit,
		setOpenSnackChargeEdit,
		openSnackChargeDelete,
		setOpenSnackChargeDelete,
		openSnackChargeCannotDelete,
		setOpenSnackChargeCannotDelete,
	} = useContext(ModalsContext);
	const theme = useTheme();

	return (
		<Box sx={theme.layoutOutletHome} marginBottom={"3rem"}>
			<BillingsSearch />
			<BillingsTable charges={charges} />
			<ChargeDetailModal />
			<SnackBar
				phrase={"Cobrança editada com sucesso!"}
				openSnack={openSnackChargeEdit}
				setOpenSnack={setOpenSnackChargeEdit}
				backgroundColor={"SCLightBlue"}
				color={"SCDarkBlue"}
				SnackImage={OkSnack}
				ExitSnackImage={ExitSnack}
			/>
			<SnackBar
				phrase={"Cobrança excluída com sucesso!"}
				openSnack={openSnackChargeDelete}
				setOpenSnack={setOpenSnackChargeDelete}
				backgroundColor={"SCLightBlue"}
				color={"SCDarkBlue"}
				SnackImage={OkSnack}
				ExitSnackImage={ExitSnack}
			/>
			<SnackBar
				phrase={"Esta cobrança não pode ser excluída!"}
				openSnack={openSnackChargeCannotDelete}
				setOpenSnack={setOpenSnackChargeCannotDelete}
				backgroundColor={"SCSnackLightRed"}
				color={"SCSnackDarkRed"}
				SnackImage={NotOkaySnack}
				ExitSnackImage={NotOkayExitSnack}
			/>
		</Box>
	);
}

export default Billings;
