import { Box, Typography } from "@mui/material";
import ErrorPerson from "../../../assets/errorPerson.svg";
import ErrorSearch from "../../../assets/errorSearch.svg";
import ErrorX from "../../../assets/errorX.svg";

export default function ErrorSearchPage(){
    return (
        <Box
            sx={{
                width: "100%",
                height: "32.1875rem",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end",
                backgroundColor: "#FFF"
            }}
        >
            <img
                src={ ErrorPerson }
                alt="Error Icon"
                style={{
                    position: "absolute",
                    top: "3.5rem",
                    left: "40.25rem"
                }}
            />
            <img
                src={ ErrorSearch }
                alt="Error Icon"
                style={{
                    position: "absolute",
                    top: "9.63rem",
                    left: "28.51rem",
                    zIndex: 0
                }}
            />
            <img
                src={ ErrorX }
                alt="Error Icon"
                style={{
                    position: "absolute",
                    top: "14.5rem",
                    left: "35rem",
                    zIndex: 1
                }}
            />

            <Typography
                sx={{
                    fontFamily: "Montserrat",
                    fontSize: "1.75rem",
                    fontWeight: "600",
                    color: "#F08889",
                    marginBottom: "1rem"
                }}
            >
                Nenhum resultado foi encontrado!
            </Typography>
            <Typography
                sx={{
                    fontFamily: "Montserrat",
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    mb: "3.97rem",
                    color: "#9B9BB2",
                }}
            >
                Verifique se a escrita está correta
            </Typography>
        </Box>
    )
}