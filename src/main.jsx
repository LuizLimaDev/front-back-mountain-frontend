import { ThemeProvider } from '@emotion/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import MainRoutes from './routes/routes'
import { theme } from "./styles/muiTheme.jsx"
import { SingProvider } from './context/SingContext'
import { CssBaseline } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <SingProvider >
          <CssBaseline />
          <MainRoutes />
        </SingProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
