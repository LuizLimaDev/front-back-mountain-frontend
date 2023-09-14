import "./styles.css"
import { useContext } from "react";
import { SingContext } from "../../context/SingContext";
import {
  TextField,
  Button,
  Typography,
} from "@mui/material";
import {
  Link,
  NavLink
} from "react-router-dom";


function SingUp() {
  const {
    errorNameMessage, setErrorNameMessage,
    errorEmailMessage, setErrorEmailMessage,
    form, setForm,
    setSteps
  } = useContext(SingContext);


  function handleSubmit(event){
    event.preventDefault();
    if(!form.name){
        setErrorNameMessage(true);
    }

    if(!form.email){
        setErrorEmailMessage(true);
    }
}

function handleChange(event){
    setForm((prevState) => {
        return ({...prevState, [event.target.name]: event.target.value})
    });
    setErrorEmailMessage(false);
    setErrorNameMessage(false);
}

return(
    <main className="register-name">
        <Typography
        variant="h2"
        className="register-name__title"
        sx={{
            fontFamily: "Montserrat",
            fontSize: "1.5rem",
            fontWeight: "700",
            lineHeight: "1.95rem",
            mb: "2rem"
        }}
        >Adicione seus dados</Typography>

        <form className="register-name__form" onSubmit={ handleSubmit } >
            <Typography
            className="form-label"
            htmlFor="input-name"
            sx={{
                fontFamily: "Nunito",
                fontSize: "0.875rem",
                fontWeight: "600",
                lineHeight: "1.25rem",
                mb: "0.38rem"
            }}
            >Nome*
            </Typography>
            <TextField 
            id="input-name" 
            variant="outlined" 
            placeholder="Digite seu nome" 
            className="form__input-name" 
            sx={{mb: "1.25rem"}} 
            error={errorNameMessage && true}
            helperText={errorNameMessage && "O campo de nome é obrigatório."}
            name="name"
            InputProps={{
                style:{
                    height: "2.75rem",
                    borderRadius: "0.5rem",
                    borderColor: "#D0D5DD",
                    fontFamily: "Inter",
                }
            }}
            onChange={(event) => handleChange(event)}
            />

<Typography
            className="form-label"
            htmlFor="input-name"
            sx={{
                fontFamily: "Nunito",
                fontSize: "0.875rem",
                fontWeight: "600",
                lineHeight: "1.25rem",
                mb: "0.38rem"
            }}
            >E-mail*
            </Typography>
            <TextField 
            variant="outlined" 
            placeholder="Digite seu e-mail" 
            className="form__input-email" 
            sx={{mb: "2.5rem"}}
            InputProps={{
                style:{
                    height: "2.75rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #D0D5DD",
                    fontFamily: "Inter"
                }
            }}
            error={ errorEmailMessage && true }
            helperText={ errorEmailMessage && "O campo de email é obrigatório."} 
            type="email"
            name="email"
            onChange={(event) => handleChange(event)}
            />

            <Button 
            variant="contained" 
            sx={{
                backgroundColor: "#DA0175",
                width: "10rem",
                alignSelf: "center",
                mb: "0.94rem",
                borderRadius: "0.63rem",
                '&:hover':{
                    backgroundColor: "#DA0175"
                }
            }}
            type="submit"
            >
                Continuar
            </Button>
            <Typography
                sx={{
                    fontFamily: "Nunito",
                    fontSize: "1.125rem",
                    fontWeight: "400",
                    textAlign: "center"
                }}> Já possui uma conta? Faça seu <Link to="#" style={{
                    color: "#DA0175"
                }} >
                    Login
                </Link>
            </Typography>
        </form>
        <nav className="navigation-list" >
            <NavLink
            to="/"
            end
            className={({isActive}) => isActive ? "selected" : null }
            onClick={() => setSteps(0)}
            ></NavLink>

            <NavLink
            to="/password"
            className={({isActive}) => isActive ? "selected" : null }
            onClick={() => setSteps(1)}
            ></NavLink>

            <NavLink
            to="/success"
            className={({isActive}) => isActive ? "selected" : null }
            onClick={() => setSteps(2)}
            ></NavLink>

        </nav>
    </main>
)
}

export default SingUp;