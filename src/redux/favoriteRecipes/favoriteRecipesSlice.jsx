import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchFavoriteRecipes,
  deleteFavoriteRecipes,
} from '../../api/favoriteApi';

const handlePending = state => {
  state.favoriteRecipes = { ...state.favoriteRecipes, isLoading: true };
};

const handleFulfild = state => {
  state.favoriteRecipes = {
    ...state.favoriteRecipes,
    isLoading: false,
    error: null,
  };
};
const handleFulfildGet = (state, { payload }) => {
  state.favoriteRecipes = {
    ...state.favoriteRecipes,
    items: payload.recipes,
    total: payload.totalHits,
  };
};

const handleFulfildDelete = (state, { payload }) => {
  state.favoriteRecipes = {
    ...state.favoriteRecipes,
    items: state.favoriteRecipes.items.filter(el => el._id !== payload.id),
  };
};

const handleRejected = (state, { payload }) => {
  state.favoriteRecipes = {
    ...state.favoriteRecipes,
    total: 0,
    isLoading: false,
    error: payload,
  };
};
const initialState = {
  favoriteRecipes: {
    items: [],
    total: 0,
    isLoading: false,
    error: null,
  },
};

export const favoriteRecipesSlice = createSlice({
  name: 'favoriteRecipes',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchFavoriteRecipes.fulfilled, handleFulfildGet)
      .addCase(deleteFavoriteRecipes.fulfilled, handleFulfildDelete)
      .addMatcher(
        isAnyOf(fetchFavoriteRecipes.pending, deleteFavoriteRecipes.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(fetchFavoriteRecipes.rejected, deleteFavoriteRecipes.rejected),
        handleRejected
      )
      .addMatcher(
        isAnyOf(
          fetchFavoriteRecipes.fulfilled,
          deleteFavoriteRecipes.fulfilled
        ),
        handleFulfild
      );
  },
});

export const favoriteRecipesReducer = favoriteRecipesSlice.reducer;
