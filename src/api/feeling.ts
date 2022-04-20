import { Feeling } from "../types/feelings";
import axiosInstance from "../axiosInstance";

async function like(userId: string): Promise<Feeling> {
  try {
    const res = await axiosInstance.post(`/like/${userId}`);
    return res.data;
  } catch (error: any) {
    throw new Error(error.response?.statusText || "like failed");
  }
}
async function pass(userId: string): Promise<Feeling> {
  try {
    const res = await axiosInstance.post(`/pass/${userId}`);
    return res.data;
  } catch (error: any) {
    throw new Error(error.response?.statusText || "pass failed");
  }
}

const feeling = {
  like,
  pass,
};
export default feeling;
