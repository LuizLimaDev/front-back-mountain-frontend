import { Link } from "react-router-dom";
import useMetricsDashboard from "../../../../../hooks/useMetricsDashboard";
import { moneyFormat } from "../../../../../utils/moneyFormat";
import "./style.css";

function BillingDetailedProjected() {
	const { metrics } = useMetricsDashboard();
	return (
		<div className="table-small">
			<div className="table-title">
				<h1 className="table-name">Cobranças Previstas</h1>
				<span className="quantity">
					{metrics.totalCounts.countProjected}
				</span>
			</div>

			<div className="table-infos-description">
				<p className="table-info">Cliente</p>
				<p className="table-info">Id da cob.</p>
				<p className="table-info">Valor</p>
			</div>

			{metrics.listBillings.projected.slice(0, 5).map((billing) => {
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
			})}

			<Link to="/billings" className="table-btn">
				Ver todos
			</Link>
		</div>
	);
}

export default BillingDetailedProjected;
