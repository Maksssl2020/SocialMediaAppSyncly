import axios from "axios";

const instance = axios.create({
  baseURL: "https://localhost:5179/api",
});

export default instance;
