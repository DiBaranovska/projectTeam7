// import { addContact, deleteContact } from '../../api/resipesApi';
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";



axios.defaults.baseURL = 'https://projectteam7-backend.onrender.com';

export const fetchRecipesPopular = createAsyncThunk("recipes/main",
async (_, thunkAPI) => {
  
  try {
    const res = await axios.get(`/recipes?limit=3`);
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



// export const addContactThunk = createAsyncThunk(
//   'contacts/addContact',
//   contacts => {
//     return addContact(contacts);
//   }
// );

// export const deleteContactThunk = createAsyncThunk(
//   'contacts/deleteContact',
//   id => {
//     return deleteContact(id);
//   }
// );
