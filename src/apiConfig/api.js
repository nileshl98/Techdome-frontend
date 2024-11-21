import axios from "axios";

const baseUrl = "http://18.215.244.232:8000/api"; // Updated with backend server IP

const instance = axios.create({
    baseURL: `${baseUrl}`,
});

export default instance;
