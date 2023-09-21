import BillingsTable from "../../components/page-billings/billings-table";
import BillingsSearch from "../../components/page-billings/billings-search";
import useCharges from "../../hooks/useCharges";

function Billings() {
	const { charges } = useCharges();
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				width: "92.5vw",
				paddingBottom: "15rem",
				paddingTop: "10rem",
				margin: "0 auto",
			}}
		>
			<BillingsSearch />
			<BillingsTable charges={charges} />
		</div>
	);
}

export default Billings;
