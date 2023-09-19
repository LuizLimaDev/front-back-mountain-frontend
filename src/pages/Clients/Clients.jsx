import ClientsTable from '../../components/page-clients/clients-table';
import ClientHeader from '../../components/page-clients/clients-search';
import HeaderClient from '../../components/page-clients/clients-header';
import MenuIcon from '../../components/menu-icon';
import './style.css';


function Clients() {
    return (
        <div className='clients-dashboard'>
            <div>
                <MenuIcon />
            </div>

            {/* <ClientsTable /> */}
            <div>
                <div>
                    <HeaderClient />
                    <ClientHeader />
                </div>

            </div>
        </div>
    );
}

export default Clients;