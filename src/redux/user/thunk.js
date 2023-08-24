import { register, logInApi, logOutApi, refreshApi } from '../../api/userApi';
const { createAsyncThunk } = require('@reduxjs/toolkit');

export const registerThunk = createAsyncThunk('user/register', user => {
  return register(user);
});

export const loginThunk = createAsyncThunk('user/login', user => {
  return logInApi(user);
});

export const logOutThunk = createAsyncThunk('user/logOut', () => {
  return logOutApi();
});

export const refreshThunk = createAsyncThunk('user/refresh', () => {
  return refreshApi();
});
