import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducer';

const foodStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default foodStore;