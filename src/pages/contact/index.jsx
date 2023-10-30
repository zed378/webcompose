import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { Formik, Form, Field } from "formik";

// component
import Navbar from "@components/molecules/navbar";
import Footer from "@components/organisms/footer";
import { countryData } from "@hooks/countryCodes";

// assets
import bgContact from "@assets/images/bgContact.webp";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

import { messageSchema } from "@hooks/inputValidation";

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [dial, setDial] = useState(null);

  return (
    <>
      <div className="min-h-screen w-full tablet:p-3 phone:p-1">
        <div className="w-full min-h-screen relative laptop:overflow-hidden rounded-2xl tablet:rounded-[40px] laptop:rounded-[45px] bg-gradient-to-r from-[#9B73EC] to-[#634996] ultra:px-8 ultra:py-10 pc:px-7 pc:py-9 desktop:px-6 desktop:py-8 laptop:px-5 laptop:py-7 tablet:px-4 tablet:py-6 p-3">
          <Navbar />

          <Fade triggerOnce>
            <img
              src={bgContact}
              alt={bgContact}
              className="absolute -bottom-24 -left-14 hidden laptop:block laptop:scale-75 laptop:-bottom-24 laptop:-left-14 pc:scale-100 pc:-bottom-24 pc:-left-14 ultra:scale-110 ultra:-bottom-24 ultra:-left-14 w-[700px] "
            />
          </Fade>

          <Fade direction="up">
            <h1 className="text-white font-light mt-16 mb-10 ultra:text-6xl pc:text-4xl desktop:text-4xl laptop:text-4xl tablet:text-4xl phone:text-3xl ">
              CONTACT US
            </h1>
          </Fade>

          <div className="w-full flex justify-between flex-wrap items-start ">
            {/* Contact Info */}
            <div className="ultra:w-1/2 flex items-start gap-20 ">
              <Fade direction="up" cascade duration={500}>
                <ul className="text-white flex flex-col gap-5 ">
                  <CiMail className="text-3xl " />
                  <h1 className="text-white ">Email</h1>

                  <p className="text-white font-thin ">
                    Our friendly team is here to help.
                  </p>
                  <a href="mailto:contact@webcompose.id">
                    contact@webcompose.id
                  </a>
                </ul>
              </Fade>

              <Fade direction="up" cascade duration={500}>
                <ul className=" text-white flex flex-col gap-5 ">
                  <BsTelephone className="text-3xl " />
                  <h1 className="text-white ">Phone</h1>
                  <p className="text-white font-thin ">
                    Mon-Fri from 8am to 5pm.
                  </p>
                  <a href="tel:+6283832736223">+62 838 3273 6223</a>
                </ul>
              </Fade>
            </div>
            {/* End Of Contact Info */}

            {/* Form */}
            <div className="ultra:w-1/2 flex justify-end ultra:pr-32 ">
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

                  resetForm();
                }}
              >
                {({ errors, touched, values }) => (
                  <Form className="ultra:w-[40rem] pc:w-[35rem] bg-white rounded-xl px-10 py-9 ">
                    <Fade direction="down" cascade duration={500}>
                      <h1 className="font-medium mb-10 text-lg ">
                        We want to hear your needs
                      </h1>

                      <h1 className="mb-10 text-lg ">
                        Our friendly team would love to hear from you.
                      </h1>
                    </Fade>

                    <div className="w-full flex justify-between gap-3 items-start mb-6 ">
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
                            <div className="text-xs text-red-500 ">
                              {errors.lastName}
                            </div>
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
                          <div className="text-xs text-red-500 ">
                            {errors.email}
                          </div>
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
                              <option key={idx} value={"+" + item.Dial}>
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
                            placeholder="+62 8123123123"
                          />
                          {errors.phone && touched.phone ? (
                            <div className="text-xs text-red-500 ">
                              {errors.phone}
                            </div>
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
                          <div className="text-xs text-red-500 ">
                            {errors.message}
                          </div>
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
                          <div className="text-xs text-red-500 ">
                            {errors.checked}
                          </div>
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
            </div>
            {/* End Of Form */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
