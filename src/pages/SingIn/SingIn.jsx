import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import backgroundLogin from '../../assets/background-login.png';
import LoginForm from '../../components/Form/LoginForm/index';

function SingIn() {
  return (
    <Grid container sx={{ Width: "1440px", height: "894px" }}>
      <Grid
        item
        xs={4}
        sx={{
          backgroundImage: `url('${backgroundLogin}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Typography
          color="SCDarkGreen"
          sx={{
            position: "absolute",
            width: "24.2rem",
            margin: "10.18rem 3rem 0 3rem",

            fontFamily: 'Montserrat',
            fontSize: '1.5rem',
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          Gerencie todos os pagamentos da sua empresa em um só lugar.
        </Typography>
      </Grid>

      <Grid
        item
        xs={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",

          maxWidth: "21.5rem",
        }}
      >
        <LoginForm />
      </Grid>
    </Grid >
  );
}

export default SingIn;