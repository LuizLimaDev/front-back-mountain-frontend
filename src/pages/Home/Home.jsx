import BillingDetailedOverdue from '../../components/billing-detailed/billing-detailed-overdue';
import BillingDetailedPaid from '../../components/billing-detailed/billing-detailed-paid';
import BillingDetailedProjected from '../../components/billing-detailed/billing-detailed-projected';
import BillingValueOverdue from '../../components/billing-value/billing-value-overdue';
import BillingValuePaid from '../../components/billing-value/billing-value-paid';
import BillingValueProjected from '../../components/billing-value/billing-value-projected';
import ClientsNonpaying from '../../components/clients/clients-nonpaying';
import ClientsPaying from '../../components/clients/clients-paying';
import HeaderDashBoard from '../../components/header';
import MenuIcon from '../../components/menu-icon';
import { MetricsDasboardProvider } from '../../context/MetricsDashboard';
import './styles.css';

function Home() {
  return (
    <MetricsDasboardProvider>
      <div className='dashboard'>
        <div>
          <MenuIcon />
        </div>
        <div className='content'>
          <div>
            <HeaderDashBoard />
          </div>
          <div className='billing-value-dashboard tables-dashboard dashboard'>
            <BillingValueOverdue />
            <BillingValuePaid />
            <BillingValueProjected />
          </div>
          <div className='billing-detailed-dashboard tables-dashboard dashboard'><BillingDetailedOverdue />
            <BillingDetailedPaid />
            <BillingDetailedProjected />
          </div>
          <div className='clients-dashboard tables-dashboard dashboard'><ClientsNonpaying />
            <ClientsPaying />
          </div>
        </div>
      </div >
    </MetricsDasboardProvider>
  );
}

export default Home;