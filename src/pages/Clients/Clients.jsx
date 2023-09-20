import ClientsTable from '../../components/page-clients/clients-table';
import ClientHeader from '../../components/page-clients/clients-search';
import ClientModal from "../../components/ClientModal";
import ClientsTable from '../../components/page-clients/clients-table';
import './style.css';
import EditUserModal from '../../components/Modals/EditUserModal';
import SnackBar from '../../components/SnackBar';
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
                    <SnackBar />
                </div>
            </div>
        </div>
    );
}

export default Clients;