import { AuthFacebook, AuthData } from "../types/auth";
import axiosInstance from "../axiosInstance";

async function withFacebook(authData: AuthData): Promise<AuthFacebook> {
  try {
    const res = await axiosInstance.post("/v2/auth/login/facebook", authData);
    axiosInstance.defaults.headers.common["x-auth-token"] =
      res.data.data.api_token;
    return res.data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.response?.statusText || "authFacebook failed");
  }
}
const auth = {
  withFacebook,
};
export default auth;
