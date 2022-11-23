import React, { useEffect } from "react";
import { useAppDispatch } from "../../hooks/hooks";

import LoginForm from "./LoginForm";
import { SplashPage } from "../RegisterPage";

import { authActions } from "../../actions";

function LoginPage() {
  // reset login status
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authActions.logout());
  }, [dispatch]);

  return (
    <div className="login">
      <div className="container sm:px-10">
        <div className="block xl:grid grid-cols-2 gap-4">
          <SplashPage />
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

// const Login = withRouter(LoginPage);
export { LoginPage };
