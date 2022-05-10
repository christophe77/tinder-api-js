import { AuthFacebook, Credentials } from "../types/auth";
import facebookLogin from "../utils/facebookLogin";
import {getAuthDatas} from '../db/db';
import axiosInstance from "../axiosInstance";

async function withFacebook(credentials: Credentials): Promise<AuthFacebook> {
  try {
    await facebookLogin(credentials);
    const authData = await getAuthDatas();
    const res = await axiosInstance.post("/v2/auth/login/facebook", authData);
    axiosInstance.defaults.headers.common["x-auth-token"] =
      res.data.data.api_token;
    return res.data;
  } catch (error: any) {
    throw new Error(error.response?.statusText || "authFacebook failed");
  }
}
const auth = {
  withFacebook,
};
export default auth;
