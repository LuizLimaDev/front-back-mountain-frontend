import { useTheme } from '@emotion/react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

export default function ClientBreadcrumbs(){
    const theme = useTheme();
    const breadcrumbs = [
    <Link 
        sx={{
            ...theme.breadCrumbsTypograph,
            color: "SCNormalGreen"
        }}
        underline="hover" 
        key="1" 
        color="inherit" 
        href="/clients" 
    >
        Clientes
    </Link>,
    <Link
        sx={{
            ...theme.breadCrumbsTypograph,
        }}
        underline="hover"
        key="2"
        color="inherit"       
    >
        Detalhes do cliente
    </Link>
    ];

    return (
    <Stack spacing={2} sx={{
        marginLeft: "2.75rem",
        alignSelf: "flex-end",
        position: "absolute",
        bottom: "0.25rem",
        left: "1.5rem",
        }}>
        <Breadcrumbs separator="›">
        {breadcrumbs}
        </Breadcrumbs>
    </Stack>
    );
}