import { API } from "./api";

export const requestOTP = async (email: string) => {
  try {
    const { data } = await API.post("/auth/otp", { email });
    return data;
  } catch (error: any) {
    throw error;
  }
};

export const resetPassword = async (email: string, password: string, otp: number) => {
  try {
    const { data } = await API.post("/auth/reset", {
      email,
      password,
      otp,
    });
    return data;
  } catch (error: any) {
    throw error;
  }
};
