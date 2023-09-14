import { Box, Button, FormControl, Stack, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SingContext } from "../../../context/SingContext";
import useSingUp from "../../../hooks/useSingIn";

function LoginForm() {
  const {
    email, setEmail,
    password, setPassword,
  } = useContext(SingContext)
  const { handleSubmit } = useSingUp()
  const navigate = useNavigate()

  // TODO - E-mail não existe no cadastro (/email/:email)
  // TODO -  Senha incorreta para o e-mail

  return (
    <Stack spacing={2} sx={{ width: "21.5rem" }}>
      <Typography
        component="h1"
        variant="h5"
        sx={{ fontWeight: "bold", textAlign: "center" }}
      >
        Faça seu login!
      </Typography>

      <FormControl
        component="form"
        onSubmit={handleSubmit}
      >
        <Box>
          <Typography
            sx={{
              marginBottom: '.5rem',

              fontFamily: "Nunito",
              fontSize: ".875rem",
              fontWeight: "600"
            }}
          >
            E-mail
          </Typography>
          <TextField
            required
            id="email"
            type='email'
            placeholder="Digite seu e-mail"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              style: {
                height: "2.75rem",
                borderRadius: ".5rem",

                backgroundColor: "SCInputBackground",

                fontFamily: "Inter"
              }
            }}
          />
        </Box>

        <Box sx={{ marginTop: "1.25rem" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",

              marginBottom: '.5rem'
            }}>
            <Typography
              sx={{
                fontFamily: "Nunito",
                fontSize: ".875rem",
                fontWeight: "600"
              }}
            >
              Senha
            </Typography>
            <Typography
              color="SCPink"
              sx={{
                fontSize: ".875rem",
                fontWeight: "600",
                textDecoration: "underline"
              }}>
              Esqueceu a senha?
            </Typography>
          </Box>

          <TextField
            required
            id="password"
            type='password'
            placeholder="Digite sua senha"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              style: {
                height: "2.75rem",
                borderRadius: "10px",

                backgroundColor: "SCInputBackground",

                fontFamily: "Inter"
              }
            }}
          />
        </Box>

        <Button
          variant="contained"
          type="submit"
          sx={{
            alignSelf: "center",

            width: "10rem",
            height: "2.06rem",
            padding: "1.25rem",
            marginTop: "2.5rem",
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
          Entrar
        </Button>
      </FormControl>

      <Box sx={{ display: "flex", justifyContent: "center", gap: ".25rem" }}>
        <Typography sx={{ fontSize: ".875rem", }}>
          Ainda não possui uma conta?
        </Typography>
        <Typography
          color="SCPink"
          sx={{
            alignSelf: "center",

            fontSize: ".875rem",
            fontWeight: "600",
            textDecoration: "underline"
          }}
          onClick={() => navigate("/singup")}
        >
          Cadastre-se
        </Typography>
      </Box>
    </Stack>
  );
}

export default LoginForm;