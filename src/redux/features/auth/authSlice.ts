import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "@types/index";

const getToken = (): string | null => {
  if (typeof window !== "undefined" && window.localStorage) {
    return window.localStorage.getItem("token") ?? null;
  }
  return null;
};

const initialState: AuthState = {
  user: null,
  token: getToken(),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<any>) => {
      state.user = payload.data.data;
      state.token = payload.data.token;
      if (typeof window !== "undefined" && window.localStorage) {
        window.localStorage.setItem("token", payload.data.token);
      }
    },

    setUpdateDataUser: (state, { payload }: PayloadAction<any>) => {
      state.user = payload.data;
    },

    setUpdateUser: (state, { payload }: PayloadAction<any>) => {
      state.user = payload.data.data;
      state.token = payload.data.token;
      if (typeof window !== "undefined" && window.localStorage) {
        window.localStorage.removeItem("token");
        window.localStorage.setItem("token", payload.data.token);
      }
    },

    removeUser: (state) => {
      state.user = null;
      state.token = null;
      if (typeof window !== "undefined" && window.localStorage) {
        window.localStorage.removeItem("token");
      }
    },
  },
});

export const { setUser, setUpdateUser, removeUser, setUpdateDataUser } =
  authSlice.actions;

export default authSlice.reducer;
