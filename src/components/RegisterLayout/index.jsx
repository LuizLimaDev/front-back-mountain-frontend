import "./styles.css";
import { Outlet } from "react-router-dom";
import {
    Step, 
    Stepper,
    StepLabel,
    StepContent,
    StepIcon,
    Typography
} from "@mui/material";
import ActualStep from "../../assets/actualStep.svg";
import NextStep from "../../assets/nextStep.svg";
import DoneStep from "../../assets/doneStep.svg";
import { useContext } from "react";
import { SingContext } from "../../context/SingContext";

export default function RegisterLayout(){
    const { steps, setSteps } = useContext(SingContext);
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
                    <Stepper activeStep={steps} orientation="vertical">
                        {stages.map((stage, index) => {
                            return(
                                <Step key={stage.label} sx={{
                                    '& .MuiStepContent-root': {
                                        borderColor: "#0E8750",
                                        borderWidth: "2px",
                                        ml: 2.4,
                                        minHeight: 10
                                    },
                                }} >
                                    <StepLabel icon={ <img src={ index === steps && steps !== 2 ? ActualStep : steps > index || steps === 2 ? DoneStep : NextStep } className="stepImage"  /> } >
                                        <Typography
                                        sx={{
                                            fontFamily: "Montserrat",
                                            fontWeight: "700",
                                            fontSize: "1.25rem",
                                            color: "SCNormalGreen",
                                        }}
                                        >
                                            {stage.label}
                                        </Typography>
                                    </StepLabel>
                                    <StepContent>
                                        <Typography
                                        sx={{
                                            fontFamily: "Nunito",
                                            fontSize: "1.125ren",
                                            fontWeight: "600",
                                            color: "SCGray6"
                                        }}
                                        >
                                            {stage.content}
                                        </Typography>
                                    </StepContent>
                                </Step>
                            )
                        })}
                    </Stepper>
            </aside>
                <Outlet />
        </div>
    )
}