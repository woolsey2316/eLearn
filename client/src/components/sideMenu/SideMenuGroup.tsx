import React from "react";
import * as Icon from "react-feather";
type Props = {
  children: JSX.Element;
  name: string;
  path: string;
  subMenu: JSX.Element;
  open: boolean | string;
  setOpen: React.Dispatch<React.SetStateAction<boolean | string>>;
};
function SideMenuGroup({
  children,
  name,
  path,
  subMenu,
  open,
  setOpen,
}: Props) {
  const collapse =
    open === name || window.location.pathname.includes(path) ? (
      <Icon.ChevronUp className="h-10 w-10" />
    ) : (
      <Icon.ChevronDown className="h-10 w-10" />
    );
  return (
    <li>
      <div
        className={
          window.location.pathname.includes(path)
            ? "side-menu side-menu--active w-full"
            : "side-menu"
        }
      >
        <div
          onClick={() => {
            open === name ? setOpen(false) : setOpen(name);
          }}
          className="flex cursor-pointer w-48"
        >
          <div className="side-menu__icon">{children}</div>
          <div className="side-menu__title"> {name} </div>
          {collapse}
        </div>
      </div>
      {(open === name || window.location.pathname.includes(path)) && subMenu}
    </li>
  );
}

export { SideMenuGroup };
