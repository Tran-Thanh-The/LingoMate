import { createTheme, ThemeOptions } from '@mui/material/styles';

const customTheme: ThemeOptions = createTheme({
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    fontSize: 16,
  },

  palette: {
    mode: 'light',
    primary: {
      main: '#0071f9',
      light: '#e1effe',
      dark: '#00429d',
      contrastText: '#fff',
    },
    secondary: {
      main: '#00429d',
      light: '#e1effe',
      dark: '#0071f9', 
      contrastText: '#fff',
    },
    info: {
      main: '#e1effe',
      contrastText: '#00429d',
      dark: '#e1effe',
    }
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: '"Inter", "Helvetica", "Arial", sans-serif', 
          textTransform: 'none',
          borderWidth: '0.5px',
          '&:hover': { borderWidth: '0.5px' },
        },
        sizeSmall: {
          padding: '0.75rem 1.25rem',
          fontSize: '0.875rem',
          fontWeight: 600,
          borderRadius: '0.75rem',
        },
        sizeLarge: {
          fontSize:'1rem',
          fontWeight: 700,
          padding: '1rem 2rem',
          borderRadius: '2rem',
        },
        sizeMedium: {
          padding: '1rem',
          fontSize: '1rem',
          fontWeight: 700,
          borderRadius: '0.5rem',
        },
        outlined: {
          borderColor: '#fff',
          borderWidth: '2px',
          color: '#fff',
          backgroundColor:'#0047ff',
          '&:hover': {
            borderWidth: '2px',
            backgroundColor:'#0047ee',
          },
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: '4rem',
          fontWeight: 700,
        },
        h2: {
          fontSize: '3rem',
          fontWeight: 700,
        },
        h3: {
          fontSize: '2.75rem',
          fontWeight: 700,
        },
        h4: {
          fontSize: '2.5rem',
          fontWeight: 700,
        },
        subtitle1: {
          fontSize: '1.75rem',
        },
        subtitle2: {
          fontSize: '1.25rem',
        },
        body1: {
          fontSize: '1.125rem',
        },
        body2: {
          fontSize: '1rem',
        },
        caption: {
          fontSize: '0.875rem',
        },
      },
    },
    
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          '& input': {
            color: '#333',
            '&::placeholder': {
              opacity: 0.7,
            },
          },
          '& fieldset': {
            borderColor: 'rgb(229, 231, 235)',
            borderWidth: '1px',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#007bff !important',
            borderWidth: '1px !important',
            boxShadow: '0 0 5px rgba(0, 123, 255, 0.5)', 
          },
        },
      },
    },

    MuiFilledInput: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          backgroundColor: '#fff',
          '&::before': {
            borderBottom: 'none !important',
          },
          '&::after': {
            borderBottom: 'none !important', 
          },
          '& input': {
            color: '#333',
            transform: 'translateY(-15%)',
            '&::placeholder': {
              opacity: 0.7,
            },
          },
          '&.Mui-focused': {
            backgroundColor: '#fff', 
            borderColor: '#007bff !important',
            borderWidth: '1px !important',
            outline: '4px solid rgb(225, 239, 254)',
            boxShadow: '0 0 10px rgba(0, 123, 255, 0.5)',
            outlineOffset: '1px'
          },
          '&:hover': {
            backgroundColor: '#fff',
          },
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '0.75rem!important',
        },
      },
    },
    
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: '0.75rem!important',
        },
      },
    },
  },
});

export default customTheme;
