import axios from "axios";
import { TASKS_URL } from "../../Api/API";

// Get All tasks
const getAllTasks = async (data, token) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  };
  const response = await axios({
    method: "GET",
    baseURL: `${TASKS_URL}`,
    headers: headers,
    params: {
      group_id: data,
    },
  });

  return response.data;
};

//add task
const addNewTask = async (data, token) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  };
  const response = await axios({
    method: "POST",
    baseURL: `${TASKS_URL}`,
    headers: headers,
    data: data,
  });
  return response.data;
};

const tasksService = {
  getAllTasks,
  addNewTask,
};

export default tasksService;
