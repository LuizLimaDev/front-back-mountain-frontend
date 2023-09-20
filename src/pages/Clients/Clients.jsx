import ClientModal from "../../components/ClientModal";
import EditUserModal from '../../components/Modals/EditUserModal';
import ClientHeader from '../../components/page-clients/clients-search';
import ClientsTable from '../../components/page-clients/clients-table';
import './style.css';

function Clients() {
    return (
        <div className='clients-dashboard'>
            <div className='clients-fixed'>
                <MenuIcon active="clients" />
            </div>

            <div>
                <div className='clients-page'>
                    <div className='clients-fixed'>
                        <HeaderClient />
                    </div>
                    <div className='client-content'>
                        <ClientHeader />
                        <ClientsTable />
                    </div>
                </div>
            </div>
        </div>
            </div >
        </div >
    );
}

export default Clients;