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
import { useContext } from 'react';
import imgCloseModal from "../../../../assets/close.svg";
import { ModalsContext } from '../../../../context/ModalsContext';
import useEmailValidation from '../../../../hooks/useEmailValidation';
import useGetUserDataInfo from '../../../../hooks/useGetUserDataInfo';
import SCButton from '../../../Inputs/SCButton/indxe';

function EditUserModal() {
  const {
    openModalEditUser,
    handleCloseEditUser,
    name, setName,
    email, setEmail,
    cpf, setCpf,
    phone, setPhone,
    password, setPassword,
    confirmPassword, setConfirmPassword,
    showPassword,
    passowrdCombination
  } = useContext(ModalsContext)
  const { handleBlur, existingEmailError } = useEmailValidation()
  const {
    handleClickShowPassword,
    handleMouseDownPassword,
    apiErrors,
    clearForm,
    handleSubmit,
  } = useGetUserDataInfo()
  const theme = useTheme()

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
            <Typography sx={theme.SCmodalTile}
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