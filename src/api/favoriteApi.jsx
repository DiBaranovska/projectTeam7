import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://projectteam7-backend.onrender.com';

export const fetchFavoriteRecipes = createAsyncThunk(
  'favorite',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/favorite');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFavoriteRecipes = createAsyncThunk(
  'favorite/deleteRecipe',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/favorite/${id}`);
      toast.success('recipe deleted successfully');
      return response.data;
    } catch (e) {
      toast.error('recipe didn`t delete  (');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
