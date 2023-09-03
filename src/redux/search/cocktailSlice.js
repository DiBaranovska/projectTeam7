import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { searchCocktails } from '../../api/searchApi';

const initialState = {
  results: [],
  ingredientsList: [],
  categoriesList: [],
  glassesList: [],
  status: 'idle',
  isLoading: false,
  error: null,
};

export const fetchFilteredCocktails = createAsyncThunk(
  'cocktail/fetchFilteredCocktails',
  async ({ filters, token }, { rejectWithValue }) => {
    try {
      const response = await searchCocktails(token, filters);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchAllCocktails = createAsyncThunk(
  'cocktail/fetchAllCocktails',
  async (token, { rejectWithValue }) => {
    try {
      const response = await searchCocktails(token, {});
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const cocktailSlice = createSlice({
  name: 'cocktail',
  initialState,
  reducers: {
    setResults: (state, action) => {
      state.results = action.payload;
    },
    setIngredientsList: (state, action) => {
      state.ingredientsList = action.payload;
    },
    setCategoriesList: (state, action) => {
      state.categoriesList = action.payload;
    },
    setGlassesList: (state, action) => {
      state.glassesList = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchFilteredCocktails.pending, state => {
        state.status = 'loading';
        state.isLoading = true;
      })
      .addCase(fetchFilteredCocktails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isLoading = false;
        state.results = action.payload;
      })
      .addCase(fetchFilteredCocktails.rejected, (state, action) => {
        state.status = 'failed';
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchAllCocktails.pending, state => {
        state.status = 'loading';
        state.isLoading = true;
      })
      .addCase(fetchAllCocktails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isLoading = false;
        state.results = action.payload;
      })
      .addCase(fetchAllCocktails.rejected, (state, action) => {
        state.status = 'failed';
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setIngredientsList,
  setCategoriesList,
  setGlassesList,
  setResults,
} = cocktailSlice.actions;

export default cocktailSlice.reducer;
