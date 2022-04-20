"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecommandations = void 0;
const axios_1 = __importDefault(require("axios"));
const api_1 = require("../config/api");
async function getRecommandations(headers) {
    var _a;
    try {
        const res = await axios_1.default.get(`${api_1.baseUrl}/recs/core`, {
            headers,
        });
        return res.data;
    }
    catch (error) {
        throw new Error(((_a = error.response) === null || _a === void 0 ? void 0 : _a.statusText) || "getRecs failed");
    }
}
exports.getRecommandations = getRecommandations;
