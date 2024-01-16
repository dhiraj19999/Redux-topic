import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const status = {
  Idle: "idel",
  error: "error",
  Loading: "Loading",
};

const intialStat = {
  data: [],
  status: status.Idle,
};

const productSlice = createSlice({
  name: "cart",
  initialState: intialStat,
  reducers: {
    /* getData(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },*/
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, actions) => {
        state.status = status.Loading;
      })

      .addCase(fetchProducts.fulfilled, (state, actions) => {
        state.status = status.Idle;
        state.data = actions.payload;
      })
      .addCase(fetchProducts.rejected, (state, actions) => {
        state.status = status.error;
      });
  },
});

export const { getData } = productSlice.actions;
export default productSlice.reducer;

//thunks

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return data;
});
