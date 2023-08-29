import { combineReducers } from 'redux';
import { recipeReducer } from './resipes/resipesSlice';
import { userReducer } from './user/userSlise';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const reducer = combineReducers({
  recipe: recipeReducer,
  user: persistedReducer,
});
