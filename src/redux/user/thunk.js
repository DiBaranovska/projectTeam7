import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api/userApi';
// import { setToken} from '../../api/userApi';
// import { register, logInApi, logOutApi, refreshApi } from '../../api/userApi';

export const instance = axios.create({
  baseURL: 'https://projectteam7-backend.onrender.com/auth',
});

export const setToken = token => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  return (instance.defaults.headers.authorization = '');
};

export const registerThunk = createAsyncThunk(
  '/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await instance.post('/signup', credentials);
      setToken(response.data.token);
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
      const response = await instance.post('/signin', credentials);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('/logout', async (_, thunkAPI) => {
  try {
    const result = await api.logout();
    return result;
  } catch ({ response }) {
    return thunkAPI.rejectWithValue(response.data);
  }
});

export const current = createAsyncThunk(
  '/current',
  async (_, thunkAPI) => {
    try {
      const { auth } = thunkAPI.getState();
      const result = await api.getCurrent(auth.token);
      return result;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const { auth } = thunkAPI.getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);

export const update = createAsyncThunk('/update', async (data, thunkAPI) => {
  try {
    const result = await api.update(data);
    return result;
  } catch ({ response }) {
    return thunkAPI.rejectWithValue(response.data);
  }
});
