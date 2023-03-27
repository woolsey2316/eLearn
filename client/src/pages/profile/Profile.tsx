import React, { useEffect } from "react";
import { MobileMenu } from "../../components/MobileMenu";
import { TopBar } from "../../components/TopBar";

import { TaskMenu }  from "./TaskMenu";
import { PageComponentProps } from "../../types/PageComponentProps";
import UserOutline from "./UserOutline";
import ProfileSettings from "./ProfileSettings";
import UsefulLinks from "./UsefulLinks";

function Profile(props: PageComponentProps) {
  return (
    <div className="app">
      <MobileMenu />
      <div className="flex px-2 sm:px-10">
        {props.sideMenu}
        <div className="content">
          <TopBar open={props.openModal} />
          <div className="intro-y flex items-center mt-8 mb-5">
            <h2 className="text-lg font-medium mr-auto">Profile</h2>
          </div>
          <div className="grid grid-cols-12 gap-5">
            <UserOutline />
            <ProfileSettings />
            <UsefulLinks />
            <TaskMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Profile };
