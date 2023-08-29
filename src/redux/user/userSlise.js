import { registerThunk, loginThunk, logout, current, update } from './thunk';
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
      .addCase(registerThunk.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;

        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;

        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, state => {
        state.loading = false;
        state.user = {};
        state.token = '';
        state.isLoggedIn = false;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(current.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(current.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(current.rejected, (state, { payload }) => {
        state.loading = false;
        state.token = '';
        state.error = payload;
      })
      .addCase(update.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(update.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
      })
      .addCase(update.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const userReducer = userSlice.reducer;
