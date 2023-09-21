import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	palette: {
		SCBackground: "#F0F0F5",
		SCInputBackground: "#F0F0F5",
		SCBackgroundWhite: "#FFFFFF",

		SCLightGreen: "#1FA7AF",
		SCNormalGreen: "#0E8750",
		SCDarkGreen: "#034A2A",

		SCPink: "#DA0175",

		SCGray3: "#747488",
		SCGray6: "#DEDEE9",
		SCGray7: "#F0F0F5",
		SCGray8: "#F8F8F9",
		SCGray2: "#3F3F55",
		SCGray5: "#6E6E85",

		SCLightRed: "#FFEFEF",
		SCDarkRed: "#971D1D",

		SCLightYellow: "#FCF6DC",
		SCDarkYellow: "#C5A605",

		SCDarkBlue: "#243F80",
		SCLightBlue: "#C3D4FE",

		SCNormalError: "#E70000",
		SCErrorMui: "#D32F2F",

		SCLightCyan: "#EEF6F6",
	},
	typography: {
		fontFamily: ["Montserrat", "sans-serif", "Nunito", "Inter"].join(","),
	},
	errorMessageStyle: {
		fontFamily: "Inter",
		fontSize: ".875rem",
		color: "SCNormalError",
	},
	inputModalLabelStyle: {
		fontFamily: "Nunito",
		fontWeight: "bold",
		fontSize: ".875rem",
	},
	MUIerrorMessageStyle: {
		fontFamily: "Nunito",
		fontSize: ".82rem",

		margin: ".25rem 0 0 .7rem",

		color: "SCErrorMui",
	},
	clientLabelStyle: {
		marginBottom: ".5rem",
		fontFamily: "Montserrat",
		fontSize: "1rem",
		fontWeight: "700",
	},
	clientValueStyle: {
		fontFamily: "Nunito",
		fontSize: "1rem",
	},
	infoBillingsTable: {
		color: "SCGray5",
		fontFamily: "Nunito",
		fontSize: "0.8rem",
		fontStyle: "normal",
		fontWeight: "400",
		lineHeight: "2.5rem",
	},
	statusBillings: {
		display: "flex",
		textAlign: "center",
		borderRadius: "0.5rem",
		fontFamily: "Nunito",
		fontSize: "0.8rem",
		fontStyle: "normal",
		fontWeight: "600",
		lineHeight: "normal",
	},
	billingsYellow: {
		backgroundColor: "SCLightYellow",
		color: "SCDarkYellow",
	},
	billingsRed: {
		backgroundColor: "SCLightRed",
		color: "SCDarkRed",
	},
	billingsCyan: {
		backgroundColor: "SCLightCyan",
		color: "SCLightGreen",
	},
});
