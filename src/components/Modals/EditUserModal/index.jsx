import { useTheme } from '@emotion/react';
import { Box, InputLabel, Modal, Paper, Stack, TextField, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import imgCloseModal from "../../../assets/close.svg";
import { ModalsContext } from '../../../context/ModalsContext';
import { SingContext } from '../../../context/SingContext';
import useEmailValidation from '../../../hooks/useEmailValidation';
import api from '../../../services/api';
import SCButton from '../../SCButton/indxe';

function EditUserModal() {
  const {
    openModalEditUser,
    name, setName,
    email, setEmail,
    cpf, setCpf,
    phone, setPhone,
    handleCloseEditUser
  } = useContext(ModalsContext)
  const { value } = useContext(SingContext)
  const {
    handleBlur,
    existingEmailListener, setExistingEmailListener,
    existingEmailError, setExistingEmailError
  } = useEmailValidation()

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [nameError, setNameError] = useState(false)
  const [nameErrorMessage, setNameErrorMessage] = useState("")

  const [passwordErrorListener, setPasswordErrorListener] = useState(false)
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("")

  const [passwordCombinationError, setPasswordCombinationError] = useState("")
  const [confirmPasswordErrorListener, setConfirmPasswordErrorListener] = useState(false)

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

  async function handleSubmit(e) {
    e.preventDefault()
    setNameError(false)
    setNameErrorMessage("")

    setExistingEmailListener(false)
    setExistingEmailError("")

    setPasswordCombinationError("")

    setPasswordErrorListener(false)
    setPasswordErrorMessage("")

    setConfirmPasswordErrorListener(false)

    if (password && confirmPassword && password !== confirmPassword) {
      setPasswordCombinationError("As senhas não coincidem!")
      setPasswordErrorListener(true)
      setConfirmPasswordErrorListener(true)
      return
    }

    if (!name) {
      setNameError(true)
      setNameErrorMessage("Este campo deve ser preenchido!")
      return
    }

    if (!email) {
      setExistingEmailListener(true)
      setExistingEmailError("Este campo deve ser preenchido!")
      return
    }

    if (password && !confirmPassword) {
      setConfirmPasswordErrorListener(true)
      setPasswordCombinationError("Este campo deve ser preenchido!")
      return
    }

    if (confirmPassword && !password) {
      setPasswordErrorListener(true)
      setPasswordErrorMessage("Este campo deve ser preenchido!")
      return
    }

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

    } catch (error) {
      console.log(error.response.data)
    }
  }

  return (
    <Stack    >
      <Modal
        open={openModalEditUser}
        onClose={handleCloseEditUser}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",

          width: "100%",
          height: "100%",
        }}
      >
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
              width: "23.68rem",
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
              error={nameError}
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
              error={existingEmailListener}
              helperText={existingEmailError && `${existingEmailError}`}
              InputProps={{
                style: {
                  height: "2.75rem",
                  borderRadius: ".5rem",


                  fontFamily: "Inter"
                }
              }}
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",

                width: "23.68rem",
                margin: "1.25rem 0"
              }}
            >
              <Box sx={{ width: "11.12rem" }}>
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
                  // error={}
                  InputProps={{
                    style: {
                      height: "2.75rem",
                      borderRadius: ".5rem",

                      fontFamily: "Inter"
                    }
                  }}
                  sx={{ width: "11.12rem" }}
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
                  InputProps={{
                    style: {
                      width: "11.12rem",
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
            <TextField
              id="pasasword"
              type='password'
              placeholder='Digite a nova senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={passwordErrorListener}
              helperText={passwordErrorMessage}
              fullWidth
              InputProps={{
                style: {
                  height: "2.75rem",
                  borderRadius: ".5rem",

                  fontFamily: "Inter"
                }
              }}
            />
            <InputLabel
              htmlFor="confirmPasasword"
              required
              sx={theme.inputModalLabelStyle}
              style={{ marginTop: "1.25rem" }}
            >
              Confirmar Senha
            </InputLabel>
            <TextField
              id="confirmPasasword"
              type='password'
              placeholder='Confirme a nova senha'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={confirmPasswordErrorListener}
              helperText={passwordCombinationError && `${passwordCombinationError}`}
              fullWidth
              InputProps={{
                style: {
                  height: "2.75rem",
                  borderRadius: ".5rem",

                  fontFamily: "Inter"
                }
              }}
            />
            <SCButton>
              Aplicar
            </SCButton>
          </Stack>
        </Paper>
      </Modal>
    </Stack >
  );
}

export default EditUserModal;