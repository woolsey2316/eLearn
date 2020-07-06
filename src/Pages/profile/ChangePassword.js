import React from 'react'
import { MobileMenu } from '../../components'
import { ChangePasswordForm } from '../../components'

import { history } from '../../helpers/history'

import { useDispatch, useSelector } from 'react-redux'

import { alertActions } from '../../actions'

import { TopBar } from '../../components'

function ChangePassword(props) {
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
              <div className="col-span-12 lg:col-span-8 xxl:col-span-9">
                <ChangePasswordForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export { ChangePassword }
