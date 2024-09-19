'use client'
import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, Paper, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '@/lib/authSlice';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import {storeDispacth} from'@/lib/store'
export default function Login() {
const dispatch =useDispatch<storeDispacth>()
const router =useRouter()
const formik =useFormik({
    initialValues:{
      email:'',
      password:''
    },
    onSubmit:function(val:{email:string,password:string}){
      dispatch(login(val))
      .then((resp:any)=>{
        resp
        console.log(resp.payload.data.token)
        if(resp.payload.data.message=='success'){
          toast.success('login successfully')
          localStorage.setItem('loggedToken',resp.payload.data.token)
          router.push('/')
        }else{
          toast.error('invaild mail or password')
        }
      }).catch((err)=>{
        console.log(err);
        
      })
    }
  })
  return (
    <>
      <Container sx={{ p: 5 }} color='primary' maxWidth="sm">
        <Typography sx={{ p: 2 }} component='h3' variant="h4" color="primary">
          Login
        </Typography>
        <Box sx={{ p: 2 }}>
          <Paper elevation={20} sx={{ mt: 5, P: 5 }}>

            <form onSubmit={formik.handleSubmit}>
              <Box sx={{ p: 2 }}>
                <TextField
                  required
                  id="email"
                  label="Email Address"
                  name="email"
                  sx={{ my: 2, width: '100%' }}
                  autoComplete="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}

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
                  onChange={formik.handleChange}
                  autoComplete="new-password"
                  value={formik.values.password}
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
