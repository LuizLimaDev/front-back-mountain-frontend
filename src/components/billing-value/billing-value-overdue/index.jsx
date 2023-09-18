import './style.css';
import overdueIcon from '../../../assets/Nonpayed-icon.png'


function BillingValueOverdue() {
  return (
    <div className='billing-value'>
      <div className='billing-value-icon'>
        <img src={overdueIcon} alt='Ícone de pagamento vencido'></img>
      </div>

      <div className='billing-value-content'>
        <p className='billing-value-title'>Cobranças Vencidas</p>
        <p className='billing-value-value'>R$ 7.000</p>
      </div>

    </div>
  )
}

export default BillingValueOverdue;