import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

export const getAllUsers = async () => {
  const response = await axios.get("/users");
  return response.data;
};

export const getUserById = async (id) => {
  const response = await axios.get(`/users/${id}`);
  return response.data;
};