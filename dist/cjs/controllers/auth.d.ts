import { AuthData } from "../types/auth";
declare const auth: (authData: AuthData) => Promise<string>;
export default auth;
