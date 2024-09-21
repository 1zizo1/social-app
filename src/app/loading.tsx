'use client'
import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';

const MoonContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
// Dark sky-like background
});

const Moon = styled(CircularProgress)(({ theme }) => ({
  color: '#F5E1A4', // Pale yellow for the moon
  position: 'relative',
  borderRadius: '50%',
  boxShadow: `0 0 10px ${theme.palette.grey[300]}`,
  animation: 'moonPhase 2s infinite ease-in-out',
  '@keyframes moonPhase': {
    '0%': { transform: 'rotate(0deg)' },
    '50%': { transform: 'rotate(180deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
}));

const MoonText = styled(Typography)({
  color: '#F5E1A4', // Pale yellow text
  fontSize: '1.5rem',
  marginTop: '20px',
});

export default function Loading() {
  return (
    <MoonContainer>
      <Moon size={80} thickness={4} />
      <MoonText>Waiting under the moon...</MoonText>
    </MoonContainer>
  );
}
