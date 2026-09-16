import { API } from "./api";

export const createNewUser = async (val: any) => {
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

export const updateUserRole = async (val: any) => {
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

export const updateFullUser = async (val: any) => {
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

export const activateUser = async (id: string | number) => {
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

export const disableUser = async (id: string | number) => {
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

export const deleteUser = async (id: string | number) => {
  try {
    const { data } = await API.delete("/user/" + id);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updatePict = async (config: any, val: any) => {
  try {
    const { data } = await API.post("/user/profile", val, config);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const checkUsername = async (val: string) => {
  try {
    const { data } = await API.post("/user/checkname", {
      username: val,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
