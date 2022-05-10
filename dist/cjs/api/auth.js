"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const facebookLogin_1 = __importDefault(require("../utils/facebookLogin"));
const db_1 = require("../db/db");
const axiosInstance_1 = __importDefault(require("../axiosInstance"));
async function withFacebook(credentials) {
    var _a;
    try {
        await (0, facebookLogin_1.default)(credentials);
        const authData = await (0, db_1.getAuthDatas)();
        const res = await axiosInstance_1.default.post("/v2/auth/login/facebook", authData);
        axiosInstance_1.default.defaults.headers.common["x-auth-token"] =
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
exports.default = auth;
