import { authHeader, IsValidJSONString, getUserId } from "../helpers";
import { EditableUserInfo, UserInfo } from "../types/UserForm";
import { API_URL } from "./index";
export const authService = {
  login,
  logout,
  register,
  requestPasswordChange,
  updatePassword,
  sendOTP,
  resetPassword,
};

async function login(email: string, password: string, rememberMe: boolean) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, rememberMe }),
  };

  const response = await fetch(`${API_URL}/auth/login`, requestOptions);

  if (!response.ok) return new Error(response.statusText);

  const data = await response.json();

  if (data.success !== true) return new Error("toast.user.general_error");

  localStorage.setItem("USER_ID", data.id);
  localStorage.setItem("EMAIL", data.email);
  localStorage.setItem("ACCESS_TOKEN_KEY", data.token);

  return data;
}

async function logout() {
  const userId = getUserId();
  const requestOptions = {
    method: "POST",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify({ userId }),
  };
  console.log("body:" + requestOptions.body);
  const response = await fetch(`${API_URL}/auth/logout`, requestOptions);
  const user = await handleResponse(response);
  // remove user from local storage to log user out
  localStorage.removeItem("user");
  return user;
}

async function register(user: EditableUserInfo) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  console.log(JSON.stringify(user));

  const response = await fetch(`${API_URL}/auth/register`, requestOptions);
  return handleResponse(response);
}

// asks for permission to change password
async function requestPasswordChange(user: UserInfo) {
  const requestOptions = {
    method: "POST",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  const response = await fetch(
    `${API_URL}/oauth2/password/reset`,
    requestOptions
  );
  return handleResponse(response);
}

async function sendOTP(email: string) {
  const requestOptions = {
    method: "GET",
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };

  const response = await fetch(
    `${API_URL}/auth/sendotp?email=${email}`,
    requestOptions
  );
  return handleResponse(response);
}

async function updatePassword(
  email: string,
  password: string,
  confirmPassword: string
) {
  const requestOptions = {
    method: "POST",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    }),
  };
  const response = await fetch(
    `${API_URL}/auth/password/reset`,
    requestOptions
  );
  return handleResponse(response);
}

async function resetPassword(
  email: string,
  OTP: string,
  password: string,
  confirmPassword: string
) {
  const requestOptions = {
    method: "POST",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      OTP: OTP,
      password: password,
      confirmPassword: confirmPassword,
    }),
  };
  const response = await fetch(
    `${API_URL}/auth/password/reset`,
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
