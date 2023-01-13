import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    error: null,
    loading: false,
  },
  reducers: {
    login: (state, action) => {
      state.data = action.payload;
    },
    logout: (state) => {
      state.data = null;
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
