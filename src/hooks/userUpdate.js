import { API } from "./api";

export const updateFullUser = async (val) => {
  try {
    const { data } = await API.patch("/user/name", {
      id: val.id,
      firstName: val.firstName,
      lastName: val.lastName,
      username: val.username,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const activateUser = async (id) => {
  try {
    const { data } = await API.post("/user/set-status", {
      id,
      isActive: true,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
