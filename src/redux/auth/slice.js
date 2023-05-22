import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['token'],
};

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state) {
      state.error = null;
    },
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [register.rejected](state) {
      state.error = 'Bad request. Please try again.';
    },
    [logIn.pending](state) {
      state.error = null;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [logIn.rejected](state) {
      state.error =
        'There is no user matching your entered data. Please try again.';
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
      state.error = null;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.error = null;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
      state.error = null;
    },
  },
});

export const persistedAuthReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
