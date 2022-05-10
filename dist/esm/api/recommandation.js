import axiosInstance from "../axiosInstance";
async function getRecommandations() {
    var _a;
    try {
        const res = await axiosInstance.get("/recs/core");
        return res.data;
    }
    catch (error) {
        throw new Error(((_a = error.response) === null || _a === void 0 ? void 0 : _a.statusText) || "getRecommandations failed");
    }
}
const recommandation = {
    getRecommandations,
};
export default recommandation;
