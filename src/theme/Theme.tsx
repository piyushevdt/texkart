"use client"
import { createTheme } from '@mui/material/styles';
import '@fontsource/abeezee'; 
import '@fontsource/montserrat'; 

declare module '@mui/material/styles' {
  interface Palette {
    backgroundGradient: string;
  }

  interface PaletteOptions {
    backgroundGradient?: string;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: `'ABeeZee', 'Montserrat', sans-serif`, 
    h1: {
      fontFamily: 'ABeeZee, sans-serif',
    },
    h2: {
      fontFamily: 'Montserrat, sans-serif',
    },
    body1: {
      fontFamily: 'ABeeZee, sans-serif',
    },
    body2: {
      fontFamily: 'Montserrat, sans-serif',
    },
  },
  palette: {
    primary: {
      main: '#FC8F2E',
      light: '#F73A37',
      dark: '#05004E',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#132644',
    },
    background: {
      default: '#fff',
      paper: '#05004E',
    },
    text: {
      primary: '#FC8230',
      secondary: '#05004E',
      disabled: '#111111',
    },
    backgroundGradient: 'linear-gradient(90.9deg, #FC8F2E 0%, #F73A37 101.51%)',
  },
});

export default theme;
