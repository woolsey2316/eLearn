import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import { history } from "../../helpers";

import { alertActions } from "../../actions/alert.actions";

import { Alert } from "..";

import EmailField from "./EmailField";
import PasswordField from "./PasswordField";
import RememberMe from "./RememberMe";
import ForgotPassword from "./ForgotPassword";
import MainButtons from "./MainButtons";
import FormHeading from "./FormHeading";
import { authApi, useLoginUserMutation, useResetPasswordMutation, useSendOTPQuery } from "../../features/auth/auth-slice-api";

const LoginForm = () => {
  const [loginUser, { isLoading, isError, error, isSuccess }] =
    useLoginUserMutation();
  const [resetPassword, {}] = useResetPasswordMutation()
  const dispatch = useAppDispatch();
  const [form, setForm] = useState(1);
  const [inputs, setInputs] = useState({
    email:
      sessionStorage.getItem("remmeberMe") === "true"
        ? sessionStorage.getItem("email")
        : "",
    password:
      sessionStorage.getItem("remmeberMe") === "true"
        ? sessionStorage.getItem("password")
        : "",
    newPassword: "",
    confirmPassword: "",
    rememberMe: sessionStorage.getItem("remmeberMe") === "true" ? true : false,
    otp: "",
  });
  const [forgotPassword, setForgotPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { email, password, rememberMe, otp, newPassword, confirmPassword } =
    inputs;

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
      loginUser({email, password, rememberMe});
    } else if (email && forgotPassword) {
      dispatch(authApi.endpoints.sendOTP.initiate(email))
      setForm(2);
    }
    if (rememberMe && email != "" && password != "") {
      sessionStorage.email = email;
      sessionStorage.password = password;
      sessionStorage.remmeberMe = rememberMe;
    }
  }

  function handleSubmitOTPForm(_event: React.FormEvent<HTMLFormElement>): void {
    if (email && otp && newPassword && confirmPassword) {
      // Dispatches a login action, if successful redirects current URL
      // to Home page.
      resetPassword({email, OTP: otp, password: newPassword, confirmPassword})
    }
  }
  return (
    <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0 mx-3">
      <div className="my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/3 xl:w-auto">
        {/* sign-in form */}
        {form == 1 && (
          <form
            style={{ display: "block" }}
            id="form1"
            name="form"
            onSubmit={handleSubmit}
          >
            <FormHeading />
            <div className="intro-x mt-8">
              <EmailField
                submitted={submitted}
                email={email ?? ""}
                handleChange={handleChange}
              />
              <PasswordField
                forgotPassword={forgotPassword}
                submitted={submitted}
                password={password ?? ""}
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
            <Alert />
          </form>
        )}
        {/* reset password form using OTP */}
        {form == 2 && (
          <form
            style={{ display: "block" }}
            name="form"
            onSubmit={handleSubmitOTPForm}
          >
            <input
              style={{ padding: "0.75em 1em" }}
              type="text"
              className="intro-x login__input input input--lg border border-gray-300 block"
              placeholder="Check Email for OTP Code"
              name="otp"
              value={otp}
              onChange={handleChange}
            />
            <input
              style={{ padding: "0.75em 1em" }}
              type="password"
              className="intro-x login__input input input--lg border border-gray-300 block mt-4"
              placeholder="New Password"
              name="newPassword"
              value={newPassword}
              onChange={handleChange}
            />
            {!forgotPassword && submitted && !password && (
              <h2 className="mt-1 text-theme-6">Password is required</h2>
            )}
            <input
              style={{ padding: "0.75em 1em" }}
              type="password"
              className="intro-x login__input input input--lg border border-gray-300 block mt-4"
              placeholder="Confirm New Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
            />
            {!forgotPassword && submitted && !password && (
              <h2 className="mt-1 text-theme-6">Password is required</h2>
            )}
            {submitted && !email && (
              <h2 className="mt-1 text-theme-6">Email is required</h2>
            )}
            <button className="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3 mt-5">
              reset password
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
