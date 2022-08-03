import axios from "axios";
import { GROUPS_URL } from "../../Api/API";

// Get All Groups
const getAllGroups = async (token) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  };
  const response = await axios({
    method: "GET",
    baseURL: `${GROUPS_URL}`,
    headers: headers,
  });
  return response.data;
};

//add groups
const addNewGroup = async (data, token) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  };
  const response = await axios({
    method: "POST",
    baseURL: `${GROUPS_URL}`,
    headers: headers,
    data: data,
  });
  return response.data;
};

const groupsService = {
  getAllGroups,
  addNewGroup,
};

export default groupsService;
