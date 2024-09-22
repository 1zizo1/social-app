'use client';
import { createTheme } from '@mui/material/styles';

// Define a custom theme for Dark Mode
const theme = createTheme({
  palette: {
    mode: 'dark', // Set the mode to dark
    primary: {
      main: '#bb86fc', // A light purple for primary color
    },
    secondary: {
      main: '#03dac6', // A teal for secondary color
    },
    background: {
      default: '#121212', // Dark background color
      paper: '#1e1e1e',   // Darker paper elements for contrast
    },
    text: {
      primary: '#ffffff', // White for primary text for strong contrast
      secondary: '#b0b0b0', // Light gray for secondary text
    },
  },
  typography: {
    fontFamily: 'var(--font-roboto)', // Keep custom font family
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#ffffff', // White for headers in dark mode
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#ffffff', // Same for secondary headers
    },
    button: {
      textTransform: 'none', // Disable uppercase text transformation on buttons
      color: '#ffffff', // Button text in white for contrast
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Smooth border radius for buttons
          padding: '10px 20px', // Custom padding for buttons
          color: '#ffffff', // Button text color in white
        },
        containedPrimary: {
          backgroundColor: '#bb86fc', // Light purple for primary button
          color: '#ffffff', // Text in white for contrast
          '&:hover': {
            backgroundColor: '#9b68e4', // Slightly darker shade for hover state
          },
        },
        outlinedPrimary: {
          borderColor: '#03dac6', // Outline for buttons
          color: '#ffffff', // White text for contrast
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          backgroundColor: '#1e1e1e', // Dark background for input fields
          color: '#ffffff', // White text color for form readability
          '& .MuiInputBase-root': {
            color: '#ffffff', // Input text in white
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#03dac6', // Border in teal
          },
        },
      },
    },
  },
});

export default theme;
