import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slice/user/userSlice';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});

// https://redux.js.org/tutorials/quick-start
