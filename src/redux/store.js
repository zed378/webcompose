import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "@redux/features/auth/authSlice";

export default configureStore({
  reducer: {
    auth: AuthReducer,
  },
});
