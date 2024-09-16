import { createSlice } from "@reduxjs/toolkit";
let initialState = { counter: 0, isLoading: false, isError: false };
export let counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    increase: (state, action) => {
      state.counter += 1;
    },
    decrease: (state, action) => {
      state.counter -= 1;
    },
    increamentByAmount:(state,action)=>{
        state.counter +=action.payload;
    }
  },
});
export const counterReducer = counterSlice.reducer;
export const { increase,increamentByAmount, decrease } = counterSlice.actions;
