import BillingsTable from "../../components/page-billings/billings-table";
import BillingsSearch from "../../components/page-billings/billings-search";

function Billings() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				width: "80vw",
				height: "100vh",
				paddingBottom: "15rem",
				marginLeft: "5rem",
			}}
		>
			<BillingsSearch />
			<BillingsTable />
		</div>
	);
}

export default Billings;
