import axios from "axios";
import { baseUrl } from "../config/api";
export async function getMyProfile(headers) {
    var _a;
    try {
        const res = await axios.get(`${baseUrl}/v2/profile}`, {
            headers,
        });
        return res.data;
    }
    catch (error) {
        throw new Error(((_a = error.response) === null || _a === void 0 ? void 0 : _a.statusText) || "getMyProfile failed");
    }
}
export async function getUserProfile(userId, headers) {
    var _a;
    try {
        const res = await axios.get(`${baseUrl}/v2/user/${userId}`, {
            headers,
        });
        return res.data;
    }
    catch (error) {
        throw new Error(((_a = error.response) === null || _a === void 0 ? void 0 : _a.statusText) || "getUserProfile failed");
    }
}
