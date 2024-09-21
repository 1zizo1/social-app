const headers = {token:localStorage.getItem('loggedToken')}
export let getPostDetails = createAsyncThunk("postsSlice/getPostDetails", async (postID) => {
    let response = await fetch(
      `https://linked-posts.routemisr.com/posts/${postID}`,
      {
        method: "GET", 
        headers: headers,
      }
    );
    const data = await response.json();
    return data;
  });
  