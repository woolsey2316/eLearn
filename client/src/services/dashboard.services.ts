import { authHeader, getUserId } from "../helpers";
import { API_URL } from "./index";
import { handleResponse } from "./services-util";
/*
  The services layer handles all http communication with the back-end apis.
  This section of the services layer relates to user data. CRUD operations
  are performed here, as well as login/register.
*/
export const dashboardService = {
  getUserDashboard,
};

async function getUserDashboard() {
  const requestOptions: RequestInit = {
    method: "GET",
    credentials: "include",
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };
  const response = await fetch(`${API_URL}/dashboard`, requestOptions);
  const dashboard = await handleResponse(response);
  return dashboard;
}
