import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  signupApi,
  signinApi,
  logoutApi,
  getCurrentApi,
  updateApi,
} from '../../api/userApi';

export const register = createAsyncThunk(
  'auth/signup',
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
  'auth/signin',
  async (credentials, thunkAPI) => {
    try {
      const result = await signinApi(credentials);
      return result;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const result = await logoutApi();
    return result;
  } catch ({ response }) {
    return thunkAPI.rejectWithValue(response.data);
  }
});

export const current = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    try {
      const { auth } = thunkAPI.getState().auth;
      console.log(auth.token);
      const result = await getCurrentApi();
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
    const result = await updateApi(data);
    return result;
  } catch ({ response }) {
    return thunkAPI.rejectWithValue(response.data);
  }
});
