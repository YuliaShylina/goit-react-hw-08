import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./operations";

const pending = (state) => {
  state.loading = true;
  state.error = false;
};
const rejected = (state) => {
  state.error = true;
  state.loading = false;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, pending)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(register.rejected, rejected)
      .addCase(logIn.pending, pending)
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(logIn.rejected, rejected)
      .addCase(logOut.pending, pending)
      .addCase(logOut.fulfilled, (state) => {
        (state.user = {
          name: null,
          email: null,
        }),
          (state.token = null);
        state.isLoggedIn = false;
        state.loading = false;
      })
      .addCase(logOut.rejected, rejected)
      .addCase(refreshUser.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.error = true;
        state.loading = false;
        state.isRefreshing = false;
      }),
});
export default authSlice.reducer;
