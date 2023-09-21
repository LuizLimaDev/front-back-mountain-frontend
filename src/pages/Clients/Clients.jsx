import ClientsTable from '../../components/page-clients/clients-table';
import ClientHeader from '../../components/page-clients/clients-search';
import ClientModal from "../../components/ClientModal";
import SnackBar from '../../components/SnackBar';
import './style.css';
import { Box } from '@mui/material';
import { useTheme } from '@emotion/react';

function Clients() {
    const theme = useTheme()

    return (
        <Box
            sx={theme.layoutOutletHome}
        >
            <div>
                <div>
                    <ClientHeader />
                    <ClientsTable />
                    <ClientModal />
                    <SnackBar phrase={"Cadastro concluído com sucesso"} />
                </div>
            </div>
        </Box>
    );
}

export default Clients;