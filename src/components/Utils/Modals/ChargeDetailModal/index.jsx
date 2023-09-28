import { Box, Modal, Paper, Stack, Typography } from "@mui/material"
import { useState } from "react"
import paperIcon from "../../../../assets/paper-chargedetails.svg"
import closeModal from "../../../../assets/close.svg"
import { useTheme } from "@emotion/react"

function ChargeDetailModal() {
    // TODO - mover os estados para um contexto para usar nas paginas
    // TODO - detalhes do Cliente e Cobranças
    const [chargeDetailModal, setChargeDetailModal] = useState(true)
    const handleOpenChargeDetailModal = () => setChargeDetailModal(true);
    const handleCloseChargeDetailModal = () => setChargeDetailModal(false);
    const theme = useTheme()

    return (
        <Stack>
            <Modal
                open={chargeDetailModal}
                onClose={handleCloseChargeDetailModal}
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
                    <img
                        src={closeModal}
                        alt="fechar modal"
                        style={{
                            position: "absolute",
                            top: "1.5rem",
                            right: "1.5rem",

                            width: "2rem",

                            cursor: "pointer"
                        }}
                        onClick={() => handleCloseChargeDetailModal()}
                    />

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",

                            marginBottom: "1rem"
                        }}>
                        <img src={paperIcon} alt="imagem de cobrança" />
                        <Typography sx={theme.SCmodalTile}>
                            Detalhe da Cobraça
                        </Typography>
                    </Box>

                    <Box>
                        <Box mb={"1.5rem"}>
                            <Typography sx={theme.inputModalLabelStyle}>
                                Nome
                            </Typography>
                            <Typography
                                sx={{ fontFamily: "Nunito", fontSize: "1rem", fontWeight: "400" }}
                            >
                                Sara Lage Silva
                            </Typography>
                        </Box>

                        <Box mb={"1.5rem"}>
                            <Typography sx={theme.inputModalLabelStyle}>
                                Descrição
                            </Typography>
                            <Typography
                                sx={{ fontFamily: "Nunito", fontSize: "1rem", fontWeight: "400" }}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto, nesciunt quaerat voluptatibus eaque cupiditate.
                            </Typography>
                        </Box>

                        <Box mb={"1.5rem"} sx={{ display: "flex" }}>
                            <Box sx={{ width: "15rem" }}>
                                <Typography sx={theme.inputModalLabelStyle}>
                                    Vencimento
                                </Typography>
                                <Typography
                                    sx={{ fontFamily: "Nunito", fontSize: "1.25rem", fontWeight: "400" }}
                                >
                                    01/01/2022
                                </Typography>
                            </Box>

                            <Box>
                                <Typography sx={theme.inputModalLabelStyle}>
                                    Valor
                                </Typography>
                                <Typography
                                    sx={{ fontFamily: "Nunito", fontSize: "1.25rem", fontWeight: "400" }}

                                >
                                    R$ 300,00
                                </Typography>
                            </Box>
                        </Box>


                        <Box sx={{ display: "flex" }}>
                            <Box sx={{ width: "15rem" }}>
                                <Typography sx={theme.inputModalLabelStyle}>
                                    ID cobranças
                                </Typography>
                                <Typography
                                    sx={{ fontFamily: "Nunito", fontSize: "1rem", fontWeight: "400" }}
                                >
                                    248563147
                                </Typography>
                            </Box>

                            <Box>
                                <Typography sx={theme.inputModalLabelStyle}>
                                    Status
                                </Typography>
                                {/* TODO - const de conditional renderin class para cores */}
                                <Typography>
                                    Vencida
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Modal>
        </Stack >
    )
}

export default ChargeDetailModal