"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const axiosInstance = axios_1.default.create({
    baseURL: "https://api.gotinder.com",
});
axiosInstance.defaults.headers.common["x-auth-token"] = "";
axiosInstance.defaults.headers.common["content-type"] = "application/json";
axiosInstance.defaults.headers.common["user-agent"] = "okhttp/3.8.0";
axiosInstance.defaults.headers.common["accept-encoding"] = "gzip";
axiosInstance.defaults.headers.common["connection"] = "keep-alive";
axiosInstance.defaults.headers.common["host"] = "api.gotinder.com";
axiosInstance.defaults.headers.common["platform"] = "android";
exports.default = axiosInstance;
