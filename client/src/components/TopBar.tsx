import React from "react";
import { Breadcrumb } from ".";
import { FullName } from ".";
import { UserIcon } from ".";
type Props = {
  open: () => void;
};
function TopBar(props: Props) {
  return (
    <div className="top-bar">
      <Breadcrumb />
      <FullName />
      <UserIcon open={props.open} />
    </div>
  );
}

export { TopBar };
