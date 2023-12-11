import { useState, useEffect } from "react";
import useWindowSize from "@rooks/use-window-size";
import { useSelector } from "react-redux";
import { Fade } from "react-awesome-reveal";

// components
import Card from "@components/card";
import OtpInput from "react-otp-input";

// assets
import { MdLockReset } from "react-icons/md";
import { FaLock, FaEye, FaEyeSlash, FaRegCheckCircle } from "react-icons/fa";
import loadingimg from "@assets/images/loadingimg.svg";

// hooks
import { requestOTP, resetPassword } from "@hooks/authHooks";

const Upload = () => {
  const { user } = useSelector((state) => state.auth);

  const [pass, setPass] = useState("");
  const [confPass, setConfPass] = useState("");
  const [passMsg, setPassMsg] = useState("");
  const [isReqOTP, setIsReqOTP] = useState(false);
  const [otp, setOtp] = useState("");
  const [msg, setMsg] = useState("");

  const [input1, setInput1] = useState(false);
  const [input2, setInput2] = useState(false);

  const [otpLoading, setOtpLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);

  const [style, setStyle] = useState({});

  const { innerWidth } = useWindowSize();
  useEffect(() => {
    if (innerWidth >= 1440) {
      setStyle({
        width: "54px",
        height: "54px",
        fontSize: "16px",
      });
    } else if (innerWidth >= 1280 && innerWidth < 1440) {
      setStyle({
        width: "50px",
        height: "50px",
        fontSize: "16px",
      });
    } else if (innerWidth >= 1024 && innerWidth < 1280) {
      setStyle({
        width: "46px",
        height: "46px",
        fontSize: "16px",
      });
    } else if (innerWidth >= 640 && innerWidth < 1024) {
      setStyle({
        width: "42px",
        height: "42px",
        fontSize: "16px",
      });
    } else if (innerWidth < 640) {
      setStyle({
        width: "32px",
        height: "32px",
        fontSize: "12px",
      });
    }
  }, [innerWidth]);

  const request = () => {
    if (isReqOTP) {
      alert("You already requested");
    } else {
      setOtpLoading(true);
      requestOTP(user?.email)
        .then((data) => {
          setMsg(data?.message);
          setIsReqOTP(true);
          setOtpLoading(false);

          setTimeout(() => {
            setMsg("");
          }, 5000);
        })
        .catch((err) => {
          setMsg(err?.response?.data?.message);
          setOtpLoading(false);
          setIsReqOTP(false);

          setTimeout(() => {
            setMsg("");
          }, 5000);
        });
    }
  };

  const reset = () => {
    setSubmitLoading(true);
    resetPassword(user?.email, confPass, parseInt(otp))
      .then((data) => {
        setMsg(data?.message);
        setSubmitLoading(false);
        setPass("");
        setConfPass("");
        setIsReqOTP(false);
        setPassMsg("");
        setOtp("");

        setTimeout(() => {
          setMsg("");
        }, 5000);
      })
      .catch((err) => {
        setMsg(err?.response?.data?.message);
        setSubmitLoading(false);
        setIsReqOTP(false);
        setOtp("");

        setTimeout(() => {
          setMsg("");
        }, 5000);
      });
  };

  useEffect(() => {
    if (confPass.length >= 3 && confPass === pass) {
      setPassMsg("Your password match");
    } else if (confPass.length >= 3 && confPass !== pass) {
      setPassMsg("Your password doesn't match");
    } else {
      setPassMsg("");
    }
  }, [confPass]);

  return (
    <Card className="h-full w-full rounded-[20px] bg-white bg-clip-border p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none 2xl:grid-cols-12">
      <form>
        <div className="w-full flex items-center justify-between ">
          <h1 className="text-2xl font-bold text-navy-700 dark:text-white flex items-center gap-1 ">
            <MdLockReset className="text-3xl" /> Reset Password
          </h1>

          <div
            className={`border text-sm flex items-center gap-1 py-1 px-2 rounded-lg ${
              isReqOTP
                ? "text-green-500 border-green-500 hover:bg-green-100 cursor-not-allowed"
                : "text-indigo-500 dark:text-white border-indigo-500 dark:border-white hover:bg-indigo-50 dark:hover:bg-indigo-500 cursor-pointer"
            } `}
            onClick={request}
          >
            {otpLoading && (
              <img
                src={loadingimg}
                alt={loadingimg}
                srcSet={loadingimg}
                className="w-4 h-4 animate-spin mr-1 "
              />
            )}
            {isReqOTP && <FaRegCheckCircle />}
            {isReqOTP ? "Requested" : "Request OTP"}
          </div>
        </div>

        <Fade direction="up" duration={500}>
          {(msg && msg.includes("sent")) || msg.includes("successfully") ? (
            <h1 className="text-center px-3 py-2 border border-green-500 text-green-500 rounded-lg my-3 ">
              {msg}
            </h1>
          ) : (
            <h1
              className={`text-center px-3 py-2 border border-red-500  text-red-500 rounded-lg my-3 ${
                msg === "" && "hidden"
              } `}
            >
              {msg}
            </h1>
          )}
        </Fade>

        <div className="w-full flex flex-col gap-2 mt-2 ">
          <div className="w-full flex flex-col gap-1 ">
            <label
              htmlFor="password"
              className="text-navy-700 dark:text-white text-xl "
            >
              Password
            </label>

            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <FaLock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type={input1 ? "text" : "password"}
                id="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                className="block w-full px-4 py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-navy-300 focus:border-navy-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none "
                placeholder="Password"
                pattern=".{6,}"
                title="Must contain at least 6 or more characters"
                required
              />
              <button
                type="submit"
                className="dark:text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-1 text-gray-900 "
                onClick={() => setInput1(!input1)}
              >
                {input1 ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>

          <div className="w-full flex flex-col gap-1 ">
            <label
              htmlFor="password1"
              className="text-navy-700 dark:text-white text-xl "
            >
              Confirm Password
            </label>

            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <FaLock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type={input2 ? "text" : "password"}
                id="password1"
                value={confPass}
                onChange={(e) => setConfPass(e.target.value)}
                className="block w-full px-4 py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-navy-300 focus:border-navy-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none "
                placeholder="Confirm password"
                pattern=".{6,}"
                title="Must contain at least 6 or more characters"
                required
              />
              <button
                type="submit"
                className="dark:text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-1 text-gray-900 "
                onClick={() => setInput2(!input2)}
              >
                {input1 ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>

            {passMsg && (
              <p
                className={`${
                  passMsg.includes("doesn't")
                    ? "text-red-500"
                    : "text-green-500"
                } text-xs`}
              >
                {passMsg}
              </p>
            )}
          </div>

          <div className="w-full flex flex-col gap-1 ">
            <label
              htmlFor="password1"
              className="text-navy-700 dark:text-white text-xl "
            >
              Confirm OTP
            </label>
            <OtpInput
              value={otp}
              onChange={(val) => setOtp(val)}
              numInputs={6}
              isInputNum={true}
              shouldAutoFocus={true}
              renderInput={(props) => (
                <input
                  {...props}
                  className="block text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-navy-300 focus:border-navy-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none "
                />
              )}
              inputStyle={style}
              renderSeparator={<span className="mx-1">-</span>}
              focusStyle={{
                border: "2px solid gray",
                outline: "none",
              }}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={
            pass !== confPass ||
            !isReqOTP ||
            !otp ||
            otp.length < 6 ||
            submitLoading
              ? true
              : false
          }
          className={`w-full flex items-center justify-center gap-1 text-indigo-500 dark:text-white rounded-lg border border-indigo-500 dark:border-white py-1 px-2 hover:bg-indigo-50 dark:hover:bg-indigo-500 text-xl mt-3 ${
            pass !== confPass || !isReqOTP || !otp || otp.length < 6
              ? "cursor-not-allowed"
              : "cursor-pointer"
          }
          ${submitLoading && "animate-pulse"}
          `}
          onClick={reset}
        >
          {submitLoading && (
            <img
              src={loadingimg}
              alt={loadingimg}
              srcSet={loadingimg}
              className="w-5 h-5 animate-spin mr-1 "
            />
          )}{" "}
          Submit
        </button>
      </form>
    </Card>
  );
};

export default Upload;
