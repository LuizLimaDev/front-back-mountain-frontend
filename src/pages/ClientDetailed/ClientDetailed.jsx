import { Stack, Box } from '@mui/material';
import icon from "../../assets/Clients-icon.png";
import iconEdit from "../../assets/icon_edit.svg";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Paper } from '@mui/material';
import { useEffect } from 'react';
import useCustomers from '../../hooks/useCustomers';
import { useParams } from "react-router-dom";

export default function ClientDetailed(){
    const { getCustomer, customer } = useCustomers();
    const { customerId }= useParams();

    useEffect(()=>{
        getCustomer(customerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <Box>            
            <Stack direction={"row"} spacing={1}>
                <img src={icon} alt="" className="icon"/>
                <h1>{customer.name}</h1>
            </Stack>

            <Stack spacing={"3.75rem"}
                component={Paper}
                p={"1.25rem"}
                sx={{
                    borderRadius: "1.8175rem" 
                }}
            >
                <Stack spacing={"0.5rem"}>

                    <Stack
                        direction="row"
                        justifyContent="space-between"
                    >
                        <h2>Dados do cliente</h2>
                        <IconButton                          
                            sx={{
                                width: "15rem",
                            height: "2rem",
                            borderRadius: ".625rem",
                            border: "1px solid #DEDEE9",
                            background: "#F8F8F9",
                            color: "SCNormalGreen",
                    
                            fontFamily: "Nunito",
                            fontSize: "1.25rem",
                            textTransform: "capitalize",
                    
                            '&:hover': {
                                opacity: ".7"
                            }
                            }}
                        >
                            <img src={iconEdit} alt="" />
                            Editar cliente
                        </IconButton>
                    </Stack>

                    <Stack spacing={"3.5rem"}>
                        <Stack direction={"row"} spacing={"4rem"}>
                            <Stack width={"11.5rem"}>
                                <h3>E-mail</h3>
                                <p>{customer.email}</p>
                            </Stack>
                            <Stack width={"11.5rem"}>
                                <h3>Telefone</h3>
                                <p>{customer.phone}</p>
                            </Stack>
                            <Stack width={"11.5rem"}>
                                <h3>CPF</h3>
                                <p>{customer.cpf}</p>
                            </Stack>
                        </Stack>
                        <Stack direction={"row"} spacing={"4rem"}>
                            <Stack width={"11.5rem"}>
                                <h3>Endereço</h3>
                                <p>{customer.street}</p>
                            </Stack>
                            <Stack width={"11.5rem"}>
                                <h3>Bairro</h3>
                                <p>{customer.neighborhood}</p>
                            </Stack>
                            <Stack width={"11.5rem"}>
                                <h3>Complemento</h3>
                                <p>{customer.complement}</p>
                            </Stack>
                            <Stack width={"8rem"}>
                                <h3>CEP</h3>
                                <p>{customer.zipcode}</p>
                            </Stack>
                            <Stack width={"3.5rem"}>
                                <h3>Cidade</h3>
                                <p>{customer.city}</p>
                            </Stack>
                            <Stack width={"0.5em"}>
                                <h3>UF</h3>
                                <p>{customer.state}</p>
                            </Stack>
                        </Stack>
                    </Stack>
                
                </Stack>     
            </Stack>
            
            <Stack mt={"3rem"} pl={"3.2rem"} justifyContent="space-between"
                component={Paper}
                p={"1.25rem"}
                sx={{
                    borderRadius: "1.8175rem" 
                }}
            >
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        <h1>Cobranças do Cliente</h1>
                        <Button
                            variant="contained"
                            sx={{
                                width: "15rem",
                            height: "2rem",
                            borderRadius: ".625rem",
                    
                            fontFamily: "Nunito",
                            fontSize: "1.25rem",
                            textTransform: "capitalize",
                    
                            backgroundColor: "SCPink",
                            
                            '&:hover': {
                                backgroundColor: "SCPink",
                                opacity: ".7"
                            }
                            }}
                        >
                            + Nova cobrança
                        </Button>
                    </Stack>
            </Stack>
    </Box>)
}