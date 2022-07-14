import { createSlice } from '@reduxjs/toolkit';

// Initial State
const initialState = {
  message: '',
};

// Slice Reducer
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkingStatus: () => ({
      message: 'Under Construction Slice',
    }),
  },
});

export const { checkingStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;