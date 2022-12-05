import store from "../store";

function getUserId() {
  return store.getState().authentication.user.id;
}

function getUser() {
  if (localStorage.getItem("user")) {
    return JSON.parse(localStorage.getItem("user") ?? "").user;
  }
}
export { getUserId, getUser };
