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
  extraReducers: {
    [fetchRecipesPopular.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [fetchRecipesPopular.fulfilled](state, action) {
      state.isLoading = false;
      state.recipes = action.payload; 
      state.error = null;
    },
    [fetchRecipesPopular.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const categoryReducer = categorySlice.reducer;