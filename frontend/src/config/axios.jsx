import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:3000" // replace with your backend URL
});