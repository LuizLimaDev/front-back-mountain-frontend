import React, { useState, useEffect } from 'react';
import './style.css';
// import ChevronUpDown from '../../../assets/chevron-Up-Down.png'
// import CreateBilling from '../../../assets/create-billing.png'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function ClientsTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

// function ClientsTable() {

//     return (
//         <div className='clients-table-page'>
//             <div className='clients-table-header'>
//                 <div className='clients-table-image-header clients-table-header-content'>
//                     <img src={ChevronUpDown} alt='Setas para baixo e para cima'></img>
//                     <h3>Cliente</h3>
//                 </div>
//                 <h3 className='clients-table-header-content'>CPF</h3>
//                 <h3 className='clients-table-header-content'>E-mail</h3>
//                 <h3 className='clients-table-header-content'>Telefone</h3>
//                 <h3 className='clients-table-header-content'>Status</h3>
//                 <h3 className='clients-table-header-content'>Criar Cobrança</h3>
//             </div>
//             <div className='clients-table-content'>
//                 <div className='clients-table-content-line'>
//                     <span className='clients-table-content-line-name'>Sara da Silva</span>
//                     <span className='clients-table-content-cpf'>054 365 255 87</span>
//                     <span className='clients-table-content-line-email'>sarasilva@cubos.io</span>
//                     <span className='clients-table-content-line-phone'>71 9 9462 8654</span>
//                     <span className='clients-table-content-line-status'>inadimplente</span>
//                     <a className='clients-table-content-line-add'>
//                         <img src={CreateBilling} alt='Criar cobrança'></img>
//                     </a>
//                 </div>
//                 <div className='clients-table-content-line'>
//                     <span>Sara da Silva</span>
//                     <span>054 365 255 87</span>
//                     <span>sarasilva@cubos.io</span>
//                     <span>71 9 9462 8654</span>
//                     <span>inadimplente</span>
//                     <a>
//                         <img src={CreateBilling} alt='Criar cobrança'></img>
//                     </a>
//                 </div>
//                 <div className='clients-table-content-line'>
//                     <span>Sara da Silva</span>
//                     <span>054 365 255 87</span>
//                     <span>sarasilva@cubos.io</span>
//                     <span>71 9 9462 8654</span>
//                     <span>inadimplente</span>
//                     <a>
//                         <img src={CreateBilling} alt='Criar cobrança'></img>
//                     </a>
//                 </div>
//                 <div className='clients-table-content-line'>
//                     <span>Sara da Silva</span>
//                     <span>054 365 255 87</span>
//                     <span>sarasilva@cubos.io</span>
//                     <span>71 9 9462 8654</span>
//                     <span>inadimplente</span>
//                     <a>
//                         <img src={CreateBilling} alt='Criar cobrança'></img>
//                     </a>
//                 </div>
//                 <div className='clients-table-content-line'>
//                     <span>Sara da Silva</span>
//                     <span>054 365 255 87</span>
//                     <span>sarasilva@cubos.io</span>
//                     <span>71 9 9462 8654</span>
//                     <span>em dia</span>
//                     <a>
//                         <img src={CreateBilling} alt='Criar cobrança'></img>
//                     </a>
//                 </div>
//                 <div className='clients-table-content-line'>
//                     <span>Sara da Silva</span>
//                     <span>054 365 255 87</span>
//                     <span>sarasilva@cubos.io</span>
//                     <span>71 9 9462 8654</span>
//                     <span>em dia</span>
//                     <a>
//                         <img src={CreateBilling} alt='Criar cobrança'></img>
//                     </a>
//                 </div>
//                 <div className='clients-table-content-line'>
//                     <span>Sara da Silva</span>
//                     <span>054 365 255 87</span>
//                     <span>sarasilva@cubos.io</span>
//                     <span>71 9 9462 8654</span>
//                     <span>em dia</span>
//                     <a>
//                         <img src={CreateBilling} alt='Criar cobrança'></img>
//                     </a>
//                 </div>
//                 <div className='clients-table-content-line'>
//                     <span>Sara da Silva</span>
//                     <span>054 365 255 87</span>
//                     <span>sarasilva@cubos.io</span>
//                     <span>71 9 9462 8654</span>
//                     <span>em dia</span>
//                     <a>
//                         <img src={CreateBilling} alt='Criar cobrança'></img>
//                     </a>
//                 </div>
//                 <div className='clients-table-content-line'>
//                     <span>Sara da Silva</span>
//                     <span>054 365 255 87</span>
//                     <span>sarasilva@cubos.io</span>
//                     <span>71 9 9462 8654</span>
//                     <span>em dia</span>
//                     <a>
//                         <img src={CreateBilling} alt='Criar cobrança'></img>
//                     </a>
//                 </div>
//                 <div className='clients-table-content-line'>
//                     <span>Sara da Silva</span>
//                     <span>054 365 255 87</span>
//                     <span>sarasilva@cubos.io</span>
//                     <span>71 9 9462 8654</span>
//                     <span>em dia</span>
//                     <a>
//                         <img src={CreateBilling} alt='Criar cobrança'></img>
//                     </a>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default ClientsTable;