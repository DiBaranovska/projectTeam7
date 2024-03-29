import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";






axios.defaults.baseURL = 'https://projectteam7-backend.onrender.com';

const getLimitBasedOnScreenWidth = () => {
  const screenWidth = window.innerWidth;
  
  if (screenWidth >= 1200) {  // Десктоп
    return 3;
  } else if (screenWidth >= 768) {  // Планшет
    return 2;
  } else {  // Телефон
    return 1;
  }
};


export const fetchRecipesPopular = createAsyncThunk("recipes/main",
async (_, thunkAPI) => {
  const limit = getLimitBasedOnScreenWidth();
  try {
    const res = await axios.get(`/recipes?limit=${limit}`);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});



// export const instance = axios.create({
//   baseURL: 'https://projectteam7-backend.onrender.com/auth',
// });

// export const setToken = token => {
//   if (token) {
//     return (instance.defaults.headers.authorization = `Bearer ${token}`);
//   }
//   return (instance.defaults.headers.authorization = '');
// };



// export const fetchRecipesPopular = createAsyncThunk(
//   "recipes/fetchRecipesPopular",
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get(`/recipes`);
//       setToken.set(response.data.token);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

