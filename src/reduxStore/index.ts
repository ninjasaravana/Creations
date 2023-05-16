import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../screens/foodApp/redux/reducer";
import { counterReducerFn } from "../screens/counter/redux/reducer";

const reduxStore = configureStore({
  reducer: {
    cart: cartReducer,
    counter: counterReducerFn,
  },
});

export default reduxStore;
