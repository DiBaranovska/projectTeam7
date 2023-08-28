import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchMyRecipes, deleteMyRecipes } from '../../api/ownRecipeApi';

const handlePending = state => {
  state.myRecipes = { ...state.myRecipes, isLoading: true };
};

const handleFulfild = state => {
  state.myRecipes = {
    ...state.myRecipes,
    isLoading: false,
    error: null,
  };
};
const handleFulfildGet = (state, { payload }) => {
  state.myRecipes = {
    ...state.myRecipes,
    items: payload.recipes,
    total: payload.totalHits,
  };
};

const handleFulfildDelete = (state, { payload }) => {
  state.myRecipes = {
    ...state.myRecipes,
    items: state.myRecipes.items.filter(el => el.id !== payload.recipes.id),
  };
};

const handleRejected = (state, { payload }) => {
  state.myRecipes = {
    ...state.myRecipes,
    total: 0,
    isLoading: false,
    error: payload,
  };
};
const initialState = {
  myRecipes: {
    items: [],
    total: 0,
    isLoading: false,
    error: null,
  },
};

export const myRecipesSlice = createSlice({
  name: 'myRecipes',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchMyRecipes.fulfilled, handleFulfildGet)
      .addCase(deleteMyRecipes.fulfilled, handleFulfildDelete)
      .addMatcher(
        isAnyOf(fetchMyRecipes.pending, deleteMyRecipes.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(fetchMyRecipes.rejected, deleteMyRecipes.rejected),
        handleRejected
      )
      .addMatcher(
        isAnyOf(fetchMyRecipes.fulfilled, deleteMyRecipes.fulfilled),
        handleFulfild
      );
  },
});

export const myRecipesReducer = myRecipesSlice.reducer;
