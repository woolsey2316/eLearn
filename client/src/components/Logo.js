import React from "react";

function Logo() {
  return (
    <a href="/" className="-intro-x hidden md:flex">
      <img
        alt="Midone Tailwind HTML Admin Template"
        className="w-6"
        src="dist/images/logo.svg"
      />
      <span className="text-white text-lg ml-3">
        Mid<span className="font-medium">one</span>
      </span>
    </a>
  );
}

export { Logo };
