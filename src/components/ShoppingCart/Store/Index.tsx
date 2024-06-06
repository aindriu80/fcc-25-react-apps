import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Slices/CardSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
