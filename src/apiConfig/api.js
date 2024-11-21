import axios from "axios";

const baseUrl = "http://50.17.13.247:8000/api"; // Updated with backend server IP

const instance = axios.create({
    baseURL: `${baseUrl}`,
});

export default instance;
