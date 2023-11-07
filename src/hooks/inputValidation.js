import * as Yup from "yup";

export const messageSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First Name Too Short!")
    .max(75, "First Name Too Long!")
    .required("Required! First Name Cannot Be Empty."),
  lastName: Yup.string()
    .min(2, "Last Name Too Short!")
    .max(75, "Last Name Too Long!")
    .required("Required! Last Name Cannot Be Empty."),
  email: Yup.string()
    .email("Invalid email")
    .required("Required! Email Cannot Be Empty."),
  phone: Yup.string()
    .min(10, "Phone Number Too Short!")
    .max(16, "Phone Number Too Long!")
    .required("Required! Phone Number Cannot Be Empty."),
  message: Yup.string()
    .min(20, "Message Too Short")
    .required("Required! Message Cannot Be Empty!"),
  checked: Yup.boolean().oneOf([true], "Required! Please, Check The Box!"),
});

export const loginSchema = Yup.object().shape({
  password: Yup.string()
    .min(3, "Password Too Short!")
    .required("Required! Password Cannot Be Empty."),
});
