import React from 'react';
import * as Icon from "react-feather"

const ProfileSubMenu = () => {
  return ( 
    <ul className={"side-menu__sub-open display-block"}>
    <li>
      <a href="/student/profile" 
      className={
          window.location.pathname === "/student/profile" 
            ? 'side-menu side-menu--active'
            : 'side-menu'
        }>
        <div className="side-menu__icon"> <Icon.User className="side-menu__icon" /> </div>
        <div className="side-menu__title font-white"> Profile </div>
      </a>
    </li>
    <li>
      <a href="/student/profile/update_profile" 
      className={
          window.location.pathname === "/student/profile/update_profile" 
            ? 'side-menu side-menu--active'
            : 'side-menu'
        }>
        <div className="side-menu__icon"> <Icon.User className="side-menu__icon" /> </div>
        <div className="side-menu__title font-white"> Update Profile </div>
      </a>
    </li>
    <li>
      <a href="/student/profile/change_password" 
      className={
          window.location.pathname === "/student/profile/change_password" 
            ? 'side-menu side-menu--active'
            : 'side-menu'
        }>
        <div className="side-menu__icon"> <Icon.Activity className="side-menu__icon" /> </div>
        <div className="side-menu__title"> Change Password </div>
      </a>
    </li>
  </ul>
   );
}
 
export default ProfileSubMenu;