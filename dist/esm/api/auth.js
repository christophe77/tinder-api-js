import axiosInstance from "../axiosInstance";
async function withFacebook(authData) {
    var _a;
    try {
        const res = await axiosInstance.post("/v2/auth/login/facebook", authData);
        axiosInstance.defaults.headers.common["x-auth-token"] =
            res.data.data.api_token;
        return res.data;
    }
    catch (error) {
        console.log(error);
        throw new Error(((_a = error.response) === null || _a === void 0 ? void 0 : _a.statusText) || "authFacebook failed");
    }
}
const auth = {
    withFacebook,
};
export default auth;
