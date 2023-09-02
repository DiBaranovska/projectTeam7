export const userSelector = state => state.user;

export const selectIsLoggedIn = state => state.user.isLoggedIn;

export const selectIsRefreshing = state => state.user.isRefreshing;

export const selectedRecipes = state => state.category.recipes;

export const selectedIsLoading = state => state.category.isLoading;

export const selectedPopularRecipes = state => state.popular.recipes;
