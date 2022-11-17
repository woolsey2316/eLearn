import React from "react";
import * as Icon from "react-feather";

type SideMenuItemProps = {
  children: JSX.Element;
  name: string;
  path: string;
  subMenu?: JSX.Element;
};
const SideMenuItem = ({ children, name, path, subMenu }: SideMenuItemProps) => {
  const collapse = window.location.pathname.includes(path) ? (
    <Icon.ChevronUp className="text-gray-700 h-10 w-10 mr-10" />
  ) : (
    <Icon.ChevronDown className="h-10 w-10 mr-10" />
  );
  return (
    <li>
      <a
        href={path}
        className={
          window.location.pathname.includes(path) ||
          (window.location.pathname === "/" && name === "Dashboard")
            ? "side-menu side-menu--active"
            : "side-menu"
        }
      >
        <div className="side-menu__icon">{children}</div>
        <div className="side-menu__title"> {name} </div>
        {subMenu ? collapse : null}
      </a>
      {subMenu}
    </li>
  );
};

export { SideMenuItem };
