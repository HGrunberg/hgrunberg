import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import 'material-icons/iconfont/material-icons.css';
import { ThemeProvider, createTheme } from "@mui/material";

import './translation/i18next'

import App from './App.jsx'
import './index.css'
import ScrollToTop from './helperFunctions/ScrollToTop';

const theme = createTheme({
  components: {
    MuiInputLabel: {
      defaultProps: {
        sx: {
          fontSize: "1.5rem",
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        sx: {
          fontSize: "1.75rem",
        }
      }
    }
  },
  typography: {
    allVariants: {
      color: "#F2F2F2"
    },
  },
  palette: {
    primary: {
      main: '#d3bb7b',
      light: '#F2F2F2',
      dark: '#011a11',
      lighterDark: '#153A36',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#d3bb7b',
      dark: '#F2F2F2',
      light: '#011a11',
      lighterDark: '#153A36',
      // dark: will be calculated from palette.secondary.main,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
