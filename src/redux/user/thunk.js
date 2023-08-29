import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthHeader } from '../../api/userApi';
// import { register, logInApi, logOutApi, refreshApi } from '../../api/userApi';

export const registerThunk = createAsyncThunk(
  '/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/auth/signup', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  '/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/auth/signin', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk('user/logOut', () => {
  // return logOutApi();
});

export const refreshThunk = createAsyncThunk('user/refresh', () => {
  // return refreshApi();
});
