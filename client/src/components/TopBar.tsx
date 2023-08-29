import React from "react";
import { Breadcrumb } from ".";
import { FullName } from ".";
import { UserIcon } from ".";

function TopBar() {
  return (
    <div className="top-bar">
      <Breadcrumb />
      <FullName />
      <UserIcon />
    </div>
  );
}

export { TopBar };
