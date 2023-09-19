import { Box, Paper, Typography } from "@mui/material";
import sucessImg from "../../../../assets/success.svg"

function Sucess() {
  return (
    <>
      <Paper
        sx={{
          position: "relative",
          width: "37.5rem",
          padding: "2.5rem 3.5rem",
          borderRadius: "1.87rem"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.5rem",

            height: "32rem"
          }}
        >
          <img src={sucessImg} alt="editado com sucesso" />
          <Typography
            sx={{
              width: "45.25rem",

              fontFamily: "Montserrat",
              fontWeight: "600",
              fontSize: "1.5rem",
              textAlign: "center"
            }}
          >
            Cadastro Alterado com sucesso!
          </Typography>
        </Box>
      </Paper>
    </>
  );
}

export default Sucess;