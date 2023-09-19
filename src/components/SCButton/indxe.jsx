import { Button } from "@mui/material";

// eslint-disable-next-line react/prop-types
function SCButton({ children }) {
  return (
    <Button
      variant="contained"
      type="submit"
      sx={{
        alignSelf: "center",

        width: "10rem",
        height: "2.06rem",
        padding: "1.25rem",
        marginTop: "2.5rem",
        borderRadius: ".625rem",

        fontFamily: "Nunito",
        fontSize: "1.25rem",
        textTransform: "capitalize",

        backgroundColor: "SCPink",

        '&:hover': {
          backgroundColor: "SCPink",
          opacity: ".7"
        }
      }}
    >
      {children}
    </Button>
  );
}

export default SCButton;