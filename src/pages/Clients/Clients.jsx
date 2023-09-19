import ClientsTable from '../../components/page-clients/clients-table';
import ClientHeader from '../../components/page-clients/clients-search';
import MenuIcon from '../../components/menu-icon';
import './style.css';

function Clients() {
    return (
        <div className='clients-dashboard'>
            <div>
                <div>
                    <ClientHeader />
                    <ClientsTable />
                </div>
            </div>
        </div>
    );
}

export default Clients;