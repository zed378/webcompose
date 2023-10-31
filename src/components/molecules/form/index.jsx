import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Formik, Form, Field } from "formik";

import { countryData } from "@hooks/countryCodes";
import { messageSchema } from "@hooks/inputValidation";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [dial, setDial] = useState(null);

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        dial: "",
        phone: dial + "",
        message: "",
        checked: false,
      }}
      validationSchema={messageSchema}
      onSubmit={(values, { resetForm }) => {
        // same shape as initial values
        console.log(values);

        // resetForm();
      }}
    >
      {({ errors, touched, values }) => (
        <Form className="ultra:w-[40rem] desktop:w-[35rem] phone:w-full phone:mt-10  bg-white rounded-xl px-10 py-9 ">
          <Fade direction="down" cascade duration={500}>
            <h1 className="font-medium mb-10 text-lg ">
              We want to hear your needs
            </h1>

            <h1 className="mb-10 text-lg ">
              Our friendly team would love to hear from you.
            </h1>
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
              <div className="w-full flex flex-wrap items-start gap-4 ">
                <Field
                  className="outline-none border border-1 border-gray-300 rounded-lg py-3 px-1 text-sm w-1/5 "
                  name="dial"
                  id="dial"
                  as="select"
                >
                  <option value={"+" + 62}>ID (+62)</option>
                  {countryData.map((item, idx) => (
                    <option
                      key={idx}
                      value={"+" + item.Dial}
                      onClick={() => setDial("+" + item.Dial)}
                    >
                      {item.Name} (+{item.Dial})
                    </option>
                  ))}
                </Field>
                <Field
                  className="outline-none border border-1 border-gray-300 rounded-lg py-3 px-3 text-sm w-[75%] "
                  id="phone"
                  name="phone"
                  type="number"
                  value={values.phone}
                  placeholder="8123123123"
                />
                {errors.phone && touched.phone ? (
                  <div className="text-xs text-red-500 ">{errors.phone}</div>
                ) : null}{" "}
              </div>
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
              type="submit"
              className="w-full text-white rounded-lg bg-[#7F56D9] hover:bg-[#6438c2] py-3 text-sm "
            >
              Send Message
            </button>
          </Fade>
        </Form>
      )}
    </Formik>
  );
}
