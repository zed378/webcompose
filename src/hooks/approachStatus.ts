import { API } from "./api";

export interface ApproachFilterResponse {
  total?: number;
  data?: any[];
  [key: string]: any;
}

const fetchApproachStatus = async (statusId: string): Promise<ApproachFilterResponse | undefined> => {
  try {
    const { data } = await API.get(`/approach/filtered?statusId=${statusId}`);
    return data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const getApproaching = () => fetchApproachStatus("3d060548-be58-466f-a576-36334c437679");
export const getMeeting = () => fetchApproachStatus("9cc278cd-c50b-4600-aa3d-2300ee096cbc");
export const getQuoteSent = () => fetchApproachStatus("b8613e66-09e7-450c-b03b-ff02de64ca44");
export const getContractSent = () => fetchApproachStatus("2a6ddff6-6ea7-4019-a78c-8062c2e861b7");
export const getDP = () => fetchApproachStatus("a7f2c19e-4ab2-42c6-9318-fd402f2cd920");
export const getProjectOnProgress = () => fetchApproachStatus("d75dc5d6-03fa-4c96-a6e6-5cafe8c7e175");
export const getProjectDone = () => fetchApproachStatus("9f2301a3-7e87-4df5-a487-fb6fc08c7573");
export const getInvoiceSent = () => fetchApproachStatus("fded6ea7-25bc-495a-9680-de6ccde5a29b");
export const getLastPaymentDone = () => fetchApproachStatus("91d7f612-55c2-425c-aea9-c935cd399490");
export const getRejected = () => fetchApproachStatus("58c091bc-c3cc-4dd8-a4f7-f6cbcb41a40f");
