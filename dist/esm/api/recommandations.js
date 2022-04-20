import axios from "axios";
import { baseUrl } from "../config/api";
export async function getRecommandations(headers) {
    var _a;
    try {
        const res = await axios.get(`${baseUrl}/recs/core`, {
            headers,
        });
        return res.data;
    }
    catch (error) {
        throw new Error(((_a = error.response) === null || _a === void 0 ? void 0 : _a.statusText) || "getRecs failed");
    }
}
