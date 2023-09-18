import './style.css';
import clientsBilling from '../../../assets/Clients-billing.png'
import useMetricsDashboard from './../../../hooks/useMetricsDashboard';

function ClientsNonpaying() {
  const { metrics } = useMetricsDashboard();
  return (
    <div className='table-big'>
      <div className='table-big-title'>
        <div className='table-big-title-left'>
          <img src={clientsBilling} alt='Ícone de clientes em dívida'></img>
          <h1 className='table-big-name'>Clientes Inadimplentes</h1>
        </div>
        <span className='table-big-quantity-nonpaying'>{metrics.clientsCounts.noPayments}</span>
      </div>
      <div className='table-big-infos-description'>
        <p className='table-big-info'>Cliente</p>
        <p className='table-big-info'>Id do cliente.</p>
        <p className='table-big-info'>CPF</p>
      </div>
      
      {
        metrics.clientsList.noPayments.slice(0,5).map((client) => {
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

export default ClientsNonpaying;