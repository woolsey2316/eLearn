import React from "react";
import { getUser } from "../helpers";

function FullName({ firstName, lastName }) {
  const user = getUser();
  return (
    <div className="flex">
      <h6 className="font-medium text-gray-700 leading-none mt-auto mb-auto mr-4">
        {user && `${user.email} | ${user.name}`}
      </h6>
      <h6 className="font-medium leading-none mt-3">
        {localStorage.getItem("fullname")}
      </h6>
    </div>
  );
}

export { FullName };
