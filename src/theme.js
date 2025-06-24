'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3949ab',
      dark: '#273377',
      light: '#606dbb'
    },
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