import { Box, Modal, Paper, Typography } from "@mui/material";
import sucessImg from "../../../../assets/success.svg"
import { useContext } from "react";
import { ModalsContext } from "../../../../context/ModalsContext";

function ModalEditSucess() {
  const { openModalEditSucess, handleCloseEditSucess } = useContext(ModalsContext)

  setTimeout(() => {
    handleCloseEditSucess()
  }, 2500)

  return (
    <Modal
      open={openModalEditSucess}
      onClose={handleCloseEditSucess}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Paper
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
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
    </Modal>

  )
}

export default ModalEditSucess;