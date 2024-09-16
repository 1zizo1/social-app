'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../interfaces/state'
import { useEffect } from 'react';
import { getAllposts } from '@/lib/postslice';

export default function Allposts() {
    const dispatsh =useDispatch<any>()
const { allPosts, userPost, isLoading, isError } = useSelector((state: State) => state.posts)
useEffect(() => {
dispatsh(getAllposts())
}, [])

  return (
    <> 
      {isLoading?<h1 className='text-center p-10'> Loading...</h1>:
      allPosts?.map((post:any)=>  <h4 key={post._id}> {post.body}
      </h4>) 
      }
    </>
  )
}
