import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  isauthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSucces: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isauthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isauthenticated = false;
      localStorage.removeItem("token");
      window.location.href = "/login";
    },
  },
});

export const { loginSucces, logout } = authSlice.actions;
export default authSlice.reducer;
