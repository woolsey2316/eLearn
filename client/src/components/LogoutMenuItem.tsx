import React from "react";
import * as Icon from "react-feather";
type LogoutMenuItemProps = {
  children: JSX.Element;
  name: string;
  onClick: () => void;
};
const LogoutMenuItem = ({ children, name, onClick }: LogoutMenuItemProps) => {
  return (
    <li onClick={onClick} style={{ cursor: "pointer" }}>
      <div className="side-menu">
        <div className="side-menu__icon">{children}</div>
        <div className="side-menu__title"> {name} </div>
      </div>
    </li>
  );
};

export { LogoutMenuItem };
