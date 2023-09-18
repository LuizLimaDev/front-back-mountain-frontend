import useMetricsDashboard from '../../../hooks/useMetricsDashboard';
import './style.css';

function BillingDetailedProjected() {
  const { metrics } = useMetricsDashboard();
  return (
    <div className='table-small'>
      <div className='table-title'>
        <h1 className='table-name'>Cobranças Previstas</h1>
        <span className='quantity'>{metrics.totalCounts.countProjected}</span>
      </div>

      <div className='table-infos-description'>
        <p className='table-info'>Cliente</p>
        <p className='table-info'>Id da cob.</p>
        <p className='table-info'>Valor</p>
      </div>

      {
        metrics.listBillings.projected.slice(0,5).map((billing) => {
          return (<div className='table-content' key={billing.id}>
            <p>{billing.name}</p>
            <p>{billing.id}</p>
            <p>R$ {billing.value}</p>
          </div>)
        })
      }

      <a href='' className='table-btn'>Ver todos</a>

    </div>
  )
}

export default BillingDetailedProjected;