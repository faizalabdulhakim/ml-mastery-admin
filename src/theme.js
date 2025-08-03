'use client';
import { createTheme } from '@mui/material/styles';

const indigo = {
  50: '#e8eaf6',
  100: '#c5cae9',
  200: '#9fa8da',
  300: '#7986cb',
  400: '#5c6bc0',
  500: '#3f51b5',
  600: '#3949ab',
  700: '#303f9f',
  800: '#283593',
  900: '#1a237e',
  main: '#3949ab',
  light: '#606dbb',
  dark: '#273377',
};

const theme = createTheme({
  palette: {
    primary: { ...indigo },
    text: {
      primary: '#424242',
      main: '#424242',
      muted: '#757575'
    }
  },
  typography: {
    fontFamily: 'var(--font-geist)',
  },
});

export default theme;