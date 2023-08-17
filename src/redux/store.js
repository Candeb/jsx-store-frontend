import persistStore from 'redux-persist/es/persistStore';
import rootReducer from './root-reducer';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const initialState = {};

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
  preloadedState: initialState,
});

export const persistor = persistStore(store);
