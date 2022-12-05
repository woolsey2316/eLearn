/*
  Auth header is a helper function that returns an HTTP Authorization header containing the Json Web
  Token (JWT) of the currently logged in user from local storage. If the user isn't logged in an
  empty object is returned. The auth header is used to make authenticated HTTP requests to the server
  api using JWT authentication.
*/
import store from "../store";

export function authHeader() {
  return {
    Authorization: "Bearer " + store.getState().authentication.user.token,
  };
}
// export function authHeader() {
//   const user = JSON.parse(localStorage.getItem("user") ?? "");

//   if (user && user.token) return { Authorization: "Bearer " + user.token };
//   return { Authorization: "" };
// }
