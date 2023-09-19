import "./style.css";
import overdueIcon from "../../../assets/Nonpayed-icon.png";
import useMetrics from "../../../hooks/useMetricsDashboard";
import { moneyFormat } from "../../../utils/moneyFormat";

function BillingValueOverdue() {
	const { metrics } = useMetrics();

	return (
		<div className="billing-value-overdue">
			<div className="billing-value-icon">
				<img src={overdueIcon} alt="Ícone de pagamento vencido"></img>
			</div>

			<div className="billing-value-content">
				<p className="billing-value-title">Cobranças Vencidas</p>
				<p className="billing-value-value">
					{moneyFormat
						.format(metrics.totalPrices.valueOverdue)
						.replace(/^(\D+)/, "$1 ")}
				</p>
			</div>
		</div>
	);
}

export default BillingValueOverdue;
