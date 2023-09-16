import { Box, IconButton, InputAdornment, InputLabel, Modal, Paper, Stack, TextField, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import imgCloseModal from "../../../assets/close.svg";
import { ModalsContext } from '../../../context/ModalsContext';
import useEmailValidation from '../../../hooks/useEmailValidation';
import SCButton from '../../SCButton/indxe';
import { useTheme } from '@emotion/react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function EditUserModal() {
  const {
    setOpenModalEditUser,
    name, setName,
    email, setEmail,
    cpf, setCpf,
    phone, setPhone,
    password, setPassword,
    confirmPassword, setConfirmPassword
  } = useContext(ModalsContext)
  const { handleBlur } = useEmailValidation()

  // const [showPassword, setShowPassword] = useState(false);
  // const handleClickShowPassword = () => setShowPassword((show) => !show);
  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  const theme = useTheme()

  function emailErrors() {
    return "Erros da API"
  }

  return (
    <Stack    >
      <Modal
        open={() => setOpenModalEditUser(true)}
        onClose={() => setOpenModalEditUser(false)}
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

                width: "2rem"
              }}
            />
          </Box>

          <Stack
            component="form"
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
              required
              id="name"
              type='text'
              placeholder='Digite seu nome'
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              // error={}
              InputProps={{
                style: {
                  height: "2.75rem",
                  borderRadius: ".5rem",
                  marginBottom: "1.25rem",

                  fontFamily: "Inter",
                }
              }}
            />

            <InputLabel
              htmlFor="email"
              required
              sx={theme.inputModalLabelStyle}
            >
              E-mail
            </InputLabel>
            <TextField
              required
              id="email"
              type='email'
              placeholder='Digite seu e-mail'
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBluer={handleBlur}
              // error={emailErrors()}
              InputProps={{
                style: {
                  height: "2.75rem",
                  borderRadius: ".5rem",

                  fontFamily: "Inter"
                }
              }}
            />
            {/* TODO - Helpertext dos erros de email vindo da API */}
            {emailErrors()}

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
                  // error={}
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
              required
              id="pasasword"
              type='password'
              placeholder='Digite a nova senha'
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // error={}
              InputProps={{
                style: {
                  height: "2.75rem",
                  borderRadius: ".5rem",
                  marginBottom: "1.25rem",

                  fontFamily: "Inter"
                }
              }}
            // endAdornment={
            //   <InputAdornment position="end">
            //     <IconButton
            //       aria-label="toggle password visibility"
            //       onClick={handleClickShowPassword}
            //       onMouseDown={handleMouseDownPassword}
            //       edge="end"
            //     >
            //       {showPassword ? <VisibilityOff /> : <Visibility />}
            //     </IconButton>
            //   </InputAdornment>
            // }
            />
            <InputLabel
              htmlFor="confirmPasasword"
              required
              sx={theme.inputModalLabelStyle}
            >
              Confirmar Senha
            </InputLabel>
            <TextField
              required
              id="confirmPasasword"
              type='password'
              placeholder='Confirme a nova senha'
              fullWidth
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              // error={}
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
    </Stack>
  );
}

export default EditUserModal;