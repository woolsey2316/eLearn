import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

import { history } from "../helpers";

import { alertActions } from "../actions";
import { authActions } from "../actions";

import { Alert } from ".";

function ChangePasswordForm() {
  const [user, setUser] = useState({
    confirmPassword: "",
    email: "",
    password: "",
  });

  const alert = useAppSelector((state) => state.alert);
  const dispatch = useAppDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }, [dispatch]);

  function handleChange(e: React.FormEvent<HTMLInputElement>): void {
    const { name, value } = e.currentTarget;
    setUser((user) => ({
      ...user,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    if (
      user.confirmPassword &&
      user.email &&
      user.password &&
      user.confirmPassword
    ) {
      dispatch(
        authActions.updatePassword(
          user.email,
          user.password,
          user.confirmPassword
        )
      );
    }
  }

  return (
    <div className="intro-y box lg:mt-5">
      <form
        style={{ margin: "auto" }}
        name="form"
        onSubmit={handleSubmit}
        className="validate-form"
      >
        <div className="p-5">
          <div>
            <label>Email</label>
            <input
              type="text"
              className="input w-full border mt-2"
              placeholder=""
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="mt-3">
            <label>New Password</label>
            <input
              type="password"
              className="input w-full border mt-2"
              placeholder=""
              name="confirmPassword"
              onChange={handleChange}
            />
          </div>
          <div className="mt-3">
            <label>Confirm New Password</label>
            <input
              type="password"
              className="input w-full border mt-2"
              placeholder=""
              name="password"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="button bg-theme-1 text-white mt-4">
            Change Password
          </button>
          {alert.message ? (
            <Alert type={alert.type} message={alert.message} />
          ) : null}
        </div>
      </form>
    </div>
  );
}

export { ChangePasswordForm };
