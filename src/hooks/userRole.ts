import { API } from "./api";

export const allUsers = async () => {
  try {
    const { data } = await API.get("/user/all");

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSYS = async () => {
  try {
    const { data } = await API.post("/user/filtered", {
      role: "SYS",
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAdmin = async () => {
  try {
    const { data } = await API.post("/user/filtered", {
      role: "ADMIN",
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMarketing = async () => {
  try {
    const { data } = await API.post("/user/filtered", {
      role: "MARKETING",
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getDev = async () => {
  try {
    const { data } = await API.post("/user/filtered", {
      role: "DEVELOPER",
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getHR = async () => {
  try {
    const { data } = await API.post("/user/filtered", {
      role: "HR",
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getClient = async () => {
  try {
    const { data } = await API.post("/user/filtered", {
      role: "CLIENT",
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAuthenticated = async () => {
  try {
    const { data } = await API.post("/user/filtered", {
      role: "AUTHENTICATED",
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
