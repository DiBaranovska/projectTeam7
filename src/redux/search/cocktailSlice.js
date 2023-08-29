import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  results: [],
  ingredientsList: [],
  categoriesList: [],
  glassesList: [],
};

const cocktailSlice = createSlice({
  name: 'cocktail',
  initialState,
  reducers: {
    setResults: (state, action) => {
      state.results = action.payload;
    },
    setIngredientsList: (state, action) => {
      state.ingredientsList = action.payload;
    },
    setCategoriesList: (state, action) => {
      state.categoriesList = action.payload;
    },
    setGlassesList: (state, action) => {
      // Add this reducer
      state.glassesList = action.payload;
    },
  },
});

export const {
  setResults,
  setIngredientsList,
  setCategoriesList,
  setGlassesList,
} = cocktailSlice.actions;

export default cocktailSlice.reducer;
