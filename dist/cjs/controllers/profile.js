"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProfile = exports.myProfile = void 0;
const profile_1 = require("../api/profile");
const headers_1 = __importDefault(require("../models/headers"));
const myProfile = async (xAuthToken) => {
    const tinderHeaders = Object.assign(Object.assign({}, headers_1.default), { "x-auth-token": xAuthToken });
    const profile = await (0, profile_1.getMyProfile)(tinderHeaders);
    return profile;
};
exports.myProfile = myProfile;
const userProfile = async (xAuthToken, userId) => {
    const tinderHeaders = Object.assign(Object.assign({}, headers_1.default), { "x-auth-token": xAuthToken });
    const profile = await (0, profile_1.getUserProfile)(userId, tinderHeaders);
    return profile;
};
exports.userProfile = userProfile;
