import store from "../store";

function getUserId() {
  return sessionStorage.getItem("USER_ID") ?? "";
}
function setUserId(id: string) {
  return sessionStorage.setItem("USER_ID", id);
}

function getUser() {
  if (sessionStorage.getItem("user")) {
    return JSON.parse(sessionStorage.getItem("user") ?? "").user;
  }
}

function setEmail(email: string) {
  sessionStorage.setItem("EMAIL", email);
}
function setJWT(token: string | null) {
  sessionStorage.setItem("jwt", token ?? "");
}

function getRefreshTokenExpiryTime() {
  return sessionStorage.getItem("refreshTokenExpiryTime");
}

function setRefreshTokenExpiryTime(token: number | null) {
  sessionStorage.setItem("refreshTokenExpiryTime", token?.toString() ?? "");
}

function isLoggedIn() {
  return sessionStorage.getItem("jwt") ? true : false;
}

function removeJWTToken() {
  sessionStorage.removeItem("jwt");
}
export {
  getUserId,
  setUserId,
  getUser,
  setEmail,
  setJWT,
  removeJWTToken,
  isLoggedIn,
  getRefreshTokenExpiryTime,
  setRefreshTokenExpiryTime,
};
