import { createSlice } from '@reduxjs/toolkit';
import { fetchPopularForAddPage } from './thunks';

const initialStateRecipes = {
  recipes: [],
  isLoading: false,
  error: null,
};

const popularSlice = createSlice({
  name: 'popular',
  initialState: initialStateRecipes,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPopularForAddPage.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPopularForAddPage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recipes = action.payload;
        state.error = null;
      })
      .addCase(fetchPopularForAddPage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const popularReducer = popularSlice.reducer;
