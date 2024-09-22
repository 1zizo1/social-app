'use client'
import Typography from '@mui/material/Typography'
import Profile from './(Pages)/Profile/page';
import {useSelector } from 'react-redux';
import { State } from '../interfaces/state'
import Allposts from './_Components/Allposts/Allposts';
import CreatePost from './_Components/createPost/page';
export default function Home() {
  const { counter } = useSelector((state: State) => state.counter)

  return (
    <>
    <CreatePost/>
  <Allposts/>
      <Profile />
       
      <Typography variant="h3]" color="initial" component={'h1'}> Lorem ipsum dolor sit amet.</Typography>
      <h3 className='mx-auto text-3xl text-white'> Counter:{counter} </h3>

    </>
  );
}
