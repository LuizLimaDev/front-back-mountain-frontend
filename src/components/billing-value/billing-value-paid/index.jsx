import "./style.css";
import payedIcon from "../../../assets/Payed-icon.png";
import useMetrics from "../../../hooks/useMetricsDashboard";
import { moneyFormat } from "../../../utils/moneyFormat";

function BillingValuePaid() {
	const { metrics } = useMetrics();
	return (
		<div className="billing-value-paid">
			<div className="billing-value-icon">
				<img
					src={payedIcon}
					alt="Ícone de confirmação de pagamento"
				></img>
			</div>

			<div className="billing-value-content">
				<p className="billing-value-title">Cobranças Pagas</p>
				<p className="billing-value-value">
					{moneyFormat.format(metrics.totalPrices.valuePaid)}
				</p>
			</div>
		</div>
	);
}

export default BillingValuePaid;
