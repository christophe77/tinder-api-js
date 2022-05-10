import facebookLogin from "../utils/facebookLogin";
import { getAuthDatas } from '../db/db';
import axiosInstance from "../axiosInstance";
async function withFacebook(credentials) {
    var _a;
    try {
        await facebookLogin(credentials);
        const authData = await getAuthDatas();
        const res = await axiosInstance.post("/v2/auth/login/facebook", authData);
        axiosInstance.defaults.headers.common["x-auth-token"] =
            res.data.data.api_token;
        return res.data;
    }
    catch (error) {
        throw new Error(((_a = error.response) === null || _a === void 0 ? void 0 : _a.statusText) || "authFacebook failed");
    }
}
const auth = {
    withFacebook,
};
export default auth;
