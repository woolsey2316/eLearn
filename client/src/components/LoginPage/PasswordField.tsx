import React from "react";
type Props = {
  forgotPassword: boolean;
  submitted: boolean;
  password: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
};
const PasswordField = ({
  forgotPassword,
  submitted,
  password,
  handleChange,
}: Props) => {
  return (
    <React.Fragment>
      {!forgotPassword && (
        <input
          style={{ padding: "0.75em 1em" }}
          type="password"
          className="intro-x login__input input input--lg border border-gray-300 block mt-4"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      )}
      {!forgotPassword && submitted && !password && (
        <h2 className="mt-1 text-theme-6">Password is required</h2>
      )}
    </React.Fragment>
  );
};

export default PasswordField;
