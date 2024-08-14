// src/redux/isOpenSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const isOpenSlice = createSlice({
  name: 'isOpen',
  initialState,
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    toggleIsOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setIsOpen, toggleIsOpen } = isOpenSlice.actions;
export default isOpenSlice.reducer;
