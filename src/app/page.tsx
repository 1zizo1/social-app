'use client'
import Typography from '@mui/material/Typography'
import Profile from './_Components/Profile/page';
import {useSelector } from 'react-redux';
import { State } from '../interfaces/state'
import Allposts from './_Components/Allposts/Allposts';
export default function Home() {
  const { counter } = useSelector((state: State) => state.counter)

  return (
    <>
  <Allposts/>
      <Profile />
       
      <Typography variant="h3]" color="initial" component={'h1'}> Lorem ipsum dolor sit amet.</Typography>
      <h3 className='mx-auto text-3xl text-white'> Counter:{counter} </h3>

    </>
  );
}
