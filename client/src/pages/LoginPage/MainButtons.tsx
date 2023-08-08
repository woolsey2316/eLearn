import React from 'react'
type Props = {
  forgotPassword: boolean;
};
const MainButtons = ({ forgotPassword }: Props) => {
  return (
    <div className="flex flex-col xl:flex-row intro-x mt-5 xl:mt-8 text-center xl:text-left">
      {/* Submit login credentials */}
      {!forgotPassword && (
        <button
          type="submit"
          data-qa="login-button"
          className="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3"
        >
          Login
        </button>
      )}
      {/* Request password */}
      {forgotPassword && (
        <button
          type="submit"
          id="requestPass"
          className="button button--lg w-full xl:w-40 text-white bg-theme-1 xl:mr-3"
        >
          Request Password
        </button>
      )}
      {/* go to sign up page */}
      <a
        type="submit"
        href="/signup"
        className="button button--lg w-full xl:w-32 text-gray-700 border border-gray-300 mt-3 xl:mt-0"
      >
        Sign up
      </a>
    </div>
  );
};

export default MainButtons;
