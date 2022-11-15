import React from "react";

const FormHeading = () => {
  return (
    <React.Fragment>
      <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
        Sign In
      </h2>
      <div className="intro-x mt-2 text-gray-500 xl:hidden text-center">
        A few more clicks to sign in to your account. Manage all your online
        exams in one place
      </div>
    </React.Fragment>
  );
};

export default FormHeading;
