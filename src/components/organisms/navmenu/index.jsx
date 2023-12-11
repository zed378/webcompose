import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useWindowSize from "@rooks/use-window-size";
import { Fade, Slide } from "react-awesome-reveal";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "@redux/features/auth/authSlice";

// assets
import home from "@assets/images/home.svg";
import dash from "@assets/images/dash.svg";
import stars from "@assets/images/stars.svg";
import send from "@assets/images/send.svg";
import wc from "@assets/images/wc.svg";
import logomobile from "@assets/images/logomobile.svg";
import { GrClose } from "react-icons/gr";

export default function NavMenu() {
  const [opacity, setOpacity] = useState("0.4");
  const [modal, setModal] = useState(false);
  const nav = useNavigate();

  const { innerWidth } = useWindowSize();
  const [isWeb, setIsWeb] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (innerWidth >= 1024) {
      setIsWeb(true);
    } else {
      setIsWeb(false);
    }
  }, [innerWidth]);

  return (
    <div className="focus:outline-none focus:border-none">
      <Slide direction="right">
        <svg
          width="48"
          height="49"
          viewBox="0 0 48 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer focus:outline-none focus:border-none"
          onClick={() => setModal(!modal)}
          onMouseEnter={() => setOpacity("0.7")}
          onMouseLeave={() => setOpacity("0.4")}
        >
          <rect
            y="0.5"
            width="48"
            height="48"
            rx="24"
            fill="white"
            fillOpacity={opacity}
          />
          <rect x="23" y="17.5" width="10" height="2" rx="1" fill="white" />
          <rect x="15" y="23.5" width="18" height="2" rx="1" fill="white" />
          <rect x="15" y="29.5" width="10" height="2" rx="1" fill="white" />
        </svg>
      </Slide>

      {isWeb && modal && (
        <div
          className="absolute top-22 right-9 z-[1] px-4 py-4 shadow bg-white rounded-box w-[280px] mt-2 flex flex-col gap-2"
          onMouseEnter={() => setModal(true)}
          onMouseLeave={() => setModal(false)}
        >
          {user && (
            <Fade direction="up" cascade duration={500}>
              <ul className="flex items-start gap-2">
                <div
                  className="w-14 h-14 rounded-full overflow-hidden bg-cover bg-center "
                  style={{
                    backgroundImage: `url(${
                      process.env.REACT_APP_PROFILE + user?.picture
                    })`,
                  }}
                ></div>
                <div className="m-0">
                  <h1 className="m-0 font-medium ">
                    {user?.firstName} {user?.lastName}
                  </h1>
                  <p className="text-zinc-500 text-sm m-0 font-light ">
                    {user?.email}
                  </p>
                  <p className="text-zinc-500 text-xs m-0 font-light ">
                    {user?.role}
                  </p>
                </div>
              </ul>
              <hr />
            </Fade>
          )}
          <Fade direction="up" cascade duration={300}>
            {/* home */}
            <div
              className="flex items-start rounded-xl hover:bg-slate-100 py-1 px-1 cursor-pointer"
              onClick={() => {
                nav("/");
                setModal(!modal);
              }}
            >
              <div className="w-[20%] pl-2 pt-1">
                <img src={home} alt={home} className="w-[22px] h-auto" />
              </div>

              <div className="flex flex-col w-[80%]">
                <h1 className="font-bold text-[1rem] text-black m-0 p-0">
                  Home
                </h1>
                <p className="text-sm text-slate-600">
                  Our General Information
                </p>
              </div>
            </div>
            {/* end of home */}

            {/* dashboard */}
            {user && (
              <div
                className="flex items-start rounded-xl hover:bg-slate-100 py-1 px-1 cursor-pointer"
                onClick={() => {
                  nav("/dashboard/default");
                  setModal(!modal);
                }}
              >
                <div className="w-[20%] pl-2 pt-1">
                  <img src={dash} alt={dash} className="w-[22px] h-auto" />
                </div>

                <div className="flex flex-col w-[80%]">
                  <h1 className="font-bold text-[1rem] text-black m-0 p-0">
                    Dashboard
                  </h1>
                  <p className="text-sm text-slate-600">
                    Place for control everything
                  </p>
                </div>
              </div>
            )}
            {/* end of dashboard */}

            {/* services */}
            <div
              className="flex items-start rounded-xl hover:bg-slate-100 py-1 px-1 cursor-pointer"
              onClick={() => {
                nav("/services");
                setModal(!modal);
              }}
            >
              <div className="w-[20%] pl-2 pt-1">
                <img src={stars} alt={stars} className="w-[22px] h-auto" />
              </div>

              <div className="flex flex-col w-[80%]">
                <h1 className="font-bold text-[1rem] text-black m-0 p-0">
                  Services
                </h1>
                <p className="text-sm text-slate-600">
                  Explanation about services we provide
                </p>
              </div>
            </div>
            {/* end of services */}

            {/* contact us */}
            <div
              className="flex items-start rounded-xl hover:bg-slate-100 py-1 px-1 cursor-pointer"
              onClick={() => {
                nav("/contact");
                setModal(!modal);
              }}
            >
              <div className="w-[20%] pl-2 pt-1">
                <img src={send} alt={send} className="w-[22px] h-auto" />
              </div>

              <div className="flex flex-col w-[80%]">
                <h1 className="font-bold text-[1rem] text-black m-0 p-0">
                  Contact Us
                </h1>
                <p className="text-sm text-slate-600">
                  How we can share our ideas together
                </p>
              </div>
            </div>
            {/* end of contact us */}
          </Fade>

          {!user ? (
            <Fade direction="down" duration={500} cascade>
              <ul className="px-1 flex flex-col gap-3 mt-7">
                <li
                  className="py-3 flex justify-center bg-[#7859B6] border-[#7859B6] hover:bg-violet-600 text-white rounded-lg cursor-pointer "
                  onClick={() => {
                    nav("/register");
                    setModal(!modal);
                  }}
                >
                  Register
                </li>

                <li
                  className="py-3 flex justify-center bg-white hover:bg-violet-100 border border-[#7859B6] text-[#7859B6] rounded-lg cursor-pointer "
                  onClick={() => {
                    nav("/login");
                    setModal(!modal);
                  }}
                >
                  Login
                </li>
              </ul>
            </Fade>
          ) : (
            <Fade direction="down" duration={500} cascade>
              <ul className="px-1 flex flex-col gap-3 mt-7">
                <li
                  className="py-3 flex justify-center bg-[#7859B6] border-[#7859B6] hover:bg-violet-600 text-white rounded-lg cursor-pointer "
                  onClick={() => {
                    dispatch(removeUser());
                    setModal(!modal);
                  }}
                >
                  Logout
                </li>
              </ul>
            </Fade>
          )}
        </div>
      )}

      {!isWeb && modal && (
        <div className="w-full h-screen bg-white absolute top-0 right-0 z-[30]">
          <div className="flex justify-between items-center px-4 py-3">
            <div className="flex items-center gap-3">
              <img src={logomobile} alt={logomobile} />
              <img src={wc} alt={wc} className="h-6" />
            </div>

            <GrClose size={20} onClick={() => setModal(false)} />
          </div>
          <hr />

          {user && (
            <Fade direction="up" cascade duration={500}>
              <ul className="flex items-start gap-5 p-4">
                <div
                  className="w-14 h-14 rounded-full overflow-hidden bg-cover bg-center "
                  style={{
                    backgroundImage: `url(${
                      process.env.REACT_APP_PROFILE + user?.picture
                    })`,
                  }}
                ></div>
                <div className="m-0">
                  <h1 className="m-0 font-medium ">
                    {user?.firstName} {user?.lastName}
                  </h1>
                  <p className="text-zinc-500 text-sm m-0 font-light ">
                    {user?.email}
                  </p>
                  <p className="text-zinc-500 text-xs m-0 font-light ">
                    {user?.role}
                  </p>
                </div>
              </ul>
              <hr />
            </Fade>
          )}

          <div className="px-4 py-10 shadow bg-white w-full h-auto flex flex-col gap-2 mt-5 rounded-lg">
            <Fade direction="up" cascade duration={300}>
              {/* home */}
              <div
                className="flex items-start rounded-xl hover:bg-slate-100 py-1 px-1 cursor-pointer gap-5"
                onClick={() => {
                  nav("/");
                  setModal(!modal);
                }}
              >
                <div className="pl-2 pt-1">
                  <img src={home} alt={home} className="w-[22px] h-auto" />
                </div>

                <div className="flex flex-col w-[80%]">
                  <h1 className="font-bold text-[1rem] text-black m-0 p-0">
                    Home
                  </h1>
                  <p className="text-sm text-slate-600">
                    Our General Information
                  </p>
                </div>
              </div>
              {/* end of home */}

              {/* dashboard */}
              {user && (
                <div
                  className="flex items-start rounded-xl hover:bg-slate-100 py-1 px-1 cursor-pointer gap-5"
                  onClick={() => {
                    nav("/dashboard/default");
                    setModal(!modal);
                  }}
                >
                  <div className="pl-2 pt-1">
                    <img src={dash} alt={dash} className="w-[22px] h-auto" />
                  </div>

                  <div className="flex flex-col w-[80%]">
                    <h1 className="font-bold text-[1rem] text-black m-0 p-0">
                      Dashboard
                    </h1>
                    <p className="text-sm text-slate-600">
                      Place for control everything
                    </p>
                  </div>
                </div>
              )}
              {/* end of dashboard */}

              {/* services */}
              <div
                className="flex items-start rounded-xl hover:bg-slate-100 py-1 px-1 cursor-pointer gap-5"
                onClick={() => {
                  nav("/services");
                  setModal(!modal);
                }}
              >
                <div className="pl-2 pt-1">
                  <img src={stars} alt={stars} className="w-[22px] h-auto" />
                </div>

                <div className="flex flex-col w-[80%]">
                  <h1 className="font-bold text-[1rem] text-black m-0 p-0">
                    Services
                  </h1>
                  <p className="text-sm text-slate-600">
                    Explanation about services we provide
                  </p>
                </div>
              </div>
              {/* end of services */}

              {/* contact us */}
              <div
                className="flex items-start rounded-xl hover:bg-slate-100 py-1 px-1 cursor-pointer gap-5"
                onClick={() => {
                  nav("/contact");
                  setModal(!modal);
                }}
              >
                <div className="pl-2 pt-1">
                  <img src={send} alt={send} className="w-[22px] h-auto" />
                </div>

                <div className="flex flex-col w-[80%]">
                  <h1 className="font-bold text-[1rem] text-black m-0 p-0">
                    Contact Us
                  </h1>
                  <p className="text-sm text-slate-600">
                    How we can share our ideas together
                  </p>
                </div>
              </div>
              {/* end of contact us */}
            </Fade>

            {!user ? (
              <Fade direction="down" duration={500} cascade>
                <ul className="px-1 flex flex-col gap-3 mt-7">
                  <li
                    className="py-3 flex justify-center bg-[#7859B6] border-[#7859B6] hover:bg-violet-600 text-white rounded-lg cursor-pointer "
                    onClick={() => {
                      nav("/register");
                      setModal(!modal);
                    }}
                  >
                    Register
                  </li>

                  <li
                    className="py-3 flex justify-center bg-white hover:bg-violet-100 border border-[#7859B6] text-[#7859B6] rounded-lg cursor-pointer "
                    onClick={() => {
                      nav("/login");
                      setModal(!modal);
                    }}
                  >
                    Login
                  </li>
                </ul>
              </Fade>
            ) : (
              <Fade direction="down" duration={500} cascade>
                <ul className="px-1 flex flex-col gap-3 mt-7">
                  <li
                    className="py-3 flex justify-center bg-[#7859B6] border-[#7859B6] hover:bg-violet-600 text-white rounded-lg cursor-pointer "
                    onClick={() => {
                      dispatch(removeUser());
                      setModal(!modal);
                    }}
                  >
                    Logout
                  </li>
                </ul>
              </Fade>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
