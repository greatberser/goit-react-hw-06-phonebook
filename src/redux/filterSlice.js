import { createSlice } from '@reduxjs/toolkit';

const initialFilters = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilters,
  reducers: {
    updateFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { updateFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;