import { API } from "./api";

export const requestOTP = async (val) => {
  try {
    const { data } = await API.post("/auth/otp", {
      email: val,
    });

    return data;
  } catch (error) {
    return error;
  }
};

export const resetPassword = async (email, password, otp) => {
  try {
    const { data } = await API.post("/auth/reset", {
      email,
      password,
      otp,
    });

    return data;
  } catch (error) {
    return error;
  }
};
