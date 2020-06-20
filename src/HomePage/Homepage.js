import React from 'react'

import * as Icon from 'react-feather'

import { SideMenu } from '../components'
import { MobileMenu } from '../components'
import { Breadcrumb } from '../components'

import { MainContent } from './MainContent'

import '../assets/dist/css/app.css'

import { TopBar } from '../components'

function HomePage(props) {
  /*
  const access_token = useSelector(state => state.authentication.user.token.access_token)
  const refresh_token = useSelector(state => state.authentication.user.token.refresh_token)
  */

  return (
    <div className="app">
      <MobileMenu />
      <div className="flex">
        {props.sideMenu}
        <div className="content">
          <TopBar />
          <MainContent />
        </div>
      </div>
    </div>
  )
}

export { HomePage }
