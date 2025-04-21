import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser,register } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: (builder) =>
    builder    
      .addCase(logIn.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        console.log("addCase/patload-",action.payload);
        console.log("addCase/state-",state.user,"/",state.token,"/");
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        console.log("addCase/state2-",state.user,"/",state.token,);
      })
      .addCase(logIn.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
        console.log("refreshUser.pending-",state.isRefreshing);
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        console.log("refreshUser.fulfilled-",action.payload);
        state.user = action.payload;
        state.isRefreshing = false;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
        state.error = true;
      }),
});

export default authSlice.reducer;