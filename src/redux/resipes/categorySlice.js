import { createSlice } from '@reduxjs/toolkit';
import { fetchRecipesPopular } from './thunks'; 

const initialStateRecipes = {
  recipes: [],
  isLoading: false,
  error: null,
};

const categorySlice = createSlice({
  name: 'category',
  initialState: initialStateRecipes,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchRecipesPopular.pending, state => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(fetchRecipesPopular.fulfilled,(state, action) => {
      state.isLoading = false;
      state.recipes = action.payload; 
      state.error = null;
    })
    .addCase(fetchRecipesPopular.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const categoryReducer = categorySlice.reducer;