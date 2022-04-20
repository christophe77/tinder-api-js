import { Headers } from "../types/headers";
import { Profile } from "../types/profile";
export declare function getMyProfile(headers: Headers): Promise<Profile>;
export declare function getUserProfile(userId: string, headers: Headers): Promise<Profile[]>;
