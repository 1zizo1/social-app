import { createSlice } from "@reduxjs/toolkit";
export let userNameSlice = createSlice({
  name: "userNameSlice",
  initialState:{userName:''},
  reducers: {
    changeUserName: () => {
      console.log("z000z");
    }
  }
});
export const userNameReducer = userNameSlice.reducer;
export const { changeUserName } = userNameSlice.actions;
