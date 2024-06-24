import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  isLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item._id === action.payload._id,
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item._id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item._id === action.payload);
      if (item && item.quantity > 0) {
        item.quantity--;
      }
      // Delete item
      if (item.quantity === 0) {
        state.cart = state.cart.filter((item) => item._id !== action.payload);
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
    cartLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  addToCart,
  clearCart,
  cartLoading,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
