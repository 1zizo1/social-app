/* eslint-disable prefer-const */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const headers = { token: localStorage.getItem("loggedToken") };
export let getAllposts = createAsyncThunk(
  "postsSlice/getAllposts",
  async () => {
    let response = await fetch(
      `https://linked-posts.routemisr.com/posts?limit=50`,
      {
        method: "GET",
        headers: headers,
      }
    );
    let data = await response.json();
    return data;
  }
);
export let getPostDetails = createAsyncThunk(
  "postsSlice/getPostDetails",
  async (postID) => {
    let response = await fetch(
      `https://linked-posts.routemisr.com/posts/${postID}`,
      {
        method: "GET",
        headers,
      }
    );
    const data = await response.json();
    return data;
  }
);

let initialState = {
  allPosts: [],
  userPost: [],
  isLoading: false,
  isError: null,
  postDetails: [],
};
export const postsSlice = createSlice({
  name: "postsSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders.addCase(getAllposts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allPosts = action.payload.posts;
    }),
      builders.addCase(getAllposts.pending, (state, action) => {
        state.isLoading = true;
      }),
      builders.addCase(getAllposts.rejected, (state, action) => {
        state.isError = action.payload;
      });
    builders.addCase(getPostDetails.fulfilled, (state, action) => {
      console.log(action.payload.post);
      state.postDetails = action.payload.post ? [action.payload.post] : [];
    });
  },
});
export const postsReducer = postsSlice.reducer;
// export const {  } = postsSlice.actions;
