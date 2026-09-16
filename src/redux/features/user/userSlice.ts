import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "@types/index";

const initialState: UserState = {
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
    setUserData: (state, { payload }: PayloadAction<{ data: any }>) => {
      state.user = payload.data;
    },

    setCreateUserModal: (state, { payload }: PayloadAction<{ data: boolean }>) => {
      state.createModal = payload.data;
    },

    setOpenUserModal: (state, { payload }: PayloadAction<{ data: boolean }>) => {
      state.openModal = payload.data;
    },

    setActiveModal: (state, { payload }: PayloadAction<{ data: boolean }>) => {
      state.activeModal = payload.data;
    },

    setDisableModal: (state, { payload }: PayloadAction<{ data: boolean }>) => {
      state.disableModal = payload.data;
    },

    setLoadingUser: (state, { payload }: PayloadAction<{ data: boolean }>) => {
      state.loading = payload.data;
    },

    setRoleModal: (state, { payload }: PayloadAction<{ data: boolean }>) => {
      state.roleModal = payload.data;
    },

    setDeleteModal: (state, { payload }: PayloadAction<{ data: boolean }>) => {
      state.deleteModal = payload.data;
    },

    setUpdateProfileModal: (state, { payload }: PayloadAction<{ data: boolean }>) => {
      state.updateProfileModal = payload.data;
    },

    setMessage: (state, { payload }: PayloadAction<{ data: string | null }>) => {
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
