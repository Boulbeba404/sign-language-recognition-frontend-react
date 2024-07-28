import axios from "axios";

export function getApiAxios(baseURL, headers) {
  return axios.create({
    baseURL,
    headers,
  });
}
