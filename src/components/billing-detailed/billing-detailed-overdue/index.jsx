import useMetricsDashboard from '../../../hooks/useMetricsDashboard';
import './style.css';

function BillingDetailedOverdue() {
  const { metrics } = useMetricsDashboard();

  return (
    <div className='table-small'>
      <div className='table-title'>
        <h1 className='table-name'>Cobranças Vencidas</h1>
        <span className='quantity-overdue'>{metrics.totalCounts.countOverdue}</span>
      </div>
      <div className='table-infos-description'>
        <p className='table-info'>Cliente</p>
        <p className='table-info'>Id da cob.</p>
        <p className='table-info'>Valor</p>
      </div>
      {
        metrics.listBillings.overdue.slice(0,5).map((billing) => {
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

export default BillingDetailedOverdue;