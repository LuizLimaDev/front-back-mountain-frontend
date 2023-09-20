import './style.css';
import ChevronUpDown from '../../../assets/chevron-Up-Down.png'
import CreateBilling from '../../../assets/create-billing.png'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import useCustomers from "../../../hooks/useCustomers";


function createData(name, cpf, email, phone, status) {
    if (status === "inadimplente") {
        status = red;
    }
    else { status = green }
    return { name, cpf, email, phone, status };
}

let red = <div className='red'>Inadimplente</div>;
let green = <div className='green'>Em dia</div>;

const rows = [
    createData('Sara da Silva', '039 746 383 28', 'sarasilva@gmail.com', '34 9 9876 5432', 'inadimplente'),
    createData('Antonio Moreira', '039 746 383 24', 'sarasilva@gmail.com', '34 9 9876 5432', 'inadimplente'),
    createData('Ana Nguyen', '039 746 383 28', 'sarasilva@gmail.com', '34 9 9876 5432', 'inadimplente'),
    createData('Antonio Moreira', '039 746 383 28', 'sarasilva@gmail.com', '34 9 9876 5432', 'inadimplente'),
    createData('Sara da Silva', '039 746 383 28', 'sarasilva@gmail.com', '34 9 9876 5432', 'em dia'),
    createData('Sara da Silva', '039 746 383 28', 'sarasilva@gmail.com', '34 9 9876 5432', 'em dia'),
    createData('Antonio Moreira', '039 746 383 28', 'sarasilva@gmail.com', '34 9 9876 5432', 'em dia'),
    createData('Ana Nguyen', '039 746 383 28', 'sarasilva@gmail.com', '34 9 9876 5432', 'em dia'),
    createData('Antonio Moreira', '039 746 383 28', 'sarasilva@gmail.com', '34 9 9876 5432', 'em dia'),
    createData('Sara da Silva', '039 746 383 28', 'sarasilva@gmail.com', '34 9 9876 5432', 'em dia'),
];

export default function ClientsTable() {
    const { customers } = useCustomers()
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>

                        <TableCell>
                            <div className='client-icon'><img src={ChevronUpDown} /> Cliente</div>
                        </TableCell>

                        <TableCell align="left">CPF</TableCell>
                        <TableCell align="left">E-mail</TableCell>
                        <TableCell align="left">Telefone</TableCell>
                        <TableCell align="left">Status</TableCell>
                        <TableCell align="left">Criar Cobrança</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {customers.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                                <TableCell component="th" scope="row">
                                    <Link to={`/clients/${row.id}`}>
                                            {row.name}
                                    </Link>
                                </TableCell>
                            <TableCell align="left">{row.cpf}</TableCell>
                            <TableCell align="left">{row.email}</TableCell>
                            <TableCell align="left">{row.phone}</TableCell>
                            <TableCell align="left">{row.status === "pendente" || rows.status === "vencido" ? red : green}</TableCell>
                            <TableCell align="left"><a><img src={CreateBilling}></img></a></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}