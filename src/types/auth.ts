type Meta = {
  status: number;
};
type Data = {
  _id: string;
  api_token: string;
  refresh_token: string;
  is_new_user: boolean;
};
export type AuthFacebook = {
  meta: Meta;
  data: Data;
};
export type AuthData = {
  token: string;
  facebook_id: string;
};
export type Credentials = {
  email : string;
  password: string;
}
