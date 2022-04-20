"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axiosInstance_1 = __importDefault(require("../axiosInstance"));
async function like(userId) {
    var _a;
    try {
        const res = await axiosInstance_1.default.post(`/like/${userId}`);
        return res.data;
    }
    catch (error) {
        throw new Error(((_a = error.response) === null || _a === void 0 ? void 0 : _a.statusText) || "like failed");
    }
}
async function pass(userId) {
    var _a;
    try {
        const res = await axiosInstance_1.default.post(`/pass/${userId}`);
        return res.data;
    }
    catch (error) {
        throw new Error(((_a = error.response) === null || _a === void 0 ? void 0 : _a.statusText) || "pass failed");
    }
}
const feeling = {
    like,
    pass,
};
exports.default = feeling;
