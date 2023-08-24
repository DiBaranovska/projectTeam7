const { createSlice, isAnyOf } = require('@reduxjs/toolkit');

const initialStateUser = {
  isLoggedIn: false,
};

const resipeSlice = createSlice({
  name: 'resipes',
  initialState: initialStateUser,
  extraReducers: builder => {},
});

export const recipeReducer = resipeSlice.reducer;
