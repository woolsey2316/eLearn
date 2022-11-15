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
          onClick={() => setForgotPassword(!forgotPassword)}
        >
          Forgot Password?
        </h4>
      )}
      {forgotPassword && (
        <h4
          style={{ cursor: "pointer" }}
          onClick={() => setForgotPassword(!forgotPassword)}
        >
          Show Password Field
        </h4>
      )}
    </React.Fragment>
  );
};

export default ForgotPassword;
