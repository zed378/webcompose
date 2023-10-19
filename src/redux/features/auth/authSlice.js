import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: window.localStorage.getItem("user")
    ? JSON.parse(window.localStorage.getItem("user"))
    : null,
  token: window.localStorage.getItem("token") ?? null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;

      window.localStorage.setItem("user", JSON.stringify(payload.user));
      window.localStorage.setItem("token", JSON.stringify(payload.token));
    },
    setUpdateUser: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;

      window.localStorage.setItem("user", JSON.stringify(payload.user));
      window.localStorage.setItem("token", JSON.stringify(payload.token));
    },
    removeUser: (state) => {
      state.user = null;
      window.localStorage.removeItem("user");
      window.localStorage.removeItem("token");
    },
  },
});

export const { setUser, setUpdateUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
