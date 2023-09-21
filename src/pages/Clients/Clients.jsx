import ClientsTable from '../../components/page-clients/clients-table';
import ClientHeader from '../../components/page-clients/clients-search';
import ClientModal from "../../components/ClientModal";
import SnackBar from '../../components/SnackBar';
import './style.css';

function Clients() {

    return (
        <div className='clients-dashboard client-padding' >
            <div>
                <div>
                    <ClientHeader />
                    <ClientsTable />
                    <ClientModal />
                    <SnackBar phrase={"Cadastro concluído com sucesso"} />
                </div>
            </div>
        </div>
    );
}

export default Clients;