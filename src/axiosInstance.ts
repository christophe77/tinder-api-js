import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.gotinder.com",
});
axiosInstance.defaults.headers.common["x-auth-token"] = "";
axiosInstance.defaults.headers.common["content-type"] = "application/json";
axiosInstance.defaults.headers.common["user-agent"] = "okhttp/3.8.0";
axiosInstance.defaults.headers.common["accept-encoding"] = "gzip";
axiosInstance.defaults.headers.common["connection"] = "keep-alive";
axiosInstance.defaults.headers.common["host"] = "api.gotinder.com";
axiosInstance.defaults.headers.common["platform"] = "android";

export default axiosInstance;
