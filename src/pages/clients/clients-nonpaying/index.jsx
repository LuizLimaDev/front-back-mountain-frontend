import './style.css';

function ClientsNonpaying() {
  return (
    <div className='table-big'>
      <div className='table-big-title'>
        <h1 className='table-big-name'>Cobranças Vencidas</h1>
        <span className='table-big-quantity'>08</span>
      </div>

      <div className='table-big-infos-description'>
        <p className='table-big-info'>Cliente</p>
        <p className='table-big-info'>Id da cob.</p>
        <p className='table-big-info'>Valor</p>
      </div>

      <div className='table-big-content'>
        <p>Sara Silva</p>
        <p>223456787</p>
        <p>R$ 1000,00</p>
      </div>

      <div className='table-big-content'>
        <p>Sara Silva</p>
        <p>223456787</p>
        <p>R$ 1000,00</p>
      </div>

      <div className='table-big-content'>
        <p>Sara Silva</p>
        <p>223456787</p>
        <p>R$ 1000,00</p>
      </div>

      <div className='table-big-content'>
        <p>Sara Silva</p>
        <p>223456787</p>
        <p>R$ 1000,00</p>
      </div>

      <a href='' className='table-big-btn'>Ver todos</a>

    </div>
  )
}

export default ClientsNonpaying;