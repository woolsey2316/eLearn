import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import { history } from "../../helpers";

import { alertActions } from "../../actions";
import { authActions } from "../../actions";

import { Alert } from "..";

import EmailField from "./EmailField";
import PasswordField from "./PasswordField";
import RememberMe from "./RememberMe";
import ForgotPassword from "./ForgotPassword";
import MainButtons from "./MainButtons";
import FormHeading from "./FormHeading";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const alert = useAppSelector((state) => state.alert);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [forgotPassword, setForgotPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { email, password, rememberMe } = inputs;

  useEffect(() => {
    history.listen(({}) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }, [dispatch]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function onChangeCheckbox(event: React.ChangeEvent<HTMLInputElement>) {
    setInputs({ ...inputs, rememberMe: event.target.checked });
    console.log(event.target.checked);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    console.log(
      `%cemail : ${email}, password: ${password}`,
      "color: blue,font-weight:bold"
    );

    setSubmitted(true);
    if (email && password && !forgotPassword) {
      // Dispatches a login action, if successful redirects current URL
      // to Home page.
      dispatch(authActions.login(email, password, rememberMe));
    } else if (email && forgotPassword) {
      dispatch(authActions.sendOtp(email));
    }
    if (rememberMe && email !== "") {
      localStorage.email = email;
      localStorage.password = password;
      localStorage.checkbox = rememberMe;
    }
  }
  return (
    <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0 mx-3">
      <div className="my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/3 xl:w-auto">
        <form style={{ display: "block" }} name="form" onSubmit={handleSubmit}>
          <FormHeading />
          <div className="intro-x mt-8">
            <EmailField
              submitted={submitted}
              email={email}
              handleChange={handleChange}
            />
            <PasswordField
              forgotPassword={forgotPassword}
              submitted={submitted}
              password={password}
              handleChange={handleChange}
            />
          </div>
          <div className="intro-x flex text-gray-700 text-xs sm:text-sm mt-4">
            <RememberMe
              forgotPassword={forgotPassword}
              onChangeCheckbox={onChangeCheckbox}
              rememberMe={rememberMe}
            />
            <ForgotPassword
              forgotPassword={forgotPassword}
              setForgotPassword={setForgotPassword}
            />
          </div>
          <MainButtons forgotPassword={forgotPassword} />
          {alert && alert.message ? (
            <Alert type={alert.type} message={alert.message} />
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
