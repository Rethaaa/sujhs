import { createTheme, ThemeProvider } from '@mui/material';

export default function Theme(props) {
    const themeOptions = createTheme({
      palette: {
        primary: {
          main: '#002A45',
          dark: '#011B2F',
          light: '#003F66',
        },
        secondary: {
          main: '#FFB915',
          light: '#FFD358'
        },
        yellow:{
          main:'#FFD358',
        },
      },
      typography: {
        fontFamily: 'DM Sans',
      },
    });
    return (
        <ThemeProvider theme={themeOptions}>
            {props.children}
        </ThemeProvider>
    )
}