/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import CardPost from '@/app/_Components/Post/page';
import { State } from '@/interfaces/state';
import { getPostDetails } from '@/lib/postslice'
import { Container } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function postDetails({ params }) {
    const { postDetails } = useSelector((state: State) => state.posts)
    console.log( typeof(postDetails));
    
    const dispatch = useDispatch<storeDispatch>()
    useEffect(() => {
        dispatch(getPostDetails(params.postID)).then((res) => {
            console.log(res);
        }
        )
    }, [])
    return (
        <>
            <Container >
                <CardPost postsData={postDetails} />
            </Container>
        </>
    )
}
