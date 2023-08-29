import { createSlice } from '@reduxjs/toolkit';
import { signup, signin, logout, current, update } from './thunk';

const initialState = {
  user: {},
  token: '',
  isLoggedIn: false,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signup.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signup.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(signin.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
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
