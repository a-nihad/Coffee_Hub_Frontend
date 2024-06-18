import { combineReducers } from "@reduxjs/toolkit";

import productSlice from "./reducers/productSlice";
import orderSlice from "./reducers/orderSlice";
import userSlice from "./reducers/userSlice";
import cartSlice from "./reducers/cartSlice";

const rootReducer = combineReducers({
  user: userSlice,
  cart: cartSlice,
  order: orderSlice,
  product: productSlice,
});

export default rootReducer;
