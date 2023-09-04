import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  signupApi,
  signinApi,
  logoutApi,
  getCurrentApi,
  updateApi,
  subscribeApi,
} from '../../api/userApi';

export const register = createAsyncThunk(
  'user/signup',
  async (credentials, thunkAPI) => {
    try {
      const result = await signupApi(credentials);
      return result;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const login = createAsyncThunk(
  'user/signin',
  async (credentials, thunkAPI) => {
    try {
      const result = await signinApi(credentials);
      return result;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const logout = createAsyncThunk('user/logout', async (_, thunkAPI) => {
  try {
    const result = await logoutApi();
    return result;
  } catch ({ response }) {
    return thunkAPI.rejectWithValue(response.data);
  }
});

export const current = createAsyncThunk(
  'user/current',
  async (_, thunkAPI) => {
    try {
      const { user } = thunkAPI.getState();
      const result = await getCurrentApi(user.token);
      return result;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const { user } = thunkAPI.getState();
      if (!user.token) {
        return false;
      }
    },
  }
);

export const update = createAsyncThunk(
  'user/update',
  async (data, thunkAPI) => {
    try {
      const result = await updateApi(data);
      return result;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const subscribe = createAsyncThunk(
  '/subscribe',
  async (email, thunkAPI) => {
    try {
      const result = await subscribeApi(email);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
