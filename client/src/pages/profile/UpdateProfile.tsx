import React from "react";

import { MobileMenu } from "../../components";

import { TopBar } from "../../components";

import { PersonalInformation } from "./PersonalInformation";

import PageWithSideMenu from "../PageWithSideMenu/PageWithSideMenu";

function UpdateProfile() {
  return (
    <PageWithSideMenu>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Update Profile</h2>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 xxl:col-span-9">
          <div className="intro-y box lg:mt-5"></div>
          <PersonalInformation />
        </div>
      </div>
    </PageWithSideMenu>
  );
}

export { UpdateProfile };
