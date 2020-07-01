import React from 'react'

import * as Icon from 'react-feather'

import { SideMenu } from '../../components'
import { MobileMenu } from '../../components'
import { Breadcrumb } from '../../components'

import { ExamCreationForm } from './ExamCreationForm'

import { TopBar } from '../../components'

function CreateExam(props) {
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
          <ExamCreationForm />
        </div>
      </div>
    </div>
  )
}

export { CreateExam }
