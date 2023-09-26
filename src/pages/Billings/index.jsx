import BillingsTable from "../../components/page-billings/billings-table";
import BillingsSearch from "../../components/page-billings/billings-search";
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
