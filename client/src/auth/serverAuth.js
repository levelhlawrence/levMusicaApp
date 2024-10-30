import axios from "axios";

const authCred = axios.create({
  baseURL: "http://localhost:3001/",
  withCredentials: true,
});

export default authCred;
