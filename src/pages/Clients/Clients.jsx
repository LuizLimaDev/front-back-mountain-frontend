import ClientsTable from '../../components/page-clients/clients-table';
import ClientHeader from '../../components/page-clients/clients-search';
import MenuIcon from '../../components/menu-icon';
import ClientModal from "../../components/ClientModal"
import './style.css';
import EditUserModal from '../../components/Modals/EditUserModal';

function Clients() {
    return (
        <div className='clients-dashboard'>
            <div>
                <div>
                    <ClientHeader />
                    <ClientsTable />
                    <EditUserModal />
                    <ClientModal />
                </div>
            </div>
        </div>
    );
}

export default Clients;