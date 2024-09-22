'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../interfaces/state'
import { useEffect } from 'react';
import { getAllposts } from '@/lib/postslice';
import Container from '@mui/material/Container'
import CardPost from '../Post/page';
export default function Allposts() {
    const dispatsh =useDispatch<any>()
const { allPosts, userPost, isLoading, isError } = useSelector((state: State) => state.posts)
useEffect(() => {
dispatsh(getAllposts())
}, [])

  return (
    <> 
    
      <Container maxWidth="sm">
        <CardPost postsData={allPosts} />
      </Container>
      

    </>
  )
}
