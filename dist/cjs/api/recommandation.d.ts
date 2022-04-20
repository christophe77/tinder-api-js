import { Recommandations } from "../types/recommandations";
declare function getRecommandations(): Promise<Recommandations>;
declare const recommandation: {
    getRecommandations: typeof getRecommandations;
};
export default recommandation;
