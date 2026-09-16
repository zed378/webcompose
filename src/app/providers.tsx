"use client";

import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "@redux/store";
import { useAppDispatch } from "@redux/hooks";
import { setAuthToken, API } from "@hooks/api";
import { setUpdateUser, removeUser } from "@redux/features/auth/authSlice";

function AuthAndThemeInitializer({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.token) {
      setAuthToken(localStorage.token);
    }

    const verify = async () => {
      try {
        const { data } = await API.get("/auth/verify");
        if (data.data) {
          dispatch(setUpdateUser({ data }));
        } else {
          dispatch(removeUser());
        }
      } catch (error) {
        console.error(error);
        dispatch(removeUser());
      }
    };

    verify();

    if (typeof window !== "undefined" && localStorage?.theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dispatch]);

  return <>{children}</>;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <AuthAndThemeInitializer>{children}</AuthAndThemeInitializer>
    </Provider>
  );
}
