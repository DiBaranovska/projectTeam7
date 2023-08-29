import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../api/userApi';

export const signup = createAsyncThunk(
  'user/signup',
  async (data, thunkAPI) => {
    try {
      const result = await api.signup(data);
      return result;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const signin = createAsyncThunk(
  'user/signin',
  async (data, thunkAPI) => {
    try {
      const result = await api.signin(data);
      return result;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const logout = createAsyncThunk('user/logout', async (_, thunkAPI) => {
  try {
    const result = await api.logout();
    return result;
  } catch ({ response }) {
    return thunkAPI.rejectWithValue(response.data);
  }
});

export const current = createAsyncThunk(
  'user/current',
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

export const update = createAsyncThunk(
  'user/update',
  async (data, thunkAPI) => {
    try {
      const result = await api.update(data);
      return result;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);
