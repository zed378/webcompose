import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  message: null,
  createModal: false,
  roleModal: false,
  openModal: false,
  activeModal: false,
  disableModal: false,
  deleteModal: false,
  updateProfileModal: false,
  loading: false,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserData: (state, { payload }) => {
      state.user = payload.data;
    },

    setCreateUserModal: (state, { payload }) => {
      state.createModal = payload.data;
    },

    setOpenUserModal: (state, { payload }) => {
      state.openModal = payload.data;
    },

    setActiveModal: (state, { payload }) => {
      state.activeModal = payload.data;
    },

    setDisableModal: (state, { payload }) => {
      state.disableModal = payload.data;
    },

    setLoadingUser: (state, { payload }) => {
      state.loading = payload.data;
    },

    setRoleModal: (state, { payload }) => {
      state.roleModal = payload.data;
    },

    setDeleteModal: (state, { payload }) => {
      state.deleteModal = payload.data;
    },

    setUpdateProfileModal: (state, { payload }) => {
      state.updateProfileModal = payload.data;
    },

    setMessage: (state, { payload }) => {
      state.message = payload.data;
    },
  },
});

export const {
  setUserData,
  setCreateUserModal,
  setActiveModal,
  setOpenUserModal,
  setLoadingUser,
  setMessage,
  setDisableModal,
  setDeleteModal,
  setUpdateProfileModal,
  setRoleModal,
} = userSlice.actions;

export default userSlice.reducer;
