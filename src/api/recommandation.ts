import { Recommandations } from "../types/recommandations";
import axiosInstance from "../axiosInstance";

async function getRecommandations(): Promise<Recommandations> {
  try {
    const res = await axiosInstance.get("/recs/core");
    return res.data;
  } catch (error: any) {
    throw new Error(error.response?.statusText || "getRecommandations failed");
  }
}

const recommandation = {
  getRecommandations,
};
export default recommandation;
