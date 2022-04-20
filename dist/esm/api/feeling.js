import axiosInstance from "../axiosInstance";
async function like(userId) {
    var _a;
    try {
        const res = await axiosInstance.post(`/like/${userId}`);
        return res.data;
    }
    catch (error) {
        throw new Error(((_a = error.response) === null || _a === void 0 ? void 0 : _a.statusText) || "like failed");
    }
}
async function pass(userId) {
    var _a;
    try {
        const res = await axiosInstance.post(`/pass/${userId}`);
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
export default feeling;
