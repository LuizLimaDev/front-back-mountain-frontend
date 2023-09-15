import { useContext } from "react";
import { SingContext } from "../../../context/SingContext";
import {
    OutlinedInput,
    Button,
    Typography,
    InputAdornment,
    IconButton,
} from "@mui/material";
import {
    Visibility,
    VisibilityOff
} from "@mui/icons-material";
import {
    Link,
    useNavigate
} from "react-router-dom";
import api from "../../../services/api";


export default function Password() {
    const {
        form, setForm,
        steps, setSteps,
        showPassword, setShowPassword,
        errorPassword, setErrorPassword
    } = useContext(SingContext);
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        if (!form.password) {
            return setErrorPassword("Digite o campo de senha.");
        }

        if (!form.passwordConfirm) {
            return setErrorPassword("Digite o campo de confirmação de senha.");
        }

        if (form.password !== form.passwordConfirm) {
            return setErrorPassword("A senhas digitadas não correspondem entre si.")
        }

        try {
            const response = await api.post("/users", {name: form.name, email: form.email, password: form.password});
            setSteps(2);
            return navigate("/success");
        } catch (error) {
            setErrorPassword(error.response.data.mensagem);   
        }
    }

    function handleChange(event) {
        setForm((prevState) => {
            return ({ ...prevState, [event.target.name]: event.target.value })
        });
        setErrorPassword("");
    }

    function handleShowPassword() {
        setShowPassword(!showPassword);
    }

    return (
        <main className="register-name">
            <Typography
                sx={{
                    fontFamily: "Montserrat",
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    lineHeight: "1.95rem",
                    mb: "2rem"
                }}
            >Escolha uma senha</Typography>

            <form className="register-name__form" onSubmit={handleSubmit} >
                <Typography
                    sx={{
                        fontFamily: "Nunito",
                        fontSize: "0.875rem",
                        fontWeight: "600",
                        lineHeight: "1.25rem",
                        mb: "0.38rem"
                    }}
                >Senha*
                </Typography>
                <OutlinedInput
                    placeholder="Digite sua senha"
                    sx={{
                        mb: "1.25rem",
                        height: "2.75rem",
                        borderRadius: "0.5rem",
                        border: "1px solid #D0D5DD",
                        fontFamily: "Inter"
                    }}
                    error={errorPassword && true}
                    name="password"
                    value={form.password}
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => handleShowPassword()}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    onChange={(event) => handleChange(event)}
                />

                <Typography
                    sx={{
                        fontFamily: "Nunito",
                        fontSize: "0.875rem",
                        fontWeight: "600",
                        lineHeight: "1.25rem",
                        mb: "0.38rem"
                    }}
                >Repita a senha*
                </Typography>
                <OutlinedInput
                    placeholder="Repita a senha"
                    sx={{
                        mb: "2.5rem",
                        height: "2.75rem",
                        borderRadius: "0.5rem",
                        border: "1px solid #D0D5DD",
                        fontFamily: "Inter"
                    }}
                    error={errorPassword && true}
                    name="passwordConfirm"
                    value={form.passwordConfirm}
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => handleShowPassword()}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
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
                        '&:hover': {
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
                    }}> Já possui uma conta? Faça seu <Link to="/" style={{
                        color: "#DA0175"
                    }} >
                        Login
                    </Link>
                </Typography>
                {errorPassword && <Typography
                    sx={{
                        fontFamily: "Nunito",
                        fontSize: "1.125rem",
                        fontWeight: "400",
                        textAlign: "center",
                        mt: "0.94rem",
                        color: "SCNormalError"
                    }}>
                    {errorPassword}
                </Typography>}
            </form>
            <nav className="navigation-list" >
                <a
                    className={steps === 0 ? "selected" : null}
                    onClick={() => {
                        if (form.name && form.email) {
                            setSteps(0);
                            return navigate("/singup")
                        }
                    }}
                ></a>

                <a
                    className={steps === 1 ? "selected" : null}
                ></a>

                <a
                    className={steps === 2 ? "selected" : null}
                ></a>

            </nav>
        </main>
    )
}