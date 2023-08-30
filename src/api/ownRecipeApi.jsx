import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://projectteam7-backend.onrender.com';

export const fetchMyRecipes = createAsyncThunk('my', async (arg, thunkAPI) => {
  const { page = 1, limit = 6 } = arg;
  try {
    const res = await axios.get(`/own?page=${page}&limit=${limit}`);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteMyRecipes = createAsyncThunk(
  'my/deleteRecipe',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/own/${id}`);
      toast.success('recipe deleted successfully');
      return response.data;
    } catch (e) {
      toast.error('recipe didn`t delete  (');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
