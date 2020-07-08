import React from 'react'

import { MobileMenu } from '../components'

import { MainContent } from './MainContent'

import '../assets/dist/css/app.css'

import { TopBar } from '../components'

function Dashboard(props) {
  /*
  const access_token = useSelector(state => state.authentication.user.token.access_token)
  const refresh_token = useSelector(state => state.authentication.user.token.refresh_token)
  */

  return (
    <div className="app">
      <MobileMenu />
      <div className="flex px-2 sm:px-10">
        {props.sideMenu}
        <div className="content">
          <TopBar open={props.openModal} />
          <MainContent />
        </div>
      </div>
    </div>
  )
}

export { Dashboard }
