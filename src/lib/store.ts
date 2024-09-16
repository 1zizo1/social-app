import { userNameReducer } from './userNameslice';
import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterslice";
import { postsReducer } from './postslice';
// waiting for reducer 
export const store =configureStore({
    reducer:{
       counter:counterReducer,
       userName:userNameReducer,
       posts:postsReducer
    }
})