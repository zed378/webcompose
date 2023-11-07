import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "@redux/features/auth/authSlice";
import { API } from "@hooks/api";

// Hooks
import { countryData } from "@hooks/countryCodes";
import {
  messageSchema,
  loginSchema,
  registerSchema,
} from "@hooks/inputValidation";

// Components
import LoaderAnim from "@components/atoms/loader";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        dial: "+62",
        phone: "",
        message: "",
        checked: false,
      }}
      validationSchema={messageSchema}
      onSubmit={async (values, { resetForm }) => {
        setLoading(true);

        await API.post("/mail/send", {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phone: values.dial + values.phone,
          message: values.message,
        })
          .then((data) => {
            setLoading(false);
            resetForm();
            setMsg(data.data.message);
            setTimeout(() => {
              setMsg("");
            }, 5000);
          })
          .catch((err) => {
            setLoading(false);
            setMsg(err.data.message.solution);
            setTimeout(() => {
              setMsg("");
            }, 5000);
          });
      }}
    >
      {({ errors, touched, values }) => (
        <Form className="ultra:w-[40rem] desktop:w-[35rem] phone:w-full phone:mt-10 bg-white rounded-xl tablet:px-10 phone:px-5 tablet:py-9 phone:py-7 ">
          <Fade direction="down" cascade duration={500}>
            <h1 className="font-medium mb-10 text-lg ">
              We want to hear your needs
            </h1>

            <h1 className="mb-10 text-lg ">
              Our friendly team would love to hear from you.
            </h1>
          </Fade>

          <Fade direction="up" duration={500}>
            {msg && msg.includes("Success") ? (
              <h1 className="text-center px-3 py-2 border border-violet-500 bg-violet-200 text-violet-500 rounded-lg mb-3 ">
                {msg}
              </h1>
            ) : (
              <h1
                className={`text-center px-3 py-2 border border-red-500 bg-red-200 text-red-500 rounded-lg mb-3 ${
                  msg === "" && "hidden"
                } `}
              >
                {msg}
              </h1>
            )}
          </Fade>

          <div className="w-full flex justify-between laptop:flex-row phone:flex-col gap-3 items-start mb-6 ">
            <Fade direction="down" cascade duration={500}>
              <ul className="w-full flex flex-col gap-2 ">
                <label className="text-lg" htmlFor="firstName">
                  First Name
                </label>
                <Field
                  className="outline-none border border-1 border-gray-300 rounded-lg py-3 px-3 text-sm w-full "
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  disabled={loading}
                />
                {errors.firstName && touched.firstName ? (
                  <div className="text-xs text-red-500 ">
                    {errors.firstName}
                  </div>
                ) : null}
              </ul>
            </Fade>
            <Fade direction="down" cascade duration={500}>
              <ul className="w-full flex flex-col gap-2 ">
                <label className="text-lg" htmlFor="lastName">
                  Last Name
                </label>
                <Field
                  className="outline-none border border-1 border-gray-300 rounded-lg py-3 px-3 text-sm w-full "
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  disabled={loading}
                />
                {errors.lastName && touched.lastName ? (
                  <div className="text-xs text-red-500 ">{errors.lastName}</div>
                ) : null}
              </ul>
            </Fade>
          </div>

          <Fade direction="down" cascade duration={500}>
            <ul className="w-full flex flex-col gap-2 mb-6 ">
              <label className="text-lg" htmlFor="email">
                Email
              </label>
              <Field
                className="outline-none border border-1 border-gray-300 rounded-lg py-3 px-3 text-sm w-full "
                id="email"
                name="email"
                type="email"
                placeholder="you@yourcompany.com"
                disabled={loading}
              />
              {errors.email && touched.email ? (
                <div className="text-xs text-red-500 ">{errors.email}</div>
              ) : null}{" "}
            </ul>
          </Fade>

          <Fade direction="down" cascade duration={500}>
            <ul className="w-full flex flex-col gap-2 mb-6 ">
              <label className="text-lg" htmlFor="phone">
                Phone
              </label>
              <div className="w-full flex items-start tablet:gap-3 phone:gap-2 ">
                <Field
                  className="outline-none border border-1 border-gray-300 rounded-lg py-3 px-1 text-sm w-1/5 "
                  name="dial"
                  id="dial"
                  as="select"
                  disabled={loading}
                >
                  <option value={"+" + 62}>ID (+62)</option>
                  {countryData.map((item, idx) => (
                    <option key={idx} value={"+" + item.Dial}>
                      {item.Name} (+{item.Dial})
                    </option>
                  ))}
                </Field>
                <Field
                  className="outline-none border border-1 border-gray-300 rounded-lg py-3 px-3 text-sm w-full "
                  id="phone"
                  name="phone"
                  type="number"
                  value={values.phone}
                  placeholder="8123123123"
                  disabled={loading}
                />
              </div>
              {errors.phone && touched.phone ? (
                <div className="text-xs text-red-500 ">{errors.phone}</div>
              ) : null}
            </ul>
          </Fade>

          <Fade direction="down" cascade duration={500}>
            <ul className="w-full flex flex-col gap-2 mb-6 ">
              <label className="text-lg" htmlFor="message">
                Message
              </label>
              <Field
                className="outline-none border border-1 border-gray-300 rounded-lg py-3 px-3 text-sm w-full h-[10rem] resize-none "
                id="message"
                name="message"
                type="text"
                as="textarea"
                disabled={loading}
              />
              {errors.message && touched.message ? (
                <div className="text-xs text-red-500 ">{errors.message}</div>
              ) : null}
            </ul>
          </Fade>

          <Fade direction="down" cascade duration={500}>
            <ul className="w-full flex flex-col gap-2 mb-6 ">
              <div className="w-full flex items-center gap-3">
                <Field
                  id="checked"
                  type="checkbox"
                  name="checked"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  disabled={loading}
                />
                <label className="text-lg" htmlFor="checked">
                  You agree to our friendly privacy policy.
                </label>
              </div>
              {errors.checked && touched.checked ? (
                <div className="text-xs text-red-500 ">{errors.checked}</div>
              ) : null}
            </ul>
          </Fade>

          <Fade direction="down" cascade duration={500}>
            <button
              disabled={loading}
              type="submit"
              className={`w-full text-white rounded-lg bg-[#7F56D9] hover:bg-[#6438c2] py-3 text-sm disabled:cursor-wait `}
            >
              {loading && <LoaderAnim />}{" "}
              {loading ? (
                <span className="animate-pulse">
                  Sending Message. Please, wait.
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </Fade>
        </Form>
      )}
    </Formik>
  );
}

export function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();

  const nav = useNavigate();

  return (
    <Formik
      initialValues={{
        user: "",
        password: "",
      }}
      validationSchema={loginSchema}
      onSubmit={async (values, { resetForm }) => {
        setLoading(true);

        await API.post("/auth/login", {
          user: values.user,
          password: values.password,
        })
          .then((data) => {
            setLoading(false);
            dispatch(
              setUser({
                data: data.data,
              })
            );
            resetForm();
            setMsg(data.data.message);
            setTimeout(() => {
              setMsg("");
            }, 5000);
          })
          .catch((err) => {
            setLoading(false);
            setMsg(err.response.data.message);
            setTimeout(() => {
              setMsg("");
            }, 5000);
          });
      }}
    >
      {({ errors, touched, values }) => (
        <Form className=" phone:w-full bg-white rounded-xl tablet:px-10 phone:px-5 tablet:py-9 phone:py-7 ">
          <Fade direction="up">
            <h1 className="text-violet-500 text-center font-medium mb-2 ultra:text-6xl pc:text-4xl desktop:text-4xl laptop:text-4xl tablet:text-4xl phone:text-3xl w-full ">
              LOGIN
            </h1>
          </Fade>

          <Fade direction="down">
            <p className="text-center font-bold ">Welcome to Web Compose</p>
            <p className="text-center mb-10 ">
              Makes your ideas happen with Us!
            </p>
          </Fade>

          <Fade direction="up" duration={500}>
            {msg && msg.includes("Success") ? (
              <h1 className="text-center px-3 py-2 border border-violet-500 bg-violet-200 text-violet-500 rounded-lg mb-3 ">
                {msg}
              </h1>
            ) : (
              <h1
                className={`text-center px-3 py-2 border border-red-500 bg-red-200 text-red-500 rounded-lg mb-3 ${
                  msg === "" && "hidden"
                } `}
              >
                {msg}
              </h1>
            )}
          </Fade>

          <Fade direction="down" cascade duration={500}>
            <ul className="w-full flex flex-col gap-2 mb-6 ">
              <label className="text-lg" htmlFor="user">
                Email or Username
              </label>
              <Field
                className="outline-none border border-1 border-gray-300 rounded-lg py-3 px-3 text-sm w-full "
                id="user"
                name="user"
                placeholder="you@yourcompany.com"
                disabled={loading}
              />
              {errors.user && touched.user ? (
                <div className="text-xs text-red-500 ">{errors.user}</div>
              ) : null}{" "}
            </ul>
          </Fade>

          <Fade direction="down" cascade duration={500}>
            <ul className="w-full flex flex-col gap-2 ">
              <label className="text-lg" htmlFor="firstName">
                Password
              </label>
              <Field
                className="outline-none border border-1 border-gray-300 rounded-lg py-3 px-3 text-sm w-full "
                id="password"
                name="password"
                placeholder="Password"
                type="password"
                disabled={loading}
              />
              {errors.password && touched.password ? (
                <div className="text-xs text-red-500 ">{errors.password}</div>
              ) : null}
            </ul>
          </Fade>

          <Fade direction="down" cascade duration={500}>
            <button
              disabled={loading}
              type="submit"
              className={`w-full text-white rounded-lg bg-[#7F56D9] hover:bg-[#6438c2] py-3 text-base disabled:cursor-wait ${
                loading && "animate-pulse"
              } mt-10 `}
            >
              {loading && <LoaderAnim />} Login
            </button>
          </Fade>
          <Fade direction="up" cascade duration={500}>
            <p
              className="text-sm text-center mt-2 cursor-pointer "
              onClick={() => nav("/register")}
            >
              Don't have account? Click here to <b>Register!</b>
            </p>
          </Fade>
        </Form>
      )}
    </Formik>
  );
}

export function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const nav = useNavigate();

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }}
      validationSchema={registerSchema}
      onSubmit={async (values, { resetForm }) => {
        setLoading(true);

        await API.post("/auth/register", {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
        })
          .then((data) => {
            setLoading(false);
            resetForm();
            setMsg(data.data.message);
            setTimeout(() => {
              setMsg("");
            }, 8000);
          })
          .catch((err) => {
            setLoading(false);
            setMsg(err.response.data.message);
            setTimeout(() => {
              setMsg("");
            }, 5000);
          });
      }}
    >
      {({ errors, touched, values }) => (
        <Form className=" phone:w-full bg-white rounded-xl tablet:px-10 phone:px-5 tablet:py-9 phone:py-7 ">
          <Fade direction="up">
            <h1 className="text-violet-500 text-center font-medium mb-2 ultra:text-6xl pc:text-4xl desktop:text-4xl laptop:text-4xl tablet:text-4xl phone:text-3xl w-full ">
              REGISTER
            </h1>
          </Fade>

          <Fade direction="down">
            <p className="text-center font-bold ">Welcome to Web Compose</p>
            <p className="text-center mb-10 ">
              Makes your ideas happen with Us!
            </p>
          </Fade>

          <Fade direction="up" duration={500}>
            {msg && msg.includes("Success") ? (
              <h1 className="text-center px-3 py-2 border border-violet-500 bg-violet-200 text-violet-500 rounded-lg mb-3 ">
                {msg}
              </h1>
            ) : (
              <h1
                className={`text-center px-3 py-2 border border-red-500 bg-red-200 text-red-500 rounded-lg mb-3 ${
                  msg === "" && "hidden"
                } `}
              >
                {msg}
              </h1>
            )}
          </Fade>

          <Fade direction="down" cascade duration={500}>
            <ul className="w-full flex flex-col gap-2 mb-6 ">
              <label className="text-lg" htmlFor="firstName">
                First Name
              </label>
              <Field
                className="outline-none border border-1 border-gray-300 rounded-lg py-3 px-3 text-sm w-full "
                id="firstName"
                name="firstName"
                placeholder="e.g. Zed"
                disabled={loading}
              />
              {errors.firstName && touched.firstName ? (
                <div className="text-xs text-red-500 ">{errors.firstName}</div>
              ) : null}{" "}
            </ul>
          </Fade>

          <Fade direction="down" cascade duration={500}>
            <ul className="w-full flex flex-col gap-2 mb-6 ">
              <label className="text-lg" htmlFor="lastName">
                Last Name
              </label>
              <Field
                className="outline-none border border-1 border-gray-300 rounded-lg py-3 px-3 text-sm w-full "
                id="lastName"
                name="lastName"
                placeholder="e.g. Trueblood"
                disabled={loading}
              />
              {errors.lastName && touched.lastName ? (
                <div className="text-xs text-red-500 ">{errors.lastName}</div>
              ) : null}{" "}
            </ul>
          </Fade>

          <Fade direction="down" cascade duration={500}>
            <ul className="w-full flex flex-col gap-2 mb-6 ">
              <label className="text-lg" htmlFor="email">
                Email
              </label>
              <Field
                className="outline-none border border-1 border-gray-300 rounded-lg py-3 px-3 text-sm w-full "
                id="email"
                name="email"
                type="email"
                placeholder="e.g. zed@mail.com"
                disabled={loading}
              />
              {errors.email && touched.email ? (
                <div className="text-xs text-red-500 ">{errors.email}</div>
              ) : null}{" "}
            </ul>
          </Fade>

          <Fade direction="down" cascade duration={500}>
            <ul className="w-full flex flex-col gap-2 ">
              <label className="text-lg" htmlFor="firstName">
                Password
              </label>
              <Field
                className="outline-none border border-1 border-gray-300 rounded-lg py-3 px-3 text-sm w-full "
                id="password"
                name="password"
                placeholder="Password"
                type="password"
                disabled={loading}
              />
              {errors.password && touched.password ? (
                <div className="text-xs text-red-500 ">{errors.password}</div>
              ) : null}
            </ul>
          </Fade>

          <Fade direction="down" cascade duration={500}>
            <button
              disabled={loading}
              type="submit"
              className={`w-full text-white rounded-lg bg-[#7F56D9] hover:bg-[#6438c2] py-3 text-base disabled:cursor-wait ${
                loading && "animate-pulse"
              } mt-10 `}
            >
              {loading && <LoaderAnim />} Register
            </button>
          </Fade>
          <Fade direction="up" cascade duration={500}>
            <p
              className="text-sm text-center mt-2 cursor-pointer "
              onClick={() => nav("/login")}
            >
              ALready have account? Click here to <b>Login!</b>
            </p>
          </Fade>
        </Form>
      )}
    </Formik>
  );
}
