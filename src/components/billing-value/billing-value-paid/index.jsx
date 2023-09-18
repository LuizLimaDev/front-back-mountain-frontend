import './style.css';
import payedIcon from '../../../assets/Payed-icon.png'


function BillingValuePaid() {
  return (
    <div className='billing-value-paid'>
      <div className='billing-value-icon'>
        <img src={payedIcon} alt='Ícone de confirmação de pagamento'></img>
      </div>

      <div className='billing-value-content'>
        <p className='billing-value-title'>Cobranças Pagas</p>
        <p className='billing-value-value'>R$ 30.000</p>
      </div>

    </div>
  )
}

export default BillingValuePaid;