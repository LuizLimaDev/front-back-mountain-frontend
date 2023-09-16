import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    SCBackground: "#F0F0F5",
    SCInputBackground: "#F0F0F5",

    SCLightGreen: "#1FA7AF",
    SCNormalGreen: '#0E8750',
    SCDarkGreen: '#034A2A',

    SCPink: "#DA0175",

    ScGray6: "#DEDEE9",
    SCGray7: "#F0F0F5",

    SCLightRed: "#FFEFEF",
    SCDarkRed: "#971D1D",

    SCLightYellow: "#FCF6DC",
    SCDarkYellow: "#C5A605",

    SCNormalError: "#E70000"
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif',
      'Nunito',
      'Inter'
    ].join(','),
  },
  errorMessageStyle: {
    fontFamily: "Inter",
    fontSize: ".875rem",
    color: "SCNormalError"
  },
})