import React from "react";
type Props = {
  forgotPassword: boolean;
  setForgotPassword: React.Dispatch<React.SetStateAction<boolean>>;
};
const ForgotPassword = ({ forgotPassword, setForgotPassword }: Props) => {
  return (
    <React.Fragment>
      {!forgotPassword && (
        <h4
          style={{ cursor: "pointer" }}
          id="forgotPass"
          onClick={() => setForgotPassword(true)}
        >
          Forgot Password?
        </h4>
      )}
      {forgotPassword && (
        <h4
          style={{ cursor: "pointer" }}
          id="backToSignIn"
          onClick={() => setForgotPassword(false)}
        >
          Show Password Field
        </h4>
      )}
    </React.Fragment>
  );
};

export default ForgotPassword;
