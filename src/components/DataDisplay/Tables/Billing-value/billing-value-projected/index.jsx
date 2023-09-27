import "./style.css";
import pendingIcon from "../../../../../assets/Pending-icon.png";
import useMetrics from "../../../../../hooks/useMetricsDashboard";
import { moneyFormat } from "../../../../../utils/moneyFormat";

function BillingValueProjected() {
	const { metrics } = useMetrics();

	return (
		<div className="billing-value">
			<div className="billing-value-icon">
				<img src={pendingIcon} alt="Ícone de pagamento pendente"></img>
			</div>

			<div className="billing-value-content">
				<p className="billing-value-title">Cobranças Previstas</p>
				<p className="billing-value-value">
					{moneyFormat
						.format(metrics.totalPrices.valueProjected)
						.replace(/^(\D+)/, "$1 ")}
				</p>
			</div>
		</div>
	);
}

export default BillingValueProjected;
