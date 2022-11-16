import React from "react";
import { userActions } from "../../actions";
import { useAppDispatch } from "../../hooks/hooks";
type Props = {
  forgotPassword: boolean;
};
const MainButtons = ({ forgotPassword }: Props) => {
  return (
    <div className="flex flex-col xl:flex-row intro-x mt-5 xl:mt-8 text-center xl:text-left">
      {!forgotPassword && (
        <button className="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3">
          Login
        </button>
      )}
      {forgotPassword && (
        <button
          type="submit"
          className="button button--lg w-full xl:w-40 text-white bg-theme-1 xl:mr-3"
        >
          Request Password
        </button>
      )}

      <a
        href="/signup"
        className="button button--lg w-full xl:w-32 text-gray-700 border border-gray-300 mt-3 xl:mt-0"
      >
        Sign up
      </a>
    </div>
  );
};

export default MainButtons;
