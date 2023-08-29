import React from 'react'
import { MobileMenu, SideMenu, TopBar } from '../../components'

interface Props {
  children: JSX.Element | JSX.Element[]
}
const PageWithSideMenu = ({children}: Props) => (
  <div className="app" data-qa="protected-page">
    <MobileMenu />
    <div className="flex px-2 sm:px-10">
      <SideMenu admin={true} />
      <div className="content">
        <TopBar />
        {children}
        </div>
    </div>
  </div>
);

export default PageWithSideMenu
