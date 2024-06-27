import axios from "axios";

const BASE_URL = "https://www.devnihad.tech/api";

const Instance = axios.create({
  baseURL: BASE_URL,
});

export const AxiosPrivate = (token) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return axiosInstance;
};

export default Instance;
