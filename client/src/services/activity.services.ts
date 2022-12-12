import { authHeader, getUserId, IsValidJSONString } from "../helpers";
import { API_URL } from "./index";
import { handleResponse } from "./services-util";

export const activityService = {
  getActivityFeed,
};

/*
  fetches all activity notifications a User has
  */
async function getActivityFeed() {
  const requestOptions: RequestInit = {
    method: "GET",
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };
  const response = await fetch(`${API_URL}/activities`, requestOptions);
  return handleResponse(response);
}
