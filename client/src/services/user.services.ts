import { authHeader, IsValidJSONString, getUserId } from "../helpers";
import { UserInfo } from "../types/UserForm";
import { API_URL } from "./index";
/*
  The services layer handles all http communication with the back-end apis.
  This section of the services layer relates to user data. CRUD operations
  are performed here, as well as login/register.
*/
export const userService = {
  // getById,
  getUserDetails,
  setUserDetails,
  delete: _delete,
  verifyEmail,
};

/*
fetches all information related to the current logged in user
address, roles, profile image etc
*/
async function getUserDetails() {
  const requestOptions = {
    method: "GET",
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };
  const userId = getUserId();
  const response = await fetch(
    `${API_URL}/users/${userId}/profile`,
    requestOptions
  );
  console.log("user details", response);
  return handleResponse(response);
}

async function setUserDetails(user: UserInfo) {
  const requestOptions = {
    method: "PUT",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };
  const userId = getUserId();
  const response = await fetch(
    `${API_URL}/users/${userId}/profile`,
    requestOptions
  );
  return handleResponse(response);
}

// prefixed function name with underscore because delete is a reserved word in javascript
async function _delete(id: string) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(),
  };

  const response = await fetch(`${API_URL}/user/${id}`, requestOptions);
  return handleResponse(response);
}

async function verifyEmail() {
  const requestOptions = {
    method: "GET",
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };
  const userId = getUserId();
  const response = await fetch(
    `${API_URL}/auth/${userId}/verifyEmail`,
    requestOptions
  );
  return handleResponse(response);
}

/*
  checks if the http response from the api is 401 Unauthorized and
  automatically logs the user out. This handles if the JWT token expires
  or is no longer valid for any reason.
*/
function handleResponse(response: Response) {
  return response.text().then((text) => {
    const data = IsValidJSONString(text) ? JSON.parse(text) : text;

    if (!response.ok) {
      return Promise.reject(
        response.status.toString() + " " + response.statusText
      );
    }
    return data;
  });
}
