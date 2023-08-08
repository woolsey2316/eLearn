import React from "react";

import { MobileMenu } from "../../components";

import { MainContent } from "./MainContent";

import { TopBar } from "../../components";
import { PageComponentProps } from "../../types/PageComponentProps";

function Dashboard(props: PageComponentProps) {
  return (
    <div className="app" data-qa="protected-page">
      <MobileMenu />
      <div className="flex px-2 sm:px-10">
        {props.sideMenu}
        <div className="content">
          <TopBar open={props.openModal} />
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export { Dashboard };
