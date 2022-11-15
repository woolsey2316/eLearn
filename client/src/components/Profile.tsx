import React from "react";

import { getUser } from "../helpers";

function Profile() {
  const user = getUser();
  return (
    <div className="relative flex items-center p-5">
      <div className="w-12 h-12 image-fit">
        <img
          alt="Midone Tailwind HTML Admin Template"
          className="rounded-full"
          src="/images/profile-8.jpg"
        />
      </div>
      <div className="ml-4 mr-auto">
        <div className="font-medium text-white">{user && user.name}</div>
        <div className="text-gray-600">Student</div>
      </div>
    </div>
  );
}
export { Profile };
