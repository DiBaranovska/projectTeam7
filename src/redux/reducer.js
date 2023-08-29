import { combineReducers } from 'redux';
import { recipeReducer } from './resipes/resipesSlice';
import { userReducer } from './user/userSlise';
import { categoryReducer } from './resipes/categorySlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const reducer = combineReducers({
  category: categoryReducer,
  recipe: recipeReducer,
  user: persistedReducer,
});
