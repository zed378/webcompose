import Router from "@route/index";
import { useEffect } from "react";
import { setAuthToken, API } from "@hooks/api";
import { useDispatch } from "react-redux";
import { setUser, removeUser } from "@redux/features/auth/authSlice";

if (localStorage.token) {
  setAuthToken(localStorage.token.slice(1, -1));
}

function App() {
  const dispatch = useDispatch();

  const verify = async () => {
    try {
      await API.get("/auth/verify").then((data) => {
        data.data
          ? dispatch(
              setUser({
                data: data.data,
              })
            )
          : dispatch(removeUser());
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    verify();
  }, []);

  return <Router />;
}

export default App;
