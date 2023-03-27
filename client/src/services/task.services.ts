import { authHeader, getUserId } from "../helpers";
import { Task } from "../types/Task";
import { API_URL } from "./index";
import { handleResponse } from "./services-util";

/*
  The services layer handles all http communication with the back-end apis.
  This section of the services layer relates to user data. CRUD operations
  are performed here, as well as login/register.
*/
export const taskService = {
  getAllTasks,
  createTask,
};

/*
  fetches all Tasks a User has registered to
  */
async function getAllTasks() {
  const requestOptions = {
    method: "GET",
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };
  const userId = getUserId();
  const response = await fetch(`${API_URL}/tasks`, requestOptions);
  return handleResponse(response);
}

/*
  inserts a new Task into mongodb
  */
async function createTask(task: Task) {
  const requestOptions = {
    method: "POST",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(task),
  };
  const response = await fetch(`${API_URL}/tasks`, requestOptions);
  return handleResponse(response);
}