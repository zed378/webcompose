import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: window.localStorage.getItem("token") ?? null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload.data.data;
      state.token = payload.data.token;
      window.localStorage.setItem("token", JSON.stringify(payload.data.token));
    },

    setUpdateDataUser: (state, { payload }) => {
      state.user = payload.data;
    },

    setUpdateUser: (state, { payload }) => {
      state.user = payload.data.data;
      state.token = payload.data.token;
      window.localStorage.removeItem("token");
      window.localStorage.setItem("token", JSON.stringify(payload.data.token));
    },

    removeUser: (state) => {
      state.user = null;
      window.localStorage.removeItem("token");
    },
  },
});

export const { setUser, setUpdateUser, removeUser, setUpdateDataUser } =
  authSlice.actions;

export default authSlice.reducer;
