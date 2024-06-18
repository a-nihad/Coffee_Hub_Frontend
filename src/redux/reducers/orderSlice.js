import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: "",
  ordersList: "",
  isLoading: false,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    orderLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setViewOrder: (state, action) => {
      state.ordersList = action.payload;
    },
  },
});

export const { setOrders, orderLoading, setViewOrder } = orderSlice.actions;
export default orderSlice.reducer;
