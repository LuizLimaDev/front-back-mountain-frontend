import { useTheme } from "@emotion/react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Stack, TextField, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import imgCloseModal from "../../../../assets/close.svg";
import { ModalsContext } from "../../../../context/ModalsContext";
import { SingContext } from "../../../../context/SingContext";
import useEmailValidation from "../../../../hooks/useEmailValidation";
import api from "../../../../services/api";
import SCButton from "../../../SCButton/indxe";

// eslint-disable-next-line react/prop-types
function Form({ SetEditFinished }) {
  const {
    name, setName,
    email, setEmail,
    cpf, setCpf,
    phone, setPhone,
    handleCloseEditUser,
  } = useContext(ModalsContext)
  const { value } = useContext(SingContext)
  const {
    handleBlur,
    existingEmailListener, setExistingEmailListener,
    existingEmailError, setExistingEmailError
  } = useEmailValidation()

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [nameErrorMessage, setNameErrorMessage] = useState("")
  const [nameErrorListener, setNameErrorListener] = useState(false)

  const [emailErrorMessage, setEmailErrorMessage] = useState("")
  // eslint-disable-next-line no-unused-vars
  const [emailErrorListener, setEmailErrorListener] = useState(false)

  const [cpfErrorMessage, setCpfErrorMessage] = useState("")
  const [cpfErrorListener, setCpfErrorListener] = useState(false)

  const [phoneErrorMessage, setPhoneErrorMessage] = useState("")
  const [phoneErrorListener, setPhoneErrorListener] = useState(false)

  const [passwordErrorMessage, setPasswordErrorMessage] = useState("")
  const [passwordErrorListener, setPasswordErrorListener] = useState(false)

  const [passwordCombinationError, setPasswordCombinationError] = useState("")
  const [confirmPasswordErrorListener, setConfirmPasswordErrorListener] = useState(false)

  const [showPassword, setShowPassword] = useState(false)

  const theme = useTheme()

  async function userGetData() {
    try {
      const { data } = await api.get("/users/profile", {
        headers: {
          Authorization: `Bearer ${value}`
        }
      })

      setName(data.name)
      setEmail(data.email)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  useEffect(() => {
    userGetData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  async function handleSubmit(e) {
    e.preventDefault()

    setNameErrorMessage("")
    setNameErrorListener(false)

    setExistingEmailListener(false)
    setExistingEmailError("")

    setPasswordCombinationError("")

    setPasswordErrorListener(false)
    setPasswordErrorMessage("")

    setCpfErrorListener(false)
    setCpfErrorMessage("")

    setPhoneErrorListener(false)
    setPhoneErrorMessage("")

    setConfirmPasswordErrorListener(false)

    const userEdit = {
      name,
      email,
      cpf,
      phone,
      newPassword: password,
    }

    try {
      await api.put("/users", userEdit, {
        headers: {
          Authorization: `Bearer ${value}`
        }
      })

      SetEditFinished(true)

      setTimeout(() => {
        SetEditFinished(false)
        handleCloseEditUser()

        setName("")
        setEmail("")
        setCpf("")
        setPhone("")
      }, 2000);
    } catch (error) {
      const apiErrors = (error.response.data.errors)

      apiErrors.find(erro => {
        if (erro.type === "name") {
          setNameErrorListener(true)
          setNameErrorMessage("O campo de Nome deve ser preenchido!")

        }

        if (erro.type === "email") {
          setEmailErrorListener(true)
          setEmailErrorMessage("O campo de E-mail deve ser preenchido!")
          return
        }

        if (erro.type === "cpf") {
          setCpfErrorListener(true)
          setCpfErrorMessage("Formato: XXX.XXX.XXX-XX")
          return
        }

        if (erro.type === "phone") {
          setPhoneErrorListener(true)
          setPhoneErrorMessage("Formato: (XX) XXXXX-XXXX")
          return
        }

        if (erro.type === "newPassword") {
          setPasswordErrorListener(true)
          setConfirmPasswordErrorListener(true)
          setPasswordCombinationError("A senha precisa conter, no mínimo, 8 caracteres!")
          return
        }

        if (password && confirmPassword && password !== confirmPassword) {
          setPasswordCombinationError("As senhas não coincidem!")
          setPasswordErrorListener(true)
          setConfirmPasswordErrorListener(true)
          return
        }
      })

      if (password && !confirmPassword) {
        setConfirmPasswordErrorListener(true)
        setPasswordCombinationError(`O campo "Confirmar Senha" deve ser preenchido!`)
        return
      }

      if (confirmPassword && !password) {
        setPasswordErrorListener(true)
        setPasswordErrorMessage(`O campo "Nova Senha" deve ser preenchido!`)
        return
      }
    }
  }

  return (
    <>
      <Paper
        sx={{
          position: "relative",
          width: "30.68rem",
          padding: "2.5rem 3.5rem",
          borderRadius: "1.87rem"
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",

            marginBottom: "2rem"
          }}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontWeight: "600",
              fontSize: "1.5rem"
            }}
          >
            Edite seu cadastro
          </Typography>
          <img
            src={imgCloseModal}
            alt="fechar modal"
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",

              width: "2rem",

              cursor: "pointer"
            }}
            onClick={() => handleCloseEditUser()}
          />
        </Box>

        <Stack
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: "24.68rem",
          }}
        >
          <InputLabel
            htmlFor="name"
            required
            sx={theme.inputModalLabelStyle}
          >
            Nome
          </InputLabel>
          <TextField
            id="name"
            type='text'
            placeholder='Digite seu nome'
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={nameErrorListener}
            helperText={nameErrorMessage && `${nameErrorMessage}`}
            InputProps={{
              style: {
                height: "2.75rem",
                borderRadius: ".5rem",

                fontFamily: "Inter",
              }
            }}
          />

          <InputLabel
            htmlFor="email"
            required
            sx={theme.inputModalLabelStyle}
            style={{ marginTop: "1.25rem", }}
          >
            E-mail
          </InputLabel>
          <TextField
            id="email"
            type='email'
            placeholder='Digite seu e-mail'
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleBlur}
            error={existingEmailListener || emailErrorMessage}
            helperText={existingEmailError && `${existingEmailError}`}
            InputProps={{
              style: {
                height: "2.75rem",
                borderRadius: ".5rem",


                fontFamily: "Inter"
              }
            }}
          />
          <Typography sx={theme.MUIerrorMessageStyle}>
            {emailErrorMessage && `${emailErrorMessage}`}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1.25rem",

              width: "24.68rem",
              margin: "1.25rem 0"
            }}
          >
            <Box>
              <InputLabel
                htmlFor="cpf"
                sx={theme.inputModalLabelStyle}
              >
                CPF
              </InputLabel>
              <TextField
                id="cpf"
                type='text'
                placeholder='Digite seu CPF'
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                error={cpfErrorListener}
                helperText={cpfErrorMessage && `${cpfErrorMessage}`}
                InputProps={{
                  style: {
                    height: "2.75rem",
                    borderRadius: ".5rem",

                    fontFamily: "Inter"
                  }
                }}
                sx={{ width: "11.62rem" }}
              />
            </Box>
            <Box sx={{ width: "11.12rem" }}>
              <InputLabel
                htmlFor="phone"
                sx={theme.inputModalLabelStyle}
              >
                Telefone
              </InputLabel>
              <TextField
                id="phone"
                type='text'
                placeholder='Digite seu Telefone'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                error={phoneErrorListener}
                helperText={phoneErrorMessage && `${phoneErrorMessage}`}
                InputProps={{
                  style: {
                    width: "11.62rem",
                    height: "2.75rem",
                    borderRadius: ".5rem",

                    fontFamily: "Inter"
                  }
                }}
              />
            </Box>
          </Box>

          <InputLabel
            htmlFor="pasasword"
            required
            sx={theme.inputModalLabelStyle}
          >
            Nova Senha
          </InputLabel>
          <OutlinedInput
            id="pasasword"
            type={showPassword ? 'text' : 'password'}
            placeholder='Digite a nova senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordErrorListener}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            fullWidth
            sx={{
              height: "2.75rem",
              borderRadius: ".5rem",

              fontFamily: "Inter"
            }}
          />
          <Typography sx={theme.MUIerrorMessageStyle}>
            {passwordErrorMessage && `${passwordErrorMessage}`}
          </Typography>

          <InputLabel
            htmlFor="confirmPasasword"
            required
            sx={theme.inputModalLabelStyle}
            style={{ marginTop: "1.25rem" }}
          >
            Confirmar Senha
          </InputLabel>
          <OutlinedInput
            id="confirmPasasword"
            type={showPassword ? 'text' : 'password'}
            placeholder='Confirme a nova senha'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={confirmPasswordErrorListener}
            helperText={passwordCombinationError && `${passwordCombinationError}`}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            fullWidth
            sx={{
              height: "2.75rem",
              borderRadius: ".5rem",

              fontFamily: "Inter"
            }}
          />
          <Typography sx={theme.MUIerrorMessageStyle}>
            {passwordCombinationError && `${passwordCombinationError}`}
          </Typography>

          <SCButton>
            Aplicar
          </SCButton>
        </Stack>
      </Paper>
    </>
  );
}

export default Form;