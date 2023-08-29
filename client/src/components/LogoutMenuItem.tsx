import React, { useContext } from "react";
import * as Icon from "react-feather";
import { ModalContext } from "../context/ModalContext";
type LogoutMenuItemProps = {
  children: JSX.Element;
  name: string;
};
const LogoutMenuItem = ({ children, name }: LogoutMenuItemProps) => {
  const modalContext = useContext(ModalContext)
  return (
    <li onClick={modalContext.openLogoutModal} style={{ cursor: "pointer" }}>
      <div className="side-menu">
        <div className="side-menu__icon">{children}</div>
        <div className="side-menu__title"> {name} </div>
      </div>
    </li>
  );
};

export { LogoutMenuItem };
