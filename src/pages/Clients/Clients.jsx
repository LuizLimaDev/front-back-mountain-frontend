import ClientModal from "../../components/ClientModal";
import EditUserModal from '../../components/Modals/EditUserModal';
import ClientHeader from '../../components/page-clients/clients-search';
import ClientsTable from '../../components/page-clients/clients-table';
import './style.css';

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