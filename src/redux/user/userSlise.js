import { registerThunk, loginThunk } from './thunk';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://projectteam7-backend.onrender.com/auth',
});
const { createSlice } = require('@reduxjs/toolkit');

export const setToken = token => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  return (instance.defaults.headers.authorization = '');
};

const initialStateUser = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialStateUser,
  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;

        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;

        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      });
  },
});
export const logout = async () => {
  const { data } = await instance.get('/signout');
  setToken();
  return data;
};

export const getCurrent = async token => {
  try {
    setToken(token);
    const { data } = await instance.get('/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const update = async formData => {
  const { data: result } = await instance.post('/update', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return result;
};
export const userReducer = userSlice.reducer;
