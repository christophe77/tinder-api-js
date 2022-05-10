import { StringMap } from "yajdb/dist/esm/types/operations";
import { AuthData } from "../types/auth";
export declare function createDb(): Promise<boolean>;
export declare function updateLoginDatas(updatePayload: StringMap): Promise<boolean>;
export declare function getAuthDatas(): Promise<AuthData>;
