import React, { useEffect } from "react";
import { MobileMenu } from "../../components/MobileMenu";
import { TopBar } from "../../components/TopBar";

import { TaskMenu }  from "./TaskMenu";
import UserOutline from "./UserOutline";
import ProfileSettings from "./ProfileSettings";
import UsefulLinks from "./UsefulLinks";
import PageWithSideMenu from "../PageWithSideMenu/PageWithSideMenu";

function Profile() {
  return (
    <PageWithSideMenu>
      <div className="intro-y flex items-center mt-8 mb-5">
        <h2 className="text-lg font-medium mr-auto">Profile</h2>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <UserOutline />
        <ProfileSettings />
        <UsefulLinks />
        <TaskMenu />
      </div>
    </PageWithSideMenu>
  );
}

export { Profile };
