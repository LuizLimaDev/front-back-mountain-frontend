import './style.css';
import overdueIcon from '../../../assets/Nonpayed-icon.png'
import useMetrics from '../../../hooks/useMetricsDashboard';


function BillingValueOverdue() {
  const  { metrics } = useMetrics();
  return (
    <div className='billing-value-overdue'>
      <div className='billing-value-icon'>
        <img src={overdueIcon} alt='Ícone de pagamento vencido'></img>
      </div>

      <div className='billing-value-content'>
        <p className='billing-value-title'>Cobranças Vencidas</p>
        <p className='billing-value-value'>R$ {metrics.totalPrices.valueOverdue}</p>
      </div>

    </div>
  )
}

export default BillingValueOverdue;