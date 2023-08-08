import React, { useEffect } from 'react'

import LoginForm from "./LoginForm";
import { SplashPage } from "../RegisterPage";

import { useLogoutUserMutation } from "../../features/auth/auth-slice-api";

function LoginPage() {
  // reset login status
  const [logout] = useLogoutUserMutation()

  useEffect(() => {
    logout()
  },[])

  return (
    <div className="login" data-qa="not-logged">
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
