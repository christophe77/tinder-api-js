import { authFacebook } from "../api/auth";
const auth = async (authData) => {
    var _a;
    const authResponse = await authFacebook(authData);
    const authToken = (_a = authResponse.data) === null || _a === void 0 ? void 0 : _a.api_token;
    if (authToken) {
        return authToken;
    }
    throw new Error("authFacebook failed");
};
export default auth;
