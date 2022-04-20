import { getMyProfile, getUserProfile } from "../api/profile";
import headers from "../models/headers";
export const myProfile = async (xAuthToken) => {
    const tinderHeaders = Object.assign(Object.assign({}, headers), { "x-auth-token": xAuthToken });
    const profile = await getMyProfile(tinderHeaders);
    return profile;
};
export const userProfile = async (xAuthToken, userId) => {
    const tinderHeaders = Object.assign(Object.assign({}, headers), { "x-auth-token": xAuthToken });
    const profile = await getUserProfile(userId, tinderHeaders);
    return profile;
};
