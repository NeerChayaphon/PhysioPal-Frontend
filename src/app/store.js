import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slice/user/userSlice';
import languageReducer from '../slice/language/languageSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    language: languageReducer,
  },
});

// https://redux.js.org/tutorials/quick-start
