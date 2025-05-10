import axios from "axios";

export const dotaApi = axios.create({
  baseURL: "https://api.opendota.com/api/",
});
