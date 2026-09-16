import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "@redux/features/auth/authSlice";
import UserReducer from "@redux/features/user/userSlice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    userSlice: UserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
