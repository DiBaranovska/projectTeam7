import { combineReducers } from 'redux';
import { recipeReducer } from './resipes/resipesSlice';
import { myRecipesReducer } from './myRecipes/myRecipesSlice';
import { favoriteRecipesReducer } from './favoriteRecipes/favoriteRecipesSlice';
import { userReducer } from './user/userSlise';
import { categoryReducer } from './resipes/categorySlice';
import cocktailReducer from './search/cocktailSlice';
import filterReducer from './search/filterSlice';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { popularReducer } from './addRecipes/popularSlice';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};
const favoriteRecipesPersistConfig = {
  key: 'favoriteRecipes',
  storage,
  whitelist: ['favoriteRecipes'],
};

const persistedReducer = persistReducer(persistConfig, userReducer);
const favoritePersistedReduser = persistReducer(
  favoriteRecipesPersistConfig,
  favoriteRecipesReducer
);

export const reducer = combineReducers({
  user: persistedReducer,
  category: categoryReducer,
  recipe: recipeReducer,
  myRecipes: myRecipesReducer,
  favoriteRecipes: favoritePersistedReduser,
  cocktail: cocktailReducer,
  filter: filterReducer,
  popular: popularReducer,
  
});
