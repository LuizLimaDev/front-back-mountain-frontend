import { Snackbar } from "@mui/material";
import OkSnack from "../../assets/okSnack.svg";
import ExitSnack from "../../assets/exitSnack.svg";

export default function SnackBar({ phrase, openSnack, setOpenSnack }){
    return(
        <Snackbar
            open={ openSnack }
            onClose={ () => {return setOpenSnack(!openSnack)} }
            onClick={ () => {return setOpenSnack(!openSnack)} }
            autoHideDuration={2000}
            children={
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingLeft: "1.5rem",
                        paddingRight: "1rem"
                    }}
                >
                    <img
                        src={ OkSnack }
                        alt="Ok symbol"
                    />
                    <p
                        style={{
                            fontFamily: "Nunito",
                            fontSize: "0.875rem",
                            fontWeight: "400",
                            color: "SCDarkBlue",
                            width: "100%",
                            textAlign: "center"
                        }}
                    >{ phrase }</p>
                    <img
                        src={ ExitSnack }
                        alt="Exit's Snack"
                    />
                </div>
        }
            sx={{
                backgroundColor: "SCLightBlue",
                minWidth: "20.625rem",
                height: "3.375rem",
                borderRadius: "0.625rem",
            }}
            anchorOrigin={{vertical: "bottom", horizontal: "right"}}
        />
    )
}