import React from "react";
import { MobileMenu } from "../../components";
import { ChangePasswordForm } from "../../components";

import { TopBar } from "../../components";

import { PageComponentProps } from "../../types/PageComponentProps";

function ChangePassword(props: PageComponentProps) {
  return (
    <>
      <div className="app">
        <MobileMenu />
        <div className="flex px-2 sm:px-10">
          {props.sideMenu}
          <div className="content">
            <TopBar />
            <div className="intro-y flex items-center mt-8">
              <h2 className="text-lg font-medium mr-auto">Change Password</h2>
            </div>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-5 xxl:col-span-9">
                <ChangePasswordForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export { ChangePassword };
