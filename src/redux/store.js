import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "@redux/features/auth/authSlice";
import UserReducer from "@redux/features/user/userSlice";

export default configureStore({
  reducer: {
    auth: AuthReducer,
    userSlice: UserReducer,
  },
});
