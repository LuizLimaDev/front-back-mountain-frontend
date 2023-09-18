import './style.css';
import pendingIcon from '../../../assets/Pending-icon.png'
import useMetrics from '../../../hooks/useMetricsDashboard';


function BillingValueProjected() {
  const { metrics } = useMetrics();

  return (
    <div className='billing-value'>
      <div className='billing-value-icon'>
        <img src={pendingIcon} alt='Ícone de pagamento pendente'></img>
      </div>

      <div className='billing-value-content'>
        <p className='billing-value-title'>Cobranças Previstas</p>
        <p className='billing-value-value'>R$ {metrics.totalPrices.valueProjected}</p>
      </div>

    </div>
  )
}

export default BillingValueProjected;