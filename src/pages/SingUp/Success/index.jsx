import { useContext } from "react";
import {
    useNavigate
} from "react-router-dom";
import {
    Box,
    Typography,
    Button
} from "@mui/material";
import SuccessImage from "../../../assets/success.svg";
import { SingContext } from "../../../context/SingContext";

export default function Success(){
    const {
        steps,
    } = useContext(SingContext);
    const navigate = useNavigate();

    return(
        <main className="register-name" style={{paddingTop: "11rem"}} >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",

                    width: "37.5rem",
                    height: "32rem",
                    borderRadius: "1.88rem",
                    mb: "1.88rem",

                    backgroundColor: "SCGray7"
                }}
            >
                <img src={ SuccessImage } alt="Success Image" />
                <Typography
                    sx={{
                        fontFamily: "Montserrat",
                        fontSize: "1.5rem",
                        textAlign: "center",
                        fontWeight: "700",
                        lineHeight: "1.95rem"
                    }}
                >
                    Cadastro realizado com sucesso!
                </Typography>
            </Box>

            <Button
                variant="contained" 
                sx={{
                    backgroundColor: "SCPink",
                    width: "10rem",
                    alignSelf: "center",
                    mb: "4.31rem",
                    borderRadius: "0.63rem",
                    '&:hover':{
                        backgroundColor: "SCPink"
                    }
                }}
                onClick={() => navigate("/signin")}
            >
                Ir para Login
            </Button>

            <nav className="navigation-list" >
            <a
            className={steps === 0 ? "selected" : null }
            ></a>

            <a
            className={steps === 1 ? "selected" : null }
            ></a>

            <a
            className={steps === 2 ? "selected" : null }
            ></a>

        </nav>
        </main>
    )
}