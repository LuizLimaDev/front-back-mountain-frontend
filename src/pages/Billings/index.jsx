import BillingsTable from "../../components/DataDisplay/Tables/Billings-table";
import BillingsSearch from "../../components/Inputs/billings-search/index";
import useCharges from "../../hooks/useCharges";
import { Box, useTheme } from "@mui/material";

function Billings() {
	const { charges } = useCharges()
	const theme = useTheme()

	return (
		<Box sx={theme.layoutOutletHome} marginBottom={"3rem"} >
			<BillingsSearch />
			<BillingsTable charges={charges} />
		</Box>
	);
}

export default Billings;
