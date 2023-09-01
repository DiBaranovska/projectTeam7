import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  ingredient: '',
  category: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterCriteria: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    clearFilterCriteria: state => initialState,
  },
});

export const { setFilterCriteria, clearFilterCriteria } = filterSlice.actions;
export default filterSlice.reducer;
