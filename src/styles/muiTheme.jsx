import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	palette: {
		SCBackground: "#F0F0F5",
		SCInputBackground: "#F0F0F5",
		SCBackgroundWhite: "#FFFFFF",
		SCBackgroundGrey: "#EEF6F6",

		SCLightGreen: "#1FA7AF",
		SCNormalGreen: "#0E8750",
		SCDarkGreen: "#034A2A",

		SCPink: "#DA0175",

		SCGray3: "#747488",
		SCGray6: "#DEDEE9",
		SCGray7: "#F0F0F5",
		SCGray8: "#F8F8F9",
		SCGray2: "#3F3F55",

		SCLightRed: "#FFEFEF",
		SCSnackLightRed: "#F2D6D0",
		SCSnackDarkRed: "#AE1100",
		SCDarkRed: "#971D1D",

		SCLightYellow: "#FCF6DC",
		SCDarkYellow: "#C5A605",

		SCDarkBlue: "#243F80",
		SCLightBlue: "#C3D4FE",

		SCNormalError: "#C33E32",
		SCErrorMui: "#C33E32",
	},
	components: {
		MuiFormHelperText: {
			styleOverrides: {
				root: {
					color: "#C33E32",
				},
			},
		},
	},
	typography: {
		fontFamily: [
			"Montserrat",
			"sans-serif",
			"Nunito",
			"Inter",
			"Roboto",
		].join(","),
	},
	SCmodalTile: {
		fontFamily: "Montserrat",
		fontWeight: "600",
		fontSize: "1.5rem",
	},
	inputModalLabelStyle: {
		fontFamily: "Nunito",
		fontWeight: "bold",
		fontSize: ".875rem",
	},
	MUIerrorMessageStyle: {
		fontFamily: "Inter",
		fontSize: ".82rem",
		margin: ".25rem 0 0 .85rem",
		lineHeight: ".5rem",

		color: "SCErrorMui",
	},
	clientLabelStyle: {
		marginBottom: ".5rem",
		fontFamily: "Montserrat",
		fontSize: "0.9rem",
		fontWeight: "700",
	},
	clientValueStyle: {
		fontFamily: "Nunito",
		fontSize: "0.9rem",
		color: "SCGray3",
	},
	layoutOutletHome: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",

		width: "100vw",
		padding: "18vh 0 0 7.5vw",

		backgroundColor: "SCGray8",
	},
	layoutOutletContents: {
		width: "71.25rem",
	},
	infoBillingsTable: {
		color: "SCGray3",
		fontFamily: "Nunito",
		fontSize: "0.9rem",
		fontStyle: "normal",
		fontWeight: "400",
		lineHeight: "2.5rem",
	},
	statusBillings: {
		display: "flex",
		justifyContent: "center",
		width: "4.75rem",
		borderRadius: "0.5rem",

		fontFamily: "Nunito",
		fontSize: "0.9rem",
		fontStyle: "normal",
		fontWeight: "600",
		textAlign: "center",
		lineHeight: "normal",
	},
	// statusBillingsShape: {
	// 	width: "4.75rem",
	// 	borderRadius: ".5rem",
	// 	fontFamily: "Nunito",
	// 	fontWeight: "600",
	// 	textAlign: "center"
	// },
	billingsYellow: {
		backgroundColor: "SCLightYellow",
		color: "SCDarkYellow",
	},
	billingsRed: {
		backgroundColor: "SCLightRed",
		color: "SCDarkRed",
	},
	billingsCyan: {
		backgroundColor: "SCBackgroundGrey",
		color: "SCLightGreen",
	},
	breadCrumbsTypograph: {
		fontFamily: "Inter",
		fontSize: "1rem",
		fontWeight: "400",
		lineHeight: "1.5rem",
		cursor: "pointer",
	},
});
