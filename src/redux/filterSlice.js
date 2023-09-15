import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    createFilter: (state, action) => {
      state = action.payload;
    },
  },
});

export const { createFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
