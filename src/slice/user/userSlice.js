import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    error: null,
    loading: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase('authStateChange', (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
