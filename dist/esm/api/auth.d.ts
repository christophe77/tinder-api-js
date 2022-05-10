import { AuthFacebook, Credentials } from "../types/auth";
declare function withFacebook(credentials: Credentials): Promise<AuthFacebook>;
declare const auth: {
    withFacebook: typeof withFacebook;
};
export default auth;
