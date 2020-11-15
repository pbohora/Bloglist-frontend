import axios from "axios";

const baseUrl = "/api/users";

const getUsers = async () => {
  const response = await axios.get(baseUrl);
  //   console.log(response)
  return response.data;
};

const registerUser = async (newUser) => {
  const response = await axios.post(baseUrl, newUser);
  return response.data;
};

export { getUsers, registerUser };
