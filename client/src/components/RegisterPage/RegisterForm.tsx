import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import { authActions } from "../../actions";
import { alertActions } from "../../actions";

import { Alert } from "..";

import { history } from "../../helpers";
import {
  evaluatePasswordScore,
  passwordStrengthColour,
  passwordQuality,
} from "../PasswordQuality";

const RegisterForm = () => {
  const [user, setUser] = useState({
    address: "",
    area: "",
    className: "",
    gender: "",
    email: "",
    mobile: "",
    name: "",
    password: "",
    password2: "",
    pincode: "",
    school: "",
    state: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [passwordAdvice, showPasswordAdvice] = useState(false);
  const dispatch = useAppDispatch();
  const alert = useAppSelector((state) => state.alert);

  useEffect(() => {
    history.listen(({ location, action }) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }, [dispatch]);

  // Always logs out current user before loading signup form page
  useEffect(() => {
    dispatch(authActions.logout());
  }, [dispatch]);
  function isValidEmail() {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(user.email);
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    setUser((user) => ({
      ...user,
      [name]: value,
    }));
  }
  // checks for empty fields in the form
  function allFieldsExist() {
    let allFieldsExist = true;
    for (const [_key, value] of Object.entries(user)) {
      allFieldsExist = allFieldsExist && value !== "";
    }
    return allFieldsExist;
  }
  // dispatch an action to the redux store, updates 'user' object
  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    console.log(`%cuser details: ${JSON.stringify(user)}`, "color:green");

    setSubmitted(true);
    if (allFieldsExist()) {
      dispatch(authActions.registerUser(user));
    }
    event.preventDefault();
  }
  return (
    <form name="form" onSubmit={handleSubmit}>
      <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
        <div className="my-auto mx-auto bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
          <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left mt-5">
            Sign Up
          </h2>
          <div className="intro-x mt-2 text-gray-500 xl:hidden text-center">
            A few more clicks to register for your account. Manage all your
            online exams in one place
          </div>
          <div className="intro-x mt-8">
            <input
              type="text"
              name="email"
              className="intro-x login__input input input--lg border border-gray-300 block"
              style={{
                borderColor: isValidEmail() || !submitted ? "" : "#D32929",
              }}
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
            />
            {submitted && !user.email && (
              <div className="text-theme-6 mt-2">Email is required</div>
            )}
            <input
              type="text"
              name="name"
              style={{ borderColor: user.name || !submitted ? "" : "#D32929" }}
              className="intro-x login__input input input--lg border border-gray-300 block mt-4"
              placeholder="Full Name"
              value={user.name}
              onChange={handleChange}
            />
            {submitted && !user.name && (
              <div className="text-theme-6 mt-2">Full Name is required</div>
            )}
            <input
              type="text"
              name="address"
              className="intro-x login__input input input--lg border border-gray-300 block mt-4"
              style={{
                borderColor: user.address || !submitted ? "" : "#D32929",
              }}
              placeholder="Address"
              value={user.address}
              onChange={handleChange}
            />
            {submitted && !user.address && (
              <div className="text-theme-6 mt-2">Address is required</div>
            )}
            <input
              type="text"
              name="gender"
              className="intro-x login__input input input--lg border border-gray-300 block mt-4"
              style={{
                borderColor: user.gender || !submitted ? "" : "#D32929",
              }}
              placeholder="gender"
              value={user.gender}
              onChange={handleChange}
            />
            {submitted && !user.gender && (
              <div className="text-theme-6 mt-2">gender is required</div>
            )}
            <input
              type="text"
              name="area"
              className="intro-x login__input input input--lg border border-gray-300 block mt-4"
              style={{ borderColor: user.area || !submitted ? "" : "#D32929" }}
              placeholder="Area"
              value={user.area}
              onChange={handleChange}
            />
            {submitted && !user.area && (
              <div className="text-theme-6 mt-2">Address is required</div>
            )}
            <input
              type="text"
              name="state"
              className="intro-x login__input input input--lg border border-gray-300 block mt-4"
              style={{ borderColor: user.state || !submitted ? "" : "#D32929" }}
              placeholder="State"
              value={user.state}
              onChange={handleChange}
            />
            {submitted && !user.state && (
              <div className="text-theme-6 mt-2">Address is required</div>
            )}
            <input
              type="text"
              name="className"
              className="intro-x login__input input input--lg border border-gray-300 block mt-4"
              style={{
                borderColor: user.className || !submitted ? "" : "#D32929",
              }}
              placeholder="Class Name"
              value={user.className}
              onChange={handleChange}
            />
            {submitted && !user.className && (
              <div className="text-theme-6 mt-2">className is required</div>
            )}
            <input
              type="text"
              name="mobile"
              className="intro-x login__input input input--lg border border-gray-300 block mt-4"
              style={{
                borderColor: user.mobile || !submitted ? "" : "#D32929",
              }}
              placeholder="Mobile"
              value={user.mobile}
              onChange={handleChange}
            />
            {submitted && !user.mobile && (
              <div className="text-theme-6 mt-2">Mobile is required</div>
            )}
            <input
              type="text"
              name="pincode"
              className="intro-x login__input input input--lg border border-gray-300 block mt-4"
              style={{
                borderColor: user.pincode || !submitted ? "" : "#D32929",
              }}
              placeholder="6-digit Pincode"
              value={user.pincode}
              onChange={handleChange}
            />
            {submitted && !user.pincode && (
              <div className="text-theme-6 mt-2">Pincode is required</div>
            )}
            <input
              type="text"
              name="school"
              className="intro-x login__input input input--lg border border-gray-300 block mt-4"
              style={{
                borderColor: user.school || !submitted ? "" : "#D32929",
              }}
              placeholder="School"
              value={user.school}
              onChange={handleChange}
            />
            {submitted && !user.school && (
              <div className="text-theme-6 mt-2">School is required</div>
            )}
            <input
              type="password"
              name="password"
              className="intro-x login__input input input--lg border border-gray-300 block mt-4"
              style={{
                borderColor: user.password || !submitted ? "" : "#D32929",
              }}
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
            />
            {submitted && !user.password && (
              <div className="text-theme-6 mt-2">Password is required</div>
            )}
            <div className="intro-x w-full grid grid-cols-12 gap-4 h-1 mt-3">
              <div
                className={
                  evaluatePasswordScore(user.password) > 0
                    ? `col-span-3 h-full rounded bg-${passwordStrengthColour(
                        user.password
                      )}`
                    : `col-span-3 h-full rounded bg-gray-200`
                }
              ></div>
              <div
                className={
                  evaluatePasswordScore(user.password) > 1
                    ? `col-span-3 h-full rounded bg-${passwordStrengthColour(
                        user.password
                      )}`
                    : `col-span-3 h-full rounded bg-gray-200`
                }
              ></div>
              <div
                className={
                  evaluatePasswordScore(user.password) > 2
                    ? `col-span-3 h-full rounded bg-${passwordStrengthColour(
                        user.password
                      )}`
                    : `col-span-3 h-full rounded bg-gray-200`
                }
              ></div>
              <div
                className={
                  evaluatePasswordScore(user.password) > 3
                    ? `col-span-3 h-full rounded bg-${passwordStrengthColour(
                        user.password
                      )}`
                    : `col-span-3 h-full rounded bg-gray-200`
                }
              ></div>
            </div>
            <input
              type="password"
              name="password2"
              className="intro-x login__input input input--lg border border-gray-300 block mt-4"
              style={{
                borderColor: user.password2 || !submitted ? "" : "#D32929",
              }}
              placeholder="Confirm password"
              value={user.password2}
              onChange={handleChange}
            />
            {submitted && !user.password2 && (
              <div className="text-theme-6 mt-2">Password is required</div>
            )}
            <label
              className={`text-${passwordStrengthColour(user.password)} mt-2`}
            >
              {passwordQuality(user.password)}
            </label>
            <div className="flex">
              <h4
                onClick={() => showPasswordAdvice(!passwordAdvice)}
                style={{ cursor: "pointer" }}
                className="intro-x text-gray-600 block mt-2 text-xs sm:text-sm"
              >
                What is a secure password?
              </h4>
            </div>
            {passwordAdvice && (
              <div className="ml-4">
                <h3 className="intro-x text-gray-600 block mt-2 text-xs sm:text-sm">
                  - Make it long
                </h3>
                <h3 className="intro-x text-gray-600 block mt-2 text-xs sm:text-sm">
                  - Use a mix of characters
                </h3>
                <h3 className="intro-x text-gray-600 block mt-2 text-xs sm:text-sm">
                  - Avoid common substitutions
                </h3>
                <h3 className="intro-x text-gray-600 block mt-2 text-xs sm:text-sm">
                  - Don’t use memorable keyboard paths
                </h3>
              </div>
            )}
          </div>
          <div className="flex flex-col sm:block intro-x mt-5 xl:mt-8 text-center xl:text-left mb-20">
            <a
              href="/login"
              className="button button--lg text-gray-700 border border-gray-300 mb-3 sm:mr-3 xl:mt-0 sm:float-left"
            >
              Switch to Sign In
            </a>
            <button
              type="submit"
              className="button button--lg sm:w-32 text-white bg-theme-1 xl:mr-3 py-0 sm:float-right"
            >
              Register
            </button>
          </div>
          {alert && alert.message ? (
            <Alert type={alert.type} message={alert.message} />
          ) : null}
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
