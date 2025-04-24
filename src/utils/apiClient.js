// src/utils/apiClient.js
import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.APISYS_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.APISYS_TOKEN}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default apiClient;
