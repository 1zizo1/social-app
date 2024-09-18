'use client';
import { createTheme } from '@mui/material/styles';

// Define a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF4500', 
    },
    secondary: {
      main: '#FF4500',  // Change secondary color (red by default)
    },
    background: {
      default: '#f5f5f5',  // Change the default background color
    },
  },
  typography: {
    fontFamily: 'var(--font-roboto)',  // Keep custom font family
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',  // Disable uppercase text transformation on buttons
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Change the default button border radius
          padding: '10px 20px', // Custom padding for buttons
        },
        containedPrimary: {
          backgroundColor: '#FF4500', // Change primary button color
          '&:hover': {
            backgroundColor: '#FF6600', // Change hover state for primary button
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          backgroundColor: '#1e293b ', // Custom background for text fields
        },
      },
    },
    
  },
});

export default theme;
