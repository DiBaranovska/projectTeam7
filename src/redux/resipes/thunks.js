import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const instance = axios.create({
  baseURL: 'https://projectteam7-backend.onrender.com/auth',
});

export const setToken = token => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  return (instance.defaults.headers.authorization = '');
};

export const fetchRecipesPopular = createAsyncThunk(
  "recipes/fetchRecipesPopular",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes?limit=2`);
      setToken.set(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

