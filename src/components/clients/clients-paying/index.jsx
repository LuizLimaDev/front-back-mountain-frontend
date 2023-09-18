import './style.css';
import clientsPayed from '../../../assets/Clients-payed.png'
import useMetricsDashboard from '../../../hooks/useMetricsDashboard';

function ClientsPaying() {
  const { metrics } = useMetricsDashboard();
  return (
    <div className='table-big'>
      <div className='table-big-title'>
        <div className='table-big-title-left'>
          <img src={clientsPayed} alt='Ícone de clientes em dia'></img>
          <h1 className='table-big-name'>Clientes em dia</h1>
        </div>
        <span className='table-big-quantity'>{metrics.clientsCounts.onPayments}</span>
      </div>
      <div className='table-big-infos-description'>
        <p className='table-big-info'>Cliente</p>
        <p className='table-big-info'>Id do cliente.</p>
        <p className='table-big-info'>CPF</p>
      </div>

      {
        metrics.clientsList.onPayments.map((client) => {
          return (<div className='table-big-content' key={client.id}>
          <p>{client.name}</p>
          <p>{client.id}</p>
          <p>{client.cpf}</p>
        </div>)
        })
      }

      <a href='' className='table-big-btn'>Ver todos</a>

    </div>
  )
}

export default ClientsPaying;