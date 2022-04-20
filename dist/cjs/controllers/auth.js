"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("../api/auth");
const auth = async (authData) => {
    var _a;
    const authResponse = await (0, auth_1.authFacebook)(authData);
    const authToken = (_a = authResponse.data) === null || _a === void 0 ? void 0 : _a.api_token;
    if (authToken) {
        return authToken;
    }
    throw new Error("authFacebook failed");
};
exports.default = auth;
