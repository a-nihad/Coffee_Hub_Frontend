import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: "",
  isLoading: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    productLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setProducts, productLoading } = productSlice.actions;
export default productSlice.reducer;
