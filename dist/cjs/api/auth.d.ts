import { AuthFacebook, AuthData } from "../types/auth";
declare function withFacebook(authData: AuthData): Promise<AuthFacebook>;
declare const auth: {
    withFacebook: typeof withFacebook;
};
export default auth;
