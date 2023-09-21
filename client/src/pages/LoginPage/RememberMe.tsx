import React from "react";
type Props = {
  forgotPassword: boolean;
  onChangeCheckbox: React.ChangeEventHandler<HTMLInputElement>;
  rememberMe: boolean;
};
const RememberMe = ({
  forgotPassword,
  onChangeCheckbox,
  rememberMe,
}: Props) => {
  return (
    <div className="flex items-center mr-auto">
      {!forgotPassword && (
        <>
          <input
            type="checkbox"
            className="input border mr-2"
            id="remember-me"
            onChange={onChangeCheckbox}
            checked={rememberMe}
          />
          <label className="cursor-pointer select-none" htmlFor="remember-me">
            Remember me
          </label>
        </>
      )}
    </div>
  );
};

export default RememberMe;
