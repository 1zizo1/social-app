'use client';
import { createTheme } from '@mui/material/styles';

// Define a custom theme for Rehme White
const theme = createTheme({
  palette: {
    primary: {
      main: '#f7f7f7', // Rehme white or light neutral white as the primary color
    },
    secondary: {
      main: '#e0e0e0', // Light gray as a complementary secondary color
    },
    background: {
      default: '#fafafa', // Light background color, close to white for the overall layout
      paper: '#ffffff',   // Paper elements with a white background for clarity
    },
    text: {
      primary: '#000000', // Black for primary text for strong contrast
      secondary: '#555555', // Gray for secondary text
    },
  },
  typography: {
    fontFamily: 'var(--font-roboto)',  // Keep custom font family
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#000', // Darker font for contrast against white background
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#000', // Same contrast rule
    },
    button: {
      textTransform: 'none', // Disable uppercase text transformation on buttons
      color: '#000',         // Button text in black for contrast
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Smooth border radius for buttons
          padding: '10px 20px', // Custom padding for buttons
          color: '#000', // Button text color in black
        },
        containedPrimary: {
          backgroundColor: '#f7f7f7', // Rehme white primary button color
          color: '#000', // Text in black for contrast
          '&:hover': {
            backgroundColor: '#e0e0e0', // Slightly darker shade for hover state
          },
        },
        outlinedPrimary: {
          borderColor: '#e0e0e0', // Outline for buttons
          color: '#000', // Black text for contrast
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          backgroundColor: '#f7f7f7', // Rehme white background for input fields
          color: '#000', // Black text color for form readability
          '& .MuiInputBase-root': {
            color: '#000', // Input text in black
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#e0e0e0', // Border in light gray
          },
        },
      },
    },
  },
});

export default theme;
