import { Link, useNavigate } from "react-router-dom";
import useCharges from "../../../../../hooks/useCharges";
import useMetricsDashboard from "../../../../../hooks/useMetricsDashboard";
import { moneyFormat } from "../../../../../utils/moneyFormat";
import "./style.css";
import SkeletonChargesTable from '../../../../Feedback/Skeleton/SkeletonChargesTable/index';

function BillingDetailedPaid() {

	const { metrics } = useMetricsDashboard();
	const { getCharges, setChargesParams } = useCharges();
	const navigate = useNavigate();

	return (
		<div className="table-small">
			<div className="table-title">
				<h1 className="table-name">Cobranças Pagas</h1>
				<span className="quantity-paid">
					{metrics.totalCounts.countPaid}
				</span>
			</div>

			<div className="table-infos-description">
				<p className="table-info">Cliente</p>
				<p className="table-info">Id da cob.</p>
				<p className="table-info">Valor</p>
			</div>
			{
				metrics.listBillings.paid.length > 0 ? (
					metrics.listBillings.paid.slice(0, 5).map((billing) => {
						return (
							<div className="table-content" key={billing.id}>
								<p className="data-name">{billing.name}</p>
								<p className="data-id">{billing.id}</p>
								<p className="data-value">
									{moneyFormat
										.format(billing.value)
										.replace(/^(\D+)/, "$1 ")}
								</p>
							</div>
						);
					})
				) : (
					<SkeletonChargesTable />
				)
			}

			<Link
				to="/billings"
				className="table-btn"
				onClick={async (e) => {
					e.preventDefault();
					await setChargesParams({ filter: '["pago"]' });
					await getCharges();
					navigate('/billings');
				}}
			>
				Ver todos
			</Link>
		</div >
	);
}

export default BillingDetailedPaid;
