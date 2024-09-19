/* eslint-disable prefer-const */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const headers = {token:localStorage.getItem('loggedToken')}
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
