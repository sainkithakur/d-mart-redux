import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Action/Index";
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default store;


