import axios from "axios";

const fetcher = axios.create({
  baseURL: "http://localhost:3333/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default fetcher;
