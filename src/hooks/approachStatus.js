import { API } from "./api";

export const getApproaching = async () => {
  try {
    const { data } = await API.get(
      "/approach/filtered?statusId=3d060548-be58-466f-a576-36334c437679"
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMeeting = async () => {
  try {
    const { data } = await API.get(
      "/approach/filtered?statusId=9cc278cd-c50b-4600-aa3d-2300ee096cbc"
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getQuoteSent = async () => {
  try {
    const { data } = await API.get(
      "/approach/filtered?statusId=b8613e66-09e7-450c-b03b-ff02de64ca44"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getContractSent = async () => {
  try {
    const { data } = await API.get(
      "/approach/filtered?statusId=2a6ddff6-6ea7-4019-a78c-8062c2e861b7"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getDP = async () => {
  try {
    const { data } = await API.get(
      "/approach/filtered?statusId=a7f2c19e-4ab2-42c6-9318-fd402f2cd920"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProjectOnProgress = async () => {
  try {
    const { data } = await API.get(
      "/approach/filtered?statusId=d75dc5d6-03fa-4c96-a6e6-5cafe8c7e175"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProjectDone = async () => {
  try {
    const { data } = await API.get(
      "/approach/filtered?statusId=9f2301a3-7e87-4df5-a487-fb6fc08c7573"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getInvoiceSent = async () => {
  try {
    const { data } = await API.get(
      "/approach/filtered?statusId=fded6ea7-25bc-495a-9680-de6ccde5a29b"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getLastPaymentDone = async () => {
  try {
    const { data } = await API.get(
      "/approach/filtered?statusId=91d7f612-55c2-425c-aea9-c935cd399490"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getRejected = async () => {
  try {
    const { data } = await API.get(
      "/approach/filtered?statusId=58c091bc-c3cc-4dd8-a4f7-f6cbcb41a40f"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
