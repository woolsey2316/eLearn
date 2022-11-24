import React from "react";
import { Route, Redirect } from "react-router-dom";
import { LoginPage } from "./LoginPage";
import { RegisterPage } from "./RegisterPage";
import store from "../store";
/*
  url paths are protected by redirecting the user to the /login page if
  the user is not logged in. A user is determined to be logged in if there
  is a user object in local storage. It is possible to manually add a user object
  using browser dev tools, however this fake user would not be able to fetch
  data from the server api because a valid jwt token is required.
*/

export const PrivateRoute = ({ ...rest }) => {
  // const loggedIn = localStorage.getItem("EMAIL") ? true : false;
  const { loggedIn } = store.getState().authentication;
  if (loggedIn) {
    return <Route {...rest} />;
  } else {
    return <Redirect to={{ pathname: "/login" }} />;
  }
};
