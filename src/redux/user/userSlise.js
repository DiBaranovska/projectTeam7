const { createSlice, isAnyOf } = require('@reduxjs/toolkit');

const initialStateUser = {
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialStateUser,
  extraReducers: builder => {},
});

export const userReducer = userSlice.reducer;
