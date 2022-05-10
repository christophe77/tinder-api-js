"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axiosInstance_1 = __importDefault(require("../axiosInstance"));
async function getRecommandations() {
    var _a;
    try {
        const res = await axiosInstance_1.default.get("/recs/core");
        return res.data;
    }
    catch (error) {
        throw new Error(((_a = error.response) === null || _a === void 0 ? void 0 : _a.statusText) || "getRecommandations failed");
    }
}
const recommandation = {
    getRecommandations,
};
exports.default = recommandation;
