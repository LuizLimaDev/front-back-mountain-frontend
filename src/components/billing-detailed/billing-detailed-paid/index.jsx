import './style.css';

function BillingDetailedPaid() {
  return (
    <div className='table-small'>
      <div className='table-title'>
        <h1 className='table-name'>Cobranças Pagas</h1>
        <span className='quantity-paid'>10</span>
      </div>

      <div className='table-infos-description'>
        <p className='table-info'>Cliente</p>
        <p className='table-info'>Id da cob.</p>
        <p className='table-info'>Valor</p>
      </div>

      <div className='table-content'>
        <p>Sara Silva</p>
        <p>223456787</p>
        <p>R$ 1000,00</p>
      </div>

      <div className='table-content'>
        <p>Sara Silva</p>
        <p>223456787</p>
        <p>R$ 1000,00</p>
      </div>

      <div className='table-content'>
        <p>Sara Silva</p>
        <p>223456787</p>
        <p>R$ 1000,00</p>
      </div>

      <div className='table-content'>
        <p>Sara Silva</p>
        <p>223456787</p>
        <p>R$ 1000,00</p>
      </div>

      <a href='' className='table-btn'>Ver todos</a>

    </div>
  )
}

export default BillingDetailedPaid;