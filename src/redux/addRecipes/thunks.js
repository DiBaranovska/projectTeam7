// import { addContact, deleteContact } from '../../api/resipesApi';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://projectteam7-backend.onrender.com';

export const fetchPopularForAddPage = createAsyncThunk(
  'recipes/popular',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`/recipes/popular`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
