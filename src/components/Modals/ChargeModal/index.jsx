import {
    Box,
    Modal,
    InputLabel,
    Typography,
    TextField,
    Checkbox,
    Button,
    Radio,
    RadioGroup
} from "@mui/material";
import CloseIcon from "../../../assets/closeIcon.svg";
import ChargeIcon from "../../../assets/chargeIcon.svg";
import EmptyCheckbox from "../../../assets/emptyCheckbox.svg";
import CheckedIcon from "../../../assets/CheckedIcon.svg";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import api from "../../../services/api";
import useCustomers from "../../../hooks/useCustomers";
import { SingContext } from "../../../context/SingContext";

export default function ChargeModal(){
    const [openChargeModal, setOpenChargeModal] = useState(true);
    const { value } = useContext(SingContext);
    const { customer } = useCustomers();
    const [customerCharges, setCustomerCharges] = useState({
        customerId: customer.id,
        name: customer.name,
        description: "",
        dueDate: "",
        value: "",
        status: "pago"
    })

    async function handleSubmit(event){
        event.preventDefault();
        try {
            await api.post("/charges", {...customerCharges}, {
                headers:{
                    Authorization: `Bearer ${value}`
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    function handleChange(event){
        setCustomerCharges((prevState) => {
            return { ...prevState, [event.target.name]: event.target.value }
        });
    }

    return(
        <Modal
            open={ openChargeModal }
            onClose={() => {setOpenChargeModal(false)}}
        >
            <Box
                sx={{
                    width: "37.5rem",
                    minHeight: "47.125rem",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "#FFF",
                    border: "none",
                    borderRadius: "1.875rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}
            >
                <img src={ CloseIcon } alt="Close Icon" style={{
                    alignSelf: "flex-end",
                    margin: "1.8rem 1.5rem 0 0",
                    cursor: "pointer",
                }}
                onClick={() => {
                    setOpenChargeModal(false);
                }}
                />

                <form
                    onSubmit={(event) => {handleSubmit(event)}}
                >
                    <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                                mb: "1.44rem"
                            }}
                        >
                            <img src={ ChargeIcon } alt="User's Icon" />
                            <Typography
                                sx={{
                                    fontFamily: "Montserrat",
                                    fontSize: "1.625rem",
                                    fontWeight: "600",
                                    color: "SCGray2",
                                }}
                            >Cadastro de Cobrança</Typography>
                    </Box>

                    <Box
                        sx={{
                            mb: "1rem"
                        }}
                    >
                        <InputLabel htmlFor="iname"
                            sx={{
                                fontFamily: "Nunito",
                                fontSize: "0.875rem",
                                fontWeight: "600",
                                lineHeight: "1.25rem",
                                color: "SCGray2",
                                mb: "0.25rem"
                            }}
                        >Nome*</InputLabel>
                        <TextField
                            placeholder="Digite o nome"
                            id="iname"
                            InputProps={{
                                style:{
                                    width: "30.3125rem",
                                    height: "2.75rem",
                                    borderRadius: "0.5rem",
                                    fontFamily: "Nunito",
                                    fontSize: "1rem",
                                    fontWeight: "400",
                                    lineHeight: "1.5rem",
                                }
                            }}
                            name="name"
                            value={customer.name}
                            disabled
                        />
                    </Box>

                    <Box
                        sx={{
                            mb: "1rem"
                        }}
                    >
                        <InputLabel htmlFor="idescription"
                            sx={{
                                fontFamily: "Nunito",
                                fontSize: "0.875rem",
                                fontWeight: "600",
                                lineHeight: "1.25rem",
                                color: "SCGray2",
                                mb: "0.25rem"
                            }}
                        >Descrição*</InputLabel>
                        <TextField
                            placeholder="Digite a descrição"
                            id="idescription"
                            InputProps={{
                                style:{
                                    width: "30.3125rem",
                                    height: "5.5rem",
                                    borderRadius: "0.5rem",
                                    fontFamily: "Nunito",
                                    fontSize: "1rem",
                                    fontWeight: "400",
                                    lineHeight: "1.5rem",
                                    display: "flex",
                                    alignItems: "flex-start",
                                }
                            }}
                            name="description"
                            onChange={(event) => handleChange(event)}
                        />
                    </Box>

                    <Box
                        sx={{
                            mb: "1rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "1.5rem"
                        }}
                    >
                        <Box>
                            <InputLabel htmlFor="ideadline"
                                sx={{
                                    fontFamily: "Nunito",
                                    fontSize: "0.875rem",
                                    fontWeight: "600",
                                    lineHeight: "1.25rem",
                                    color: "SCGray2",
                                    mb: "0.25rem"
                                }}
                            >Vencimento*</InputLabel>
                            <TextField
                                placeholder="Data de Vencimento"
                                id="ideadline"
                                type="date"
                                InputProps={{
                                    style:{
                                        width: "14.5rem",
                                        height: "2.75rem",
                                        borderRadius: "0.5rem",
                                        fontFamily: "Nunito",
                                        fontSize: "1rem",
                                        fontWeight: "400",
                                        lineHeight: "1.5rem",
                                    }
                                }}
                                name="dueDate"
                                onChange={(event) => handleChange(event)}
                            />
                        </Box>
                        <Box>
                            <InputLabel htmlFor="ivalue"
                                sx={{
                                    fontFamily: "Nunito",
                                    fontSize: "0.875rem",
                                    fontWeight: "600",
                                    lineHeight: "1.25rem",
                                    color: "SCGray2",
                                    mb: "0.25rem"
                                }}
                            >Valor*</InputLabel>
                            <TextField
                                placeholder="Digite o valor"
                                id="idescription"
                                InputProps={{
                                    style:{
                                        width: "14.5rem",
                                        height: "2.75rem",
                                        borderRadius: "0.5rem",
                                        fontFamily: "Nunito",
                                        fontSize: "1rem",
                                        fontWeight: "400",
                                        lineHeight: "1.5rem",
                                    }
                                }}
                                name="value"
                                onChange={(event) => handleChange(event)}
                            />
                        </Box>
                    </Box>
                    <Typography
                            sx={{
                                fontFamily: "Nunito",
                                fontSize: "0.875rem",
                                fontWeight: "600",
                                lineHeight: "1.25rem",
                                color: "SCGray2",
                                mb: "1rem"
                            }}
                        >
                            Status*
                    </Typography>
                    
                    <Box
                        sx={{
                            mb: "8.5rem"
                        }}
                    >
                        <RadioGroup
                            value={ customerCharges.status }
                        >
                            <Box
                                sx={{
                                    mb: "0.5rem",
                                    width: "30.4375rem",
                                    height: "3rem",
                                    borderRadius: "0.625rem",
                                    backgroundColor: "SCGray7",
                                    display: "flex",
                                    alignItems: "center",
                                    pr: "1rem",
                                    gap: "0.5rem"
                                }}
                            >
                                <Radio
                                value="pago"
                                onClick={() => {
                                    return setCustomerCharges((prevState) => {
                                        return { ...prevState, status: "pago" }
                                    })
                                }}
                                icon={<img src={ EmptyCheckbox }alt="Empty Checkbox" />}
                                checkedIcon={
                                    <div
                                            style={{
                                                width: "1.5rem",
                                                height: "1.5rem",
                                                borderRadius: "50%",
                                                backgroundColor: "#0E8750",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                        >
                                            <img src={ CheckedIcon } alt="Checked Icon" />
                                        </div>
                                }
                                />

                                <Typography
                                    sx={{
                                        fontFamily: "Nunito",
                                        fontSize: "1rem",
                                        fontWeight: "400",
                                        lineHeight: "1.5rem",
                                        color: "SCGray2",
                                    }}
                                    >
                                    Cobrança Paga
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    mb: "0.5rem",
                                    width: "30.4375rem",
                                    height: "3rem",
                                    borderRadius: "0.625rem",
                                    backgroundColor: "SCGray7",
                                    display: "flex",
                                    alignItems: "center",
                                    pr: "1rem",
                                    gap: "0.5rem"
                                }}
                            >
                                <Radio
                                    value="pendente"
                                    onClick={() => {
                                        return setCustomerCharges((prevState) => {
                                            return { ...prevState, status: "pendente" }
                                        })
                                    }}
                                    icon={<img src={ EmptyCheckbox }alt="Empty Checkbox" />}
                                    checkedIcon={
                                        <div
                                                style={{
                                                    width: "1.5rem",
                                                    height: "1.5rem",
                                                    borderRadius: "50%",
                                                    backgroundColor: "#0E8750",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}
                                            >
                                                <img src={ CheckedIcon } alt="Checked Icon" />
                                            </div>
                                    }
                                />
                                    <Typography
                                        sx={{
                                            fontFamily: "Nunito",
                                            fontSize: "1rem",
                                            fontWeight: "400",
                                            lineHeight: "1.5rem",
                                            color: "SCGray2",
                                        }}
                                    >
                                    Cobrança Pendente
                                    </Typography>
                            </Box>
                        </RadioGroup>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1.5rem",
                            mb: "2.5rem"
                        }}
                    >
                        <Button
                            sx={{
                                width: "14.625rem",
                                height: "2.0625rem",
                                color: "SCNormalGreen",
                                fontFamily: "Nunito",
                                fontSize: "1.125rem",
                                fontWeight: "400",
                                backgroundColor: "SCGray8",
                                borderRadius: "0.625rem",
                                textTransform: "capitalize",
                                border: "1px solid #DEDEE9"
                            }}
                            type="button"
                            onClick={() => {setOpenChargeModal(false)}}
                        >Cancelar</Button>
                        <Button
                            sx={{
                                width: "14.625rem",
                                height: "2.0625rem",
                                color: "SCGray8",
                                fontFamily: "Nunito",
                                fontSize: "1.125rem",
                                fontWeight: "400",
                                backgroundColor: "SCPink",
                                borderRadius: "0.625rem",
                                textTransform: "capitalize",
                                border: "1px solid #DEDEE9",
                                '&:hover':{
                                    backgroundColor: "SCPink"
                                }
                            }}
                            type="submit"
                        >Aplicar</Button>
                    </Box>
                </form>
            </Box>

        </Modal>
    )
}