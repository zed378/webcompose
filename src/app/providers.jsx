"use client";

import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import store from "@redux/store";
import { setAuthToken, API } from "@hooks/api";
import { setUpdateUser, removeUser } from "@redux/features/auth/authSlice";

function AuthAndThemeInitializer({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.token) {
      setAuthToken(localStorage.token);
    }

    const verify = async () => {
      try {
        await API.get("/auth/verify").then(({ data }) => {
          data.data
            ? dispatch(
                setUpdateUser({
                  data,
                })
              )
            : dispatch(removeUser());
        });
      } catch (error) {
        console.log(error);
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

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <AuthAndThemeInitializer>{children}</AuthAndThemeInitializer>
    </Provider>
  );
}
