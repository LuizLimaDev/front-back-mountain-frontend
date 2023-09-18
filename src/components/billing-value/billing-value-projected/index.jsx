import './style.css';
import pendingIcon from '../../../assets/Pending-icon.png'


function BillingValueProjected() {
  return (
    <div className='billing-value'>
      <div className='billing-value-icon'>
        <img src={pendingIcon} alt='Ícone de pagamento pendente'></img>
      </div>

      <div className='billing-value-content'>
        <p className='billing-value-title'>Cobranças Previstas</p>
        <p className='billing-value-value'>R$ 10.000</p>
      </div>

    </div>
  )
}

export default BillingValueProjected;