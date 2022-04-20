import { Feeling } from "../types/feelings";
declare function like(userId: string): Promise<Feeling>;
declare function pass(userId: string): Promise<Feeling>;
declare const feeling: {
    like: typeof like;
    pass: typeof pass;
};
export default feeling;
