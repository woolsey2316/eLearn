import React from "react";

import RegisterForm from "./RegisterForm";
import { SplashPage } from "./SplashPage";

function RegisterPage() {
  return (
    <div className="login" data-qa="not-logged">
      <div className="container px-5">
        <div className="block xl:grid grid-cols-2 gap-4">
          <SplashPage />
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export { RegisterPage };
