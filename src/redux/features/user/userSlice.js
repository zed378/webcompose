import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  message: null,
  openModal: false,
  activeModal: false,
  loading: false,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserData: (state, { payload }) => {
      state.user = payload.data;
    },

    setOpenUserModal: (state, { payload }) => {
      state.openModal = payload.data;
    },

    setActiveModal: (state, { payload }) => {
      state.activeModal = payload.data;
    },

    setLoadingUser: (state, { payload }) => {
      state.loading = payload.data;
    },

    setMessage: (state, { payload }) => {
      state.message = payload.data;
    },
  },
});

export const {
  setUserData,
  setActiveModal,
  setOpenUserModal,
  setLoadingUser,
  setMessage,
} = userSlice.actions;

export default userSlice.reducer;
