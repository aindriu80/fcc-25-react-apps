// createslice
// initialize initial state
// slice -> name, mention initial state, actions

import { createSlice } from '@reduxjs/toolkit';

const initialState: unknown = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
  },
});

export default cartSlice.reducer;
