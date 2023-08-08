import React from "react";

import { MobileMenu } from "../../components";

import { AdminMainContent } from "./AdminMainContent";

import { TopBar } from "../../components";
import { PageComponentProps } from "../../types/PageComponentProps";

function AdminDashboard(props: PageComponentProps) {
  /*
  const access_token = useSelector(state => state.authentication.user.token.access_token)
  const refresh_token = useSelector(state => state.authentication.user.token.refresh_token)
  */

  return (
    <div className="app" data-qa="admin-page">
      <MobileMenu />
      <div className="flex px-2 sm:px-10">
        {props.sideMenu}
        <div className="content">
          <TopBar open={props.openModal} />
          <AdminMainContent />
        </div>
      </div>
    </div>
  );
}

export { AdminDashboard };
