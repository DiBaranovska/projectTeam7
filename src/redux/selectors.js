export const userSelector = state => state.user;

export const selectIsLoggedIn = state => state.user.isLoggedIn;

export const selectIsRefreshing = state => state.user.isRefreshing;

export const selectedRecipes = state => state.recipes;
