declare type Meta = {
    status: number;
};
declare type Data = {
    _id: string;
    api_token: string;
    refresh_token: string;
    is_new_user: boolean;
};
export declare type AuthFacebook = {
    meta: Meta;
    data: Data;
};
export declare type AuthData = {
    token: string;
    facebook_id: string;
};
export declare type Credentials = {
    email: string;
    password: string;
};
export {};
