import { useTheme } from '@emotion/react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  Box,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  Modal,
  OutlinedInput,
  Paper,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import imgCloseModal from "../../../../assets/close.svg";
import { ModalsContext } from '../../../../context/ModalsContext';
import { SingContext } from '../../../../context/SingContext';
import useEmailValidation from '../../../../hooks/useEmailValidation';
import api from '../../../../services/api';
import SCButton from '../../../Inputs/SCButton/indxe';

function EditUserModal() {
  const {
    openModalEditUser,
    handleCloseEditUser,
    handleOpenEditSucess,
    SetEditFinished
  } = useContext(ModalsContext)
  const { value, setReceivedEmail } = useContext(SingContext)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [cpf, setCpf] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const [apiErrors, setApiErrors] = useState([])
  const [passowrdCombination, setPassowrdCombination] = useState("")
  const { handleBlur, existingEmailError, setExistingEmailError } = useEmailValidation()

  const theme = useTheme()

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  function clearForm() {
    setName("")
    setEmail("")
    setCpf("")
    setPhone("")
    setPassword("")
    setConfirmPassword("")
    setShowPassword(false)
    setApiErrors([])
    setExistingEmailError("")
  }

  useEffect(() => {
    async function userGetDataInfo() {
      try {
        const { data } = await api.get("/users/profile", {
          headers: {
            Authorization: `Bearer ${value}`
          }
        })

        setCpf(data.cpf)
        setPhone(data.phone)
        setName(data.name)
        setEmail(data.email)
        setReceivedEmail(data.email)
      } catch (error) {
        console.log(error.response.data)
      }
    }

    if (openModalEditUser) {
      userGetDataInfo()
    }

  }, [openModalEditUser, setReceivedEmail, value])

  async function handleSubmit(e) {
    e.preventDefault()
    setPassowrdCombination("")
    setApiErrors([])

    if (!password && confirmPassword) {
      setApiErrors({ ...apiErrors, newPassword: `Digite a "Nova Senha" e o "Confirmar Senha"` })
      return
    }

    if (password !== confirmPassword) {
      setApiErrors({ ...apiErrors, newPassword: "As senhas não conferem" })
      return
    }

    const userEditData = {
      name,
      email,
      cpf,
      phone,
      newPassword: password
    }

    try {
      await api.put("/users", userEditData, {
        headers: {
          Authorization: `Bearer ${value}`
        }
      })

      SetEditFinished(true)
      clearForm()
      handleCloseEditUser()
      handleOpenEditSucess()

    } catch (error) {
      const errors = error.response.data.errors;

      errors.map((item) => {
        setApiErrors((prevState) => {
          return { ...prevState, [item.type]: item.message }
        })
      });
    }
  }

  return (
    <Stack>
      <Modal
        open={openModalEditUser}
        onClose={() => { handleCloseEditUser(), clearForm() }}
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
            width: "31.68rem",
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
              onClick={() => { handleCloseEditUser(), clearForm() }}
            />
          </Box>

          <Stack
            component="form"
            onSubmit={handleSubmit}
            sx={{
              width: "25.68rem",
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
              error={apiErrors.name && true}
              helperText={apiErrors.name}
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
            <FormControl variant="outlined">
              <OutlinedInput
                id="email"
                type='email'
                placeholder='Digite seu e-mail'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={apiErrors.email || existingEmailError ? true : false}
                onBlur={handleBlur}
                sx={{
                  height: "2.75rem",
                  borderRadius: ".5rem",

                  fontFamily: "Inter"
                }}
                aria-describedby="email-text"
              />
              <FormHelperText id="email-text">
                {apiErrors.email}
              </FormHelperText>
              <FormHelperText id="email-text">
                {existingEmailError}
              </FormHelperText>
            </FormControl>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",

                width: "24.68rem",
                margin: "1.25rem 0 "
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
                  error={apiErrors.cpf && true}
                  helperText={apiErrors.cpf}
                  InputProps={{
                    style: {
                      height: "2.75rem",
                      borderRadius: ".5rem",

                      fontFamily: "Inter"
                    }
                  }}
                  sx={{ width: "12.12rem" }}
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
                  error={apiErrors.phone && true}
                  helperText={apiErrors.phone && "Formado: (XX) XXXXX-XXXX"}
                  InputProps={{
                    style: {
                      width: "12.12rem",
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
              error={apiErrors.newPassword && true}
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

            <InputLabel
              htmlFor="confirmPasasword"
              required
              sx={theme.inputModalLabelStyle}
              style={{ marginTop: "1.25rem" }}
            >
              Confirmar Senha
            </InputLabel>
            <FormControl variant='outlined'>
              <OutlinedInput
                id="confirmPasasword"
                type={showPassword ? 'text' : 'password'}
                placeholder='Confirme a nova senha'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={apiErrors.newPassword && true}
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
              <FormHelperText id="email-text">
                {apiErrors.newPassword && apiErrors.newPassword || passowrdCombination}
              </FormHelperText>
            </FormControl>

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