import { useTheme } from '@emotion/react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  Box,
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
import imgCloseModal from "../../../assets/close.svg";
import { ModalsContext } from '../../../context/ModalsContext';
import { SingContext } from '../../../context/SingContext';
import useEmailValidation from '../../../hooks/useEmailValidation';
import api from '../../../services/api';
import SCButton from '../../SCButton/indxe';

function EditUserModal() {
  const {
    openModalEditUser,
    handleCloseEditUser,
  } = useContext(ModalsContext)
  const { value, setReceivedEmail } = useContext(SingContext)
  const { handleBlur } = useEmailValidation()
  const [name, setName] = useState(" ")
  const [email, setEmail] = useState(" ")
  const [cpf, setCpf] = useState(" ")
  const [phone, setPhone] = useState(" ")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const theme = useTheme()

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    async function userGetDataInfo() {
      try {
        const { data } = await api.get("/users/profile", {
          headers: {
            Authorization: `Bearer ${value}`
          }
        })

        setName(data.name)
        setEmail(data.email)
        setReceivedEmail(data.email)
      } catch (error) {
        console.log(error.response.data)
      }
    }
    userGetDataInfo()
  }, [setReceivedEmail, value])

  function handleSubmit(e) {
    e.preventDefault()

    // TODO - validacoes da api

    const userEditData = {
      name,
      email,
      cpf,
      phone,
      newPassword: password
    }

    console.log(userEditData);
    // TODO - Apagar componente form
  }

  return (
    <Stack>
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
            <OutlinedInput
              id="confirmPasasword"
              type={showPassword ? 'text' : 'password'}
              placeholder='Confirme a nova senha'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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