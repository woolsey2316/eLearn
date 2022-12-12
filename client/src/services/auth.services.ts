import {
  authHeader,
  IsValidJSONString,
  getUserId,
  setEmail,
  setJWT,
  setUserId,
  removeJWTToken,
  setRefreshTokenExpiryTime,
} from "../helpers";
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
  const requestOptions: RequestInit = {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, rememberMe }),
  };

  const response = await fetch(`${API_URL}/auth/login`, requestOptions);

  if (!response.ok) {
    removeJWTToken();
    return new Error(response.statusText);
  }

  const data = await response.json();

  if (data.success !== true) {
    removeJWTToken();
    return new Error("toast.user.general_error");
  }

  setUserId(data.id);
  setEmail(data.email);
  setJWT(data.token);
  setRefreshTokenExpiryTime(data.expires);

  return data;
}

async function logout() {
  const userId = getUserId();
  const requestOptions = {
    method: "POST",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify({ userId }),
  };
  const response = await fetch(`${API_URL}/auth/logout`, requestOptions);
  const user = await handleResponse(response);
  // remove JWT token from session storage to log user out
  removeJWTToken();
  return user;
}

async function register(user: EditableUserInfo) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  const response = await fetch(`${API_URL}/auth/register`, requestOptions);
  return handleResponse(response);
}

// asks for permission to change password
async function requestPasswordChange(user: UserInfo) {
  const requestOptions: RequestInit = {
    method: "POST",
    credentials: "include",
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

async function updatePassword(oldPassword: string, password: string) {
  const requestOptions: RequestInit = {
    method: "POST",
    credentials: "include",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify({
      oldPassword: oldPassword,
      password: password,
    }),
  };
  const response = await fetch(
    `${API_URL}/auth/password/update`,
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
