import { API } from "./api";

export const createNewUser = async (val) => {
  try {
    const { data } = await API.post("/user/add", {
      firstName: val.firstName,
      lastName: val.lastName,
      email: val.email,
      username: val.username,
      password: val.password,
      roles: val.role,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateUserRole = async (val) => {
  try {
    const { data } = await API.post("/user/set-role", {
      id: val.id,
      newRole: val.role,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

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

export const disableUser = async (id) => {
  try {
    const { data } = await API.post("/user/set-status", {
      id,
      isActive: false,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (id) => {
  try {
    const { data } = await API.delete("/user/" + id);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updatePict = async (config, val) => {
  try {
    const { data } = await API.post("/user/profile", val, config);

    return data;
  } catch (error) {
    console.log(error);
  }
};
