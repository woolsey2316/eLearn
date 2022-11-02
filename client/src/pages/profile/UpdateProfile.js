import React from "react";

import { MobileMenu } from "../../components";

import { TopBar } from "../../components";

import { PersonalInformation } from "./PersonalInformation";

function UpdateProfile(props) {
  return (
    <body className="app">
      <MobileMenu />
      <div className="flex px-2 sm:px-10">
        {props.sideMenu}
        <div className="content">
          <TopBar />
          <div className="intro-y flex items-center mt-8">
            <h2 className="text-lg font-medium mr-auto">Update Profile</h2>
          </div>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-8 xxl:col-span-9">
              <div className="intro-y box lg:mt-5"></div>
              <PersonalInformation />
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export { UpdateProfile };
