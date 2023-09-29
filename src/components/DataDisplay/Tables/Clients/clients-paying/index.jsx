import './style.css';
import clientsPayed from '../../../../../assets/Clients-payed.png'
import useMetricsDashboard from '../../../../../hooks/useMetricsDashboard';
import { Link, useNavigate } from 'react-router-dom';
import useCustomers from '../../../../../hooks/useCustomers';


function ClientsPaying() {
  const { metrics } = useMetricsDashboard();
  const { setCustomersParams } = useCustomers();
  const navigate = useNavigate();

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
        metrics.clientsList.onPayments.slice(0, 5).map((client) => {
          return (<div className='table-big-content' key={client.id}>
            <p className='data-name'>{client.name}</p>
            <p className='data-id client-id'>{client.id}</p>
            <p className='data-cpf'>{client.cpf}</p>
          </div>)
        })
      }

      <Link to="/clients"
        className="table-btn"
        onClick={(e) => {
          e.preventDefault();
          setCustomersParams({ filter: 'emDia' });
          navigate('/clients');
        }}>
        Ver todos
      </Link>

    </div>
  )
}

export default ClientsPaying;