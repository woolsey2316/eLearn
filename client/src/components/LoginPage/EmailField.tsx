import React from "react";
type Props = {
  submitted: boolean;
  email: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
};
const EmailField = ({ submitted, email, handleChange }: Props) => {
  return (
    <React.Fragment>
      <input
        style={{ padding: "0.75em 1em" }}
        type="text"
        className="intro-x login__input input input--lg border border-gray-300 block"
        placeholder="Email"
        name="email"
        id="email-field"
        value={email}
        onChange={handleChange}
      />
      {submitted && !email ? (
        <h2 className="mt-1 text-theme-6">Email is required</h2>
      ) : null}
    </React.Fragment>
  );
};

export default EmailField;
