import {
    Step,
    StepContent,
    StepLabel,
    Stepper,
    Typography
} from "@mui/material";
import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ActualStep from "../../assets/actualStep.svg";
import DoneStep from "../../assets/doneStep.svg";
import NextStep from "../../assets/nextStep.svg";
import { SingContext } from "../../context/SingContext";
import "./styles.css";

export default function RegisterLayout() {
    const navigate = useNavigate();
    const { steps, setSteps, form } = useContext(SingContext);
    const stages = [
        {
            label: "Cadastre-se",
            content: "Por favor, escreva seu nome e e-mail"
        },
        {
            label: "Escolha uma senha",
            content: "Escolha uma senha segura"
        },
        {
            label: "Cadastro realizado com sucesso",
            content: "E-mail e senha cadastrados com sucesso"
        },
    ];

    return (
        <div className="layout-container">
            <aside className="aside-step" >
                    <Stepper activeStep={steps} orientation="vertical" sx={{
                        '& .MuiStepConnector-lineVertical': {
                            minHeight: "2rem",
                            ml: 0.9,
                            borderColor: "SCNormalGreen",
                            borderWidth: "2px"
                        }
                    }} >
                        {stages.map((stage, index) => {
                            return(
                                <Step onClick={()=>{
                                    if(steps>index && steps<2){
                                        setSteps(index);
                                        if(steps === 1){
                                            return navigate("/singup");
                                        }
                                    } else if (index === 1 && (form.name || form.email)){
                                        setSteps(index);
                                        return navigate("/password");
                                    }
                                }} key={stage.label} sx={{
                                    '& .MuiStepContent-root': {
                                        borderColor: "SCNormalGreen",
                                        borderWidth: "2px",
                                        ml: 2.4,
                                        minHeight: "0.5rem",
                                    },
                                }} >
                                    <StepLabel icon={ <img src={ index === steps && steps !== 2 ? ActualStep : steps > index || steps === 2 ? DoneStep : NextStep } className="stepImage"  /> } >
                                        <Typography
                                        sx={{
                                            fontFamily: "Montserrat",
                                            fontSize: "1.125rem",
                                            fontWeight: "700",
                                            color: "SCNormalGreen",
                                            cursor: "pointer"
                                        }}
                                    >Cadastre-se</Typography>
                                </Link>
                            </StepLabel>

                            <StepContent>
                                <Typography
                                    sx={{
                                        fontFamily: "Nunito",
                                        fontSize: "1.125rem",
                                        fontWeight: "600",
                                        color: "SCGray2"
                                    }}
                                >Por favor, escreva seu nome e e-mail</Typography>
                            </StepContent>
                        </Step>
                        <Step
                            key={1}
                            sx={{
                                '& .MuiStepContent-root':{
                                    borderColor: "SCNormalGreen",
                                    borderWidth: "2px",
                                    ml: 2.4,
                                    minHeight: "0.5rem"
                                }
                            }}
                        >
                            <StepLabel
                                icon={ <img src={ steps === 1 ? ActualStep : steps < 2 ? NextStep : DoneStep }  /> }
                            >
                                <Link
                                    to={form.password && form.passwordConfirm ? "/password" : null}
                                    style={{textDecoration: "none"}}
                                    onClick={() => {
                                        if(form.password && form.passwordConfirm){
                                            return setSteps(1)
                                        }
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontFamily: "Montserrat",
                                            fontSize: "1.125rem",
                                            fontWeight: "700",
                                            color: "SCNormalGreen",
                                            cursor: "pointer"
                                        }}
                                    >Escolha uma senha</Typography>
                                </Link>
                            </StepLabel>

                            <StepContent>
                                <Typography
                                    sx={{
                                        fontFamily: "Nunito",
                                        fontSize: "1.125rem",
                                        fontWeight: "600",
                                        color: "SCGray2"
                                    }}
                                >Escolha uma senha segura</Typography>
                            </StepContent>
                        </Step>
                        <Step
                            key={2}
                            sx={{
                                '& .MuiStepContent-root':{
                                    borderColor: "SCNormalGreen",
                                    borderWidth: "2px",
                                    ml: 2.4,
                                    minHeight: "0.5rem"
                                }
                            }}
                        >
                            <StepLabel
                                icon={ <img src={ steps === 2 ? DoneStep : NextStep }  /> }
                            >
                                <Typography
                                    sx={{
                                        fontFamily: "Montserrat",
                                        fontSize: "1.125rem",
                                        fontWeight: "700",
                                        color: "SCNormalGreen",
                                        cursor: "pointer"
                                    }}
                                >Cadastro realizado com sucesso</Typography>
                            </StepLabel>

                            <StepContent>
                                <Typography
                                    sx={{
                                        fontFamily: "Nunito",
                                        fontSize: "1.125rem",
                                        fontWeight: "600",
                                        color: "SCGray2"
                                    }}
                                >E-mail e senha cadastrados com sucesso</Typography>
                            </StepContent>
                        </Step>
                </Stepper>
            </aside>
            <Outlet />
        </div>
    )
}