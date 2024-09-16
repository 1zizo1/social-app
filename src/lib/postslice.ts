/* eslint-disable prefer-const */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const headers = {token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjZlNzhlZTI0ZTk0MmVjNTdjNGE5MGNiIiwiaWF0IjoxNzI2NDUxNDY1fQ.ArMqgmlVIuzcc4DEbm5-dkW21EeAEWsbcMkstQIAy-Q'}
export let getAllposts = createAsyncThunk("postsSlice/getAllposts", async () => {
  let response = await fetch(
    `https://linked-posts.routemisr.com/posts?limit=50`,
    {
      method: "GET",
      headers: headers,
    }
  );
  let data = await response.json();
  return data;
});
let initialState = {
  allPosts: [],
  userPost: [],
  isLoading: false,
  isError: null,
};
export const postsSlice = createSlice({
  name: "postsSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders.addCase(getAllposts.fulfilled, (state, action) => {
        console.log(action.payload.posts);
state.isLoading=false        
      state.allPosts = action.payload.posts
    }),
    builders.addCase(getAllposts.pending, (state, action) => {
        state.isLoading=true
    }),
    builders.addCase(getAllposts.rejected, (state, action) => {
        state.isError=action.payload
    });
  },
});
export const postsReducer = postsSlice.reducer;
// export const {  } = postsSlice.actions;
