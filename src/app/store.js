import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../slice/user/userSlice';
import languageReducer from '../slice/language/languageSlice';
import exerciseSetReducer from '../slice/exerciseSet/exerciseSetSlice';
import exerciseStatusReducer from '../slice/exerciseSet/exerciseStatusSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  language: languageReducer,
  exerciseSet: exerciseSetReducer,
  exerciseStatus: exerciseStatusReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

// https://redux.js.org/tutorials/quick-start
