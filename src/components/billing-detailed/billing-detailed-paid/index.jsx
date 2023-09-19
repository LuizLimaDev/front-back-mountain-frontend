import useMetricsDashboard from "../../../hooks/useMetricsDashboard";
import { moneyFormat } from "../../../utils/moneyFormat";
import "./style.css";

function BillingDetailedPaid() {
	const { metrics } = useMetricsDashboard();
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

			{metrics.listBillings.paid.slice(0, 5).map((billing) => {
				return (
					<div className="table-content" key={billing.id}>
						<p className="data-name">{billing.name}</p>
						<p className="data-id">{billing.id}</p>
						<p className="data-value">
							{moneyFormat.format(billing.value)}
						</p>
					</div>
				);
			})}
			<a href="" className="table-btn">
				Ver todos
			</a>
		</div>
	);
}

export default BillingDetailedPaid;
