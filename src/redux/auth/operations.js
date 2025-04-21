import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const setAuthHeader = (value) => {
  axios.defaults.headers.common.Authorization = value;
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 *
 * After successful registration, add the token to the HTTP header
 */

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      setAuthHeader(`Bearer ${response.data.token}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 *
 * After successful login, add the token to the HTTP header
 */
export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      setAuthHeader(`Bearer ${response.data.token}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
      try {
        console.log("refreshUser:");
        const reduxState = thunkAPI.getState();
        console.log("reduxState:",reduxState);
        setAuthHeader(`Bearer ${reduxState.auth.token}`);
        
        const response = await axios.post('/users/current', credentials);
        setAuthHeader(`Bearer ${response.data.token}`);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    },
    {
      condition: (_, thunkAPI) => {
        const reduxState = thunkAPI.getState();
        return reduxState.auth.token !== null;
      },
    }
  );

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 *
 * After a successful logout, remove the token from the HTTP header
 */
export const logOut = createAsyncThunk('auth/logout', async () => {
  await axios.post('/users/logout');
});

// react1212@mail.com
// react1313@mail.com
// 123123qweqwe
