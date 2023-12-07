import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "use-debounce";

// components
import Dropzone from "react-dropzone";

// assets
import { AiOutlineClose } from "react-icons/ai";
import loadingimg from "@assets/images/loadingimg.svg";

// hooks
import {
  setMessage,
  setCreateUserModal,
  setOpenUserModal,
  setActiveModal,
  setDisableModal,
  setDeleteModal,
  setRoleModal,
  setUpdateProfileModal,
  setLoadingUser,
} from "@redux/features/user/userSlice";
import {
  createNewUser,
  updateFullUser,
  activateUser,
  disableUser,
  deleteUser,
  updateUserRole,
  updatePict,
  checkUsername,
} from "@hooks/userUpdate";
import { converter } from "@hooks/sizeConverter";
import { setUpdateUser } from "@redux/features/auth/authSlice";
import { API } from "@hooks/api";

// Function

export function ModalCreatetUser() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [debouncedText] = useDebounce(text, 500);
  const [uname, setUname] = useState("");

  const { message, loading } = useSelector((state) => state.userSlice);
  const { user: dataLogin } = useSelector((state) => state.auth);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const handleOnchange = (e) => {
    e.preventDefault();

    if (e.target.name === "username" && e.target.value !== "") {
      setUname("");
      setText(e.target.value);
    } else {
      setUname("");
    }

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (message !== null) {
      dispatch(setLoadingUser({ data: false }));
      setTimeout(() => {
        dispatch(setMessage({ data: null }));
      }, 3000);
      setTimeout(() => {
        dispatch(setCreateUserModal({ data: false }));
      }, 5000);
    }
  }, [message]);

  useEffect(() => {
    if (debouncedText) {
      checkUsername(debouncedText).then((data) => {
        setUname(data.message);
      });
    }
  }, [debouncedText]);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-screen h-screen z-50 bg-navy-700/80 "
        onClick={() => {
          dispatch(setCreateUserModal({ data: false }));
        }}
      ></div>

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[22.5rem] max-w-[35rem] h-auto rounded-lg py-4 px-6 z-[60] bg-white dark:bg-navy-800 ">
        <AiOutlineClose
          className="text-red-500 text-2xl absolute top-2 right-2 cursor-pointer "
          onClick={() => {
            dispatch(setCreateUserModal({ data: false }));
          }}
        />
        <h1 className="text-3xl text-indigo-500 dark:text-white">
          Create User
        </h1>

        <hr className="dark:border-gray-400 my-4" />

        {message && (
          <h1 className="border border-indigo-500 text-indigo-500 text-center p-2 rounded-md dark:text-white dark:border-white ">
            {message}
          </h1>
        )}

        <div className="w-full">
          <label
            htmlFor="firstName"
            className={`text-sm text-navy-700 dark:text-white `}
          >
            First Name
          </label>
          <input
            disabled={loading}
            type="text"
            id="firstName"
            name="firstName"
            placeholder="e.g. Zed"
            value={data.firstName}
            onChange={handleOnchange}
            className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:!border-white/10 dark:text-white`}
          />
        </div>

        <div className="w-full mt-2">
          <label
            htmlFor="lastName"
            className={`text-sm text-navy-700 dark:text-white `}
          >
            Last Name
          </label>
          <input
            disabled={loading}
            type="text"
            id="lastName"
            name="lastName"
            placeholder="e.g. Trueblood"
            value={data.lastName}
            onChange={handleOnchange}
            className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:!border-white/10 dark:text-white`}
          />
        </div>

        <div className="w-full mt-2">
          <label
            htmlFor="email"
            className={`text-sm text-navy-700 dark:text-white `}
          >
            Email
          </label>
          <input
            disabled={loading}
            type="email"
            id="email"
            name="email"
            placeholder="e.g. you@yourcompany.com"
            value={data.email}
            onChange={handleOnchange}
            className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:!border-white/10 dark:text-white`}
          />
        </div>

        <div className="w-full mt-2">
          <label
            htmlFor="username"
            className={`text-sm text-navy-700 dark:text-white `}
          >
            Username
          </label>
          <input
            disabled={loading}
            type="text"
            id="username"
            name="username"
            placeholder="e.g. Trueblood"
            value={data.username}
            onChange={handleOnchange}
            className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:!border-white/10 dark:text-white`}
          />
          {uname && data?.username !== "" && (
            <span
              className={`text-sm ${
                uname.includes("taken") ? "text-red-500" : "text-green-500"
              } `}
            >
              <b>{data?.username}</b> {uname}
            </span>
          )}
        </div>

        <div className="w-full mt-2">
          <label
            htmlFor="role"
            className={`text-sm text-navy-700 dark:text-white `}
          >
            Role
          </label>
          <select
            className=" mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:!border-white/10 dark:text-white "
            style={{
              WebkitAppearance: "none",
              backgroundColor: "transparent",
            }}
            id="role"
            name="role"
            onChange={handleOnchange}
          >
            <option
              className="text-indigo-500 p-1 border-2 border-indigo-500  "
              value={"AUTHENTICATED"}
            >
              -- Choose Role --
            </option>
            <option
              className="text-indigo-500 p-1 border-2 border-indigo-500  "
              value={"AUTHENTICATED"}
            >
              AUTHENTICATED
            </option>
            {dataLogin.role === "SYS" && (
              <option
                className="text-indigo-500 p-1 border-2 border-indigo-500  "
                value={"SYS"}
              >
                SYS
              </option>
            )}
            <option
              className="text-indigo-500 p-1 border-2 border-indigo-500  "
              value={"ADMIN"}
            >
              ADMIN
            </option>
            <option
              className="text-indigo-500 p-1 border-2 border-indigo-500  "
              value={"MARKETING"}
            >
              MARKETING
            </option>
            <option
              className="text-indigo-500 p-1 border-2 border-indigo-500  "
              value={"HR"}
            >
              HR
            </option>
            <option
              className="text-indigo-500 p-1 border-2 border-indigo-500  "
              value={"DEVELOPER"}
            >
              DEVELOPER
            </option>
            <option
              className="text-indigo-500 p-1 border-2 border-indigo-500  "
              value={"CLIENT"}
            >
              CLIENT
            </option>
          </select>
        </div>

        <div className="w-full mt-2">
          <label
            htmlFor="password"
            className={`text-sm text-navy-700 dark:text-white `}
          >
            Password
          </label>
          <input
            disabled={loading}
            type="password"
            id="password"
            name="password"
            placeholder="e.g. yourpassword"
            value={data.password}
            onChange={handleOnchange}
            className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:!border-white/10 dark:text-white`}
          />
        </div>

        <div className="w-full flex laptop:flex-row phone:flex-col-reverse mt-7 laptop:justify-end gap-2 ">
          <button
            disabled={loading}
            className="border hover:bg-red-50 hover:border-red-700 hover:text-red-700 border-red-500 text-red-500 rounded-lg text-sm py-1 laptop:w-1/4 phone:w-full "
            onClick={() => {
              dispatch(setCreateUserModal({ data: false }));
            }}
          >
            CANCEL
          </button>

          <button
            disabled={loading || data.role === ""}
            className="border hover:bg-indigo-100 hover:border-indigo-700 hover:text-indigo-700 border-indigo-500 text-indigo-500 rounded-lg text-sm py-1 laptop:w-1/4 phone:w-full "
            onClick={() => {
              dispatch(setLoadingUser({ data: true }));
              createNewUser(data).then((data) => {
                dispatch(setMessage({ data: data.message }));
              });
            }}
          >
            SAVE
          </button>
        </div>
      </div>
    </>
  );
}

export function ModalEditUser() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [debouncedText] = useDebounce(text, 500);
  const [uname, setUname] = useState("");

  const { user, message, loading } = useSelector((state) => state.userSlice);
  const { user: currentUser } = useSelector((state) => state.auth);

  const [data, setData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    username: "",
  });

  const handleOnchange = (e) => {
    e.preventDefault();

    if (e.target.name === "username" && e.target.value !== "") {
      setUname("");
      setText(e.target.value);
    } else {
      setUname("");
    }

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setData({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
    });
  }, []);

  useEffect(() => {
    if (message !== null) {
      dispatch(setLoadingUser({ data: false }));
      dispatch(setLoadingUser({ data: false }));
      setTimeout(() => {
        dispatch(setMessage({ data: null }));
      }, 3000);
      setTimeout(() => {
        dispatch(setOpenUserModal({ data: false }));
      }, 5000);
    }
  }, [message]);

  useEffect(() => {
    if (debouncedText) {
      checkUsername(debouncedText).then((data) => {
        setUname(data.message);
      });
    }
  }, [debouncedText]);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-screen h-screen z-50 bg-navy-700/80 "
        onClick={() => {
          dispatch(setOpenUserModal({ data: false }));
        }}
      ></div>

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[22.5rem] max-w-[35rem] h-auto rounded-lg py-4 px-6 z-[60] bg-white dark:bg-navy-800 ">
        <AiOutlineClose
          className="text-red-500 text-2xl absolute top-2 right-2 cursor-pointer "
          onClick={() => {
            dispatch(setOpenUserModal({ data: false }));
          }}
        />
        <h1 className="text-3xl text-indigo-500 dark:text-white">Edit User</h1>

        <hr className="dark:border-gray-400 my-4" />

        {message && (
          <h1 className="border border-indigo-500 text-indigo-500 text-center p-2 rounded-md dark:text-white dark:border-white ">
            {message}
          </h1>
        )}

        <div className="w-full">
          <label
            htmlFor="firstName"
            className={`text-sm text-navy-700 dark:text-white `}
          >
            First Name
          </label>
          <input
            disabled={loading}
            type="text"
            id="firstName"
            name="firstName"
            placeholder="e.g. Zed"
            value={data.firstName}
            onChange={handleOnchange}
            className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:!border-white/10 dark:text-white`}
          />
        </div>

        <div className="w-full mt-2">
          <label
            htmlFor="lastName"
            className={`text-sm text-navy-700 dark:text-white `}
          >
            Last Name
          </label>
          <input
            disabled={loading}
            type="text"
            id="lastName"
            name="lastName"
            placeholder="e.g. Trueblood"
            value={data.lastName}
            onChange={handleOnchange}
            className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:!border-white/10 dark:text-white`}
          />
        </div>

        <div className="w-full mt-2">
          <label
            htmlFor="username"
            className={`text-sm text-navy-700 dark:text-white `}
          >
            Username
          </label>
          <input
            disabled={loading}
            type="text"
            id="username"
            name="username"
            placeholder="e.g. Trueblood"
            value={data.username}
            onChange={handleOnchange}
            className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:!border-white/10 dark:text-white`}
          />
          {uname && data?.username !== "" && (
            <span
              className={`text-sm ${
                uname.includes("taken") ? "text-red-500" : "text-green-500"
              } `}
            >
              <b>{data?.username}</b> {uname}
            </span>
          )}
        </div>

        <div className="w-full flex laptop:flex-row phone:flex-col-reverse mt-7 laptop:justify-end gap-2 ">
          <button
            disabled={loading}
            className="border hover:bg-red-50 hover:border-red-700 hover:text-red-700 border-red-500 text-red-500 rounded-lg text-sm py-1 laptop:w-1/4 phone:w-full "
            onClick={() => {
              dispatch(setOpenUserModal({ data: false }));
            }}
          >
            CANCEL
          </button>

          <button
            disabled={loading}
            className="border hover:bg-indigo-100 hover:border-indigo-700 hover:text-indigo-700 border-indigo-500 text-indigo-500 rounded-lg text-sm py-1 laptop:w-1/4 phone:w-full "
            onClick={() => {
              dispatch(setLoadingUser({ data: true }));
              updateFullUser(data).then(async (val) => {
                dispatch(setMessage({ data: val.message }));

                if (
                  currentUser.firstName === user.firstName &&
                  currentUser.lastName === user.lastName
                ) {
                  try {
                    await API.get("/auth/verify").then(({ data }) => {
                      data.data &&
                        dispatch(
                          setUpdateUser({
                            data,
                          })
                        );
                    });
                  } catch (error) {
                    dispatch(setMessage({ data: error.message }));
                  }
                }
              });
            }}
          >
            SAVE
          </button>
        </div>
      </div>
    </>
  );
}

export function ModalEditRole() {
  const dispatch = useDispatch();

  const { user, message, loading } = useSelector((state) => state.userSlice);
  const { user: dataLogin } = useSelector((state) => state.auth);

  const [data, setData] = useState({
    id: "",
    role: "",
  });

  const handleOnchange = (e) => {
    e.preventDefault();

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setData({
      id: user.id,
      role: user.role,
    });
  }, []);

  useEffect(() => {
    if (message !== null) {
      dispatch(setLoadingUser({ data: false }));
      setTimeout(() => {
        dispatch(setMessage({ data: null }));
      }, 3000);
      setTimeout(() => {
        dispatch(setRoleModal({ data: false }));
      }, 5000);
    }
  }, [message]);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-screen h-screen z-50 bg-navy-700/80 "
        onClick={() => {
          dispatch(setRoleModal({ data: false }));
        }}
      ></div>

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[22.5rem] max-w-[35rem] h-auto rounded-lg py-4 px-6 z-[60] bg-white dark:bg-navy-800 ">
        <AiOutlineClose
          className="text-red-500 text-2xl absolute top-2 right-2 cursor-pointer "
          onClick={() => {
            dispatch(setRoleModal({ data: false }));
          }}
        />
        <h1 className="text-3xl text-indigo-500 dark:text-white">
          Edit User Role
        </h1>

        <hr className="dark:border-gray-400 my-4" />

        {message && (
          <h1 className="border border-indigo-500 text-indigo-500 text-center p-2 rounded-md dark:text-white dark:border-white ">
            {message}
          </h1>
        )}

        <h1 className="dark:text-white mt-4 ">
          Set <b>{user.name}</b> as:
        </h1>

        <select
          className=" mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:!border-white/10 dark:text-white "
          style={{
            WebkitAppearance: "none",
            backgroundColor: "transparent",
          }}
          id="role"
          name="role"
          onChange={handleOnchange}
        >
          <option
            className="text-indigo-500 p-1 border-2 border-indigo-500  "
            value={"AUTHENTICATED"}
          >
            -- Choose Role --
          </option>
          <option
            className="text-indigo-500 p-1 border-2 border-indigo-500  "
            value={"AUTHENTICATED"}
          >
            AUTHENTICATED
          </option>
          {dataLogin.role === "SYS" && (
            <option
              className="text-indigo-500 p-1 border-2 border-indigo-500  "
              value={"SYS"}
            >
              SYS
            </option>
          )}
          <option
            className="text-indigo-500 p-1 border-2 border-indigo-500  "
            value={"ADMIN"}
          >
            ADMIN
          </option>
          <option
            className="text-indigo-500 p-1 border-2 border-indigo-500  "
            value={"MARKETING"}
          >
            MARKETING
          </option>
          <option
            className="text-indigo-500 p-1 border-2 border-indigo-500  "
            value={"HR"}
          >
            HR
          </option>
          <option
            className="text-indigo-500 p-1 border-2 border-indigo-500  "
            value={"DEVELOPER"}
          >
            DEVELOPER
          </option>
          <option
            className="text-indigo-500 p-1 border-2 border-indigo-500  "
            value={"CLIENT"}
          >
            CLIENT
          </option>
        </select>

        <div className="w-full flex laptop:flex-row phone:flex-col-reverse mt-7 laptop:justify-end gap-2 ">
          <button
            disabled={loading}
            className="border hover:bg-red-50 hover:border-red-700 hover:text-red-700 border-red-500 text-red-500 rounded-lg text-sm py-1 laptop:w-1/4 phone:w-full "
            onClick={() => {
              dispatch(setRoleModal({ data: false }));
            }}
          >
            CANCEL
          </button>

          <button
            disabled={loading || data.role === ""}
            className="border hover:bg-indigo-100 hover:border-indigo-700 hover:text-indigo-700 border-indigo-500 text-indigo-500 rounded-lg text-sm py-1 laptop:w-1/4 phone:w-full "
            onClick={() => {
              dispatch(setLoadingUser({ data: true }));
              updateUserRole(data).then((data) => {
                dispatch(setMessage({ data: data.message }));
              });
            }}
          >
            SAVE
          </button>
        </div>
      </div>
    </>
  );
}

export function ModalActivateUser() {
  const dispatch = useDispatch();

  const { user, message, loading } = useSelector((state) => state.userSlice);

  const [id, setId] = useState("");

  useEffect(() => {
    setId(user.id);
  }, []);

  useEffect(() => {
    if (message !== null) {
      dispatch(setLoadingUser({ data: false }));
      setTimeout(() => {
        dispatch(setMessage({ data: null }));
      }, 3000);
      setTimeout(() => {
        dispatch(setActiveModal({ data: false }));
      }, 5000);
    }
  }, [message]);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-screen h-screen z-50 bg-navy-700/80 "
        onClick={() => {
          dispatch(setActiveModal({ data: false }));
        }}
      ></div>

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[22.5rem] max-w-[35rem] h-auto rounded-lg py-4 px-6 z-[60] bg-white dark:bg-navy-800 ">
        <AiOutlineClose
          className="text-red-500 text-2xl absolute top-2 right-2 cursor-pointer "
          onClick={() => {
            dispatch(setActiveModal({ data: false }));
          }}
        />
        <h1 className="text-3xl text-indigo-500 dark:text-white">
          Activate User
        </h1>

        <hr className="dark:border-gray-400 my-4" />

        {message && (
          <h1 className="border border-indigo-500 text-indigo-500 text-center p-2 rounded-md dark:text-white dark:border-white ">
            {message}
          </h1>
        )}

        <h1 className="dark:text-white mt-4 ">
          Are you sure to activate <b>{user.name}</b>?
        </h1>

        <div className="w-full flex laptop:flex-row phone:flex-col-reverse mt-7 laptop:justify-end gap-2 ">
          <button
            disabled={loading}
            className="border hover:bg-red-50 hover:border-red-700 hover:text-red-700 border-red-500 text-red-500 rounded-lg text-sm py-1 laptop:w-1/4 phone:w-full "
            onClick={() => {
              dispatch(setActiveModal({ data: false }));
            }}
          >
            CANCEL
          </button>

          <button
            disabled={loading}
            className="border hover:bg-indigo-100 hover:border-indigo-700 hover:text-indigo-700 border-indigo-500 text-indigo-500 rounded-lg text-sm py-1 laptop:w-1/4 phone:w-full "
            onClick={() => {
              dispatch(setLoadingUser({ data: true }));
              activateUser(id).then((data) => {
                dispatch(setMessage({ data: data.message }));
              });
            }}
          >
            SAVE
          </button>
        </div>
      </div>
    </>
  );
}

export function ModalDisableUser() {
  const dispatch = useDispatch();

  const { user, message, loading } = useSelector((state) => state.userSlice);

  const [id, setId] = useState("");

  useEffect(() => {
    setId(user.id);
  }, []);

  useEffect(() => {
    if (message !== null) {
      dispatch(setLoadingUser({ data: false }));
      setTimeout(() => {
        dispatch(setMessage({ data: null }));
      }, 3000);
      setTimeout(() => {
        dispatch(setDisableModal({ data: false }));
      }, 5000);
    }
  }, [message]);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-screen h-screen z-50 bg-navy-700/80 "
        onClick={() => {
          dispatch(setDisableModal({ data: false }));
        }}
      ></div>

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[22.5rem] max-w-[35rem] h-auto rounded-lg py-4 px-6 z-[60] bg-white dark:bg-navy-800 ">
        <AiOutlineClose
          className="text-red-500 text-2xl absolute top-2 right-2 cursor-pointer "
          onClick={() => {
            dispatch(setDisableModal({ data: false }));
          }}
        />
        <h1 className="text-3xl text-indigo-500 dark:text-white">
          Disable User
        </h1>

        <hr className="dark:border-gray-400 my-4" />

        {message && (
          <h1 className="border border-indigo-500 text-indigo-500 text-center p-2 rounded-md dark:text-white dark:border-white ">
            {message}
          </h1>
        )}

        <h1 className="dark:text-white mt-4 ">
          Are you sure to disable <b>{user.name}</b>?
        </h1>

        <div className="w-full flex laptop:flex-row phone:flex-col-reverse mt-7 laptop:justify-end gap-2 ">
          <button
            disabled={loading}
            className="border hover:bg-red-50 hover:border-red-700 hover:text-red-700 border-red-500 text-red-500 rounded-lg text-sm py-1 laptop:w-1/4 phone:w-full "
            onClick={() => {
              dispatch(setDisableModal({ data: false }));
            }}
          >
            CANCEL
          </button>

          <button
            disabled={loading}
            className="border hover:bg-indigo-100 hover:border-indigo-700 hover:text-indigo-700 border-indigo-500 text-indigo-500 rounded-lg text-sm py-1 laptop:w-1/4 phone:w-full "
            onClick={() => {
              dispatch(setLoadingUser({ data: true }));
              disableUser(id).then((data) => {
                dispatch(setMessage({ data: data.message }));
              });
            }}
          >
            SAVE
          </button>
        </div>
      </div>
    </>
  );
}

export function ModalDeleteUser() {
  const dispatch = useDispatch();

  const { user, message, loading } = useSelector((state) => state.userSlice);

  const [id, setId] = useState("");

  useEffect(() => {
    setId(user.id);
  }, []);

  useEffect(() => {
    if (message !== null) {
      dispatch(setLoadingUser({ data: false }));
      setTimeout(() => {
        dispatch(setMessage({ data: null }));
      }, 3000);
      setTimeout(() => {
        dispatch(setDeleteModal({ data: false }));
      }, 5000);
    }
  }, [message]);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-screen h-screen z-50 bg-navy-700/80 "
        onClick={() => {
          dispatch(setDeleteModal({ data: false }));
        }}
      ></div>

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[22.5rem] max-w-[35rem] h-auto rounded-lg py-4 px-6 z-[60] bg-white dark:bg-navy-800 ">
        <AiOutlineClose
          className="text-red-500 text-2xl absolute top-2 right-2 cursor-pointer "
          onClick={() => {
            dispatch(setDeleteModal({ data: false }));
          }}
        />
        <h1 className="text-3xl text-indigo-500 dark:text-white">
          Delete User
        </h1>

        <hr className="dark:border-gray-400 my-4" />

        {message && (
          <h1 className="border border-indigo-500 text-indigo-500 text-center p-2 rounded-md dark:text-white dark:border-white ">
            {message}
          </h1>
        )}

        <h1 className="dark:text-white mt-4 ">
          Are you sure to delete <b>{user.name}</b>?
        </h1>

        <div className="w-full flex laptop:flex-row phone:flex-col-reverse mt-7 laptop:justify-end gap-2 ">
          <button
            disabled={loading}
            className="border hover:bg-red-50 hover:border-red-700 hover:text-red-700 border-red-500 text-red-500 rounded-lg text-sm py-1 laptop:w-1/4 phone:w-full "
            onClick={() => {
              dispatch(setDeleteModal({ data: false }));
            }}
          >
            CANCEL
          </button>

          <button
            disabled={loading}
            className="border hover:bg-indigo-100 hover:border-indigo-700 hover:text-indigo-700 border-indigo-500 text-indigo-500 rounded-lg text-sm py-1 laptop:w-1/4 phone:w-full "
            onClick={() => {
              dispatch(setLoadingUser({ data: true }));
              deleteUser(id).then((data) => {
                dispatch(setMessage({ data: data.message }));
              });
            }}
          >
            SAVE
          </button>
        </div>
      </div>
    </>
  );
}

export function ModalUpdateUserPicture() {
  const dispatch = useDispatch();

  const { user, message, loading } = useSelector((state) => state.userSlice);
  const { user: currentUser } = useSelector((state) => state.auth);

  const [progress, setProgress] = useState(100);
  const [upload, setUpload] = useState(false);

  const [id, setId] = useState("");
  const [data, setData] = useState(null);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      dispatch(setLoadingUser({ data: true }));
      setUpload(true);

      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          let precentage = Math.floor((loaded * 100) / total);
          setProgress(precentage);
        },
      };

      // Store form data as object
      const formData = new FormData();
      formData.set("id", id);
      formData.set("picture", data[0], data[0].name);

      updatePict(config, formData).then(async (data) => {
        dispatch(setLoadingUser({ data: false }));
        dispatch(setMessage({ data: data.message }));

        if (
          currentUser.firstName === user.firstName &&
          currentUser.lastName === user.lastName
        ) {
          try {
            await API.get("/auth/verify").then(({ data }) => {
              data.data &&
                dispatch(
                  setUpdateUser({
                    data,
                  })
                );
            });
          } catch (error) {
            dispatch(setMessage({ data: error.message }));
          }
        }
      });
    } catch (error) {
      dispatch(setMessage({ data: error.message }));
    }
  };

  useEffect(() => {
    setId(user.id);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setUpload(false);
      }, 3000);
    }
  }, [progress]);

  useEffect(() => {
    if (message !== null) {
      dispatch(setLoadingUser({ data: false }));
      setTimeout(() => {
        dispatch(setMessage({ data: null }));
      }, 3000);
      setTimeout(() => {
        dispatch(setUpdateProfileModal({ data: false }));
      }, 5000);
    }
  }, [message]);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-screen h-screen z-50 bg-navy-700/80 "
        onClick={() => {
          dispatch(setUpdateProfileModal({ data: false }));
        }}
      ></div>

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[22.5rem] max-w-[35rem] h-auto rounded-lg py-4 px-6 z-[60] bg-white dark:bg-navy-800 ">
        <AiOutlineClose
          className="text-red-500 text-2xl absolute top-2 right-2 cursor-pointer "
          onClick={() => {
            dispatch(setUpdateProfileModal({ data: false }));
          }}
        />
        <h1 className="text-3xl text-indigo-500 dark:text-white">
          Update User Profile
        </h1>

        <hr className="dark:border-gray-400 my-4" />

        {message && (
          <h1 className="border border-indigo-500 text-indigo-500 text-center p-2 rounded-md dark:text-white dark:border-white mb-4 ">
            {message}
          </h1>
        )}

        <Dropzone
          onDrop={(file) => {
            setData(file);
          }}
        >
          {({ getRootProps, getInputProps }) => (
            <section>
              <div
                {...getRootProps()}
                className="w-full h-72 rounded-lg border-2 border-dashed border-gray-400 p-3 flex flex-col items-center justify-center gap-2 relative cursor-pointer "
              >
                <input {...getInputProps()} />
                <p className="text-gray-700 dark:text-white ">
                  {data
                    ? data[0]?.name
                    : "Drag 'n' drop some files here, or click to select files"}
                </p>
                {data && (
                  <p className="text-gray-700 dark:text-white ">
                    {converter(data[0].size)}
                  </p>
                )}

                {upload && (
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                    <div
                      className="bg-indigo-600 h-1.5 rounded-full dark:bg-white"
                      style={{ width: `${progress + "%"}` }}
                    ></div>
                    <p
                      className={`text-gray-700 dark:text-white flex items-center gap-2 mt-1 ${
                        progress === 100 && "animate-pulse"
                      } `}
                    >
                      <img
                        src={loadingimg}
                        alt={loadingimg}
                        srcSet={loadingimg}
                        className="w-5 h-5 animate-spin "
                      />
                      {progress === 100
                        ? "We finishing the process. Wait for a moment."
                        : `Uploading ${progress}%`}
                    </p>
                  </div>
                )}
              </div>
            </section>
          )}
        </Dropzone>

        <div className="w-full flex laptop:flex-row phone:flex-col-reverse mt-7 laptop:justify-end gap-2 ">
          <button
            disabled={loading}
            className="border hover:bg-red-50 hover:border-red-700 hover:text-red-700 border-red-500 text-red-500 rounded-lg text-sm py-1 laptop:w-1/4 phone:w-full "
            onClick={() => {
              dispatch(setUpdateProfileModal({ data: false }));
            }}
          >
            CANCEL
          </button>

          <button
            disabled={loading || data === null}
            className="border hover:bg-indigo-100 hover:border-indigo-700 hover:text-indigo-700 border-indigo-500 text-indigo-500 rounded-lg text-sm py-1 laptop:w-1/4 phone:w-full "
            onClick={handleSubmit}
          >
            SAVE
          </button>
        </div>
      </div>
    </>
  );
}
