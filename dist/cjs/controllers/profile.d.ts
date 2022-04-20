import { Profile } from "../types/profile";
export declare const myProfile: (xAuthToken: string) => Promise<Profile>;
export declare const userProfile: (xAuthToken: string, userId: string) => Promise<Profile[]>;
