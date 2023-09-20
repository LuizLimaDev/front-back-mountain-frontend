import {
    Step,
    StepContent,
    StepLabel,
    Stepper,
    Typography
} from "@mui/material";
import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import ActualStep from "../../assets/actualStep.svg";
import DoneStep from "../../assets/doneStep.svg";
import NextStep from "../../assets/nextStep.svg";
import { SingContext } from "../../context/SingContext";
import "./styles.css";

export default function RegisterLayout() {
    const {
        steps, setSteps,
        form
    } = useContext(SingContext);

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
                        <Step
                            key={0}
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
                                icon={ <img src={ steps === 0 ? ActualStep : DoneStep }  /> }
                            >
                                <Link
                                    to="/singup"
                                    style={{textDecoration: "none"}}
                                    onClick={() => {
                                        if(form.email && form.name){
                                            return setSteps(0);
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