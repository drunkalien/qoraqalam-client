import axios, { AxiosError } from "axios";
import router from "next/router";

export const requestInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

console.log(process.env.NEXT_PUBLIC_BASE_URL);

requestInstance.interceptors.request.use((config) => {
  const token = window.localStorage.getItem("token");

  config.headers["Authorization"] = `Bearer ${token}`;

  return config;
});

requestInstance.interceptors.request.use(
  (config) => config,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      router.push("/login");
    }
  }
);

export default requestInstance;
