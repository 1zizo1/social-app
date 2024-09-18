import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, Paper, TextField, Typography } from '@mui/material';
export default function Login() {
  return (
    <>
      <Container sx={{ p: 5 }} color='primary' maxWidth="sm">
        <Typography sx={{ p: 2 }} component='h3' variant="h4" color="primary">
          Login
        </Typography>
        <Box sx={{ p: 2 }}>
          <Paper elevation={20} sx={{ mt: 5, P: 5 }}>

            <form action="">
              <Box sx={{ p: 2 }}>
                <TextField
                  required
                  id="email"
                  label="Email Address"
                  name="email"
                  sx={{ my: 2, width: '100%' }}
                  autoComplete="email"
                />
              </Box>
              <Box sx={{ p: 2 }}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  sx={{ my: 2, width: '100%' }}

                  autoComplete="new-password"
                />
              </Box>

              <Box sx={{ p: 2 }}>
                <Button sx={{ width: '100%', my: 1 }} type='submit' variant='contained'>
                  Login
                </Button>
              </Box>
            </form>
          </Paper>

        </Box>
      </Container>
    </>
  )
}
