import { createSlice } from "@reduxjs/toolkit";

const intialStat = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: intialStat,
  reducers: {
    add(state, action) {
      state.push(action.payload); // here we directly mutate state redux said that we shoud not mutate state
      /// insted  we have to return new state but here in redux toolkit we mutate state
      // createslice internally return new state
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});
// cart slice hamare liye reducers and actions bhi create krte hai

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
