import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const login = createAsyncThunk('auth/login', async function(values) {
 return await axios
    .post(`https://linked-posts.routemisr.com/users/signin`, values)
    .then((response) => response)
    .catch((error) => error);
});
const initialState: { userToken: null | string; userData: null } = {
  userToken: null,
  userData: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: function (state, action) {
      state.userToken = null;
    },
   
  },
  extraReducers:function(bulider){
    bulider.addCase(login.fulfilled,function(state,action){
        console.log(action.payload)
        state.userToken=action.payload.data.token
        

    })
  }
});
export default authSlice.reducer;
