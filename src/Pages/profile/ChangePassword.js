import React from 'react'
import { MobileMenu } from '../../components'
import { ChangePasswordForm } from '../../components'

import { history } from '../../helpers/history'

import { useDispatch, useSelector } from 'react-redux'

import { alertActions } from '../../actions'

import { TopBar } from '../../components'

import * as Icon from 'react-feather'

import profile3 from '../../assets/dist/images/profile-3.jpg'
import profile14 from '../../assets/dist/images/profile-14.jpg'
import profile8 from '../../assets/dist/images/profile-8.jpg'
import preview2 from '../../assets/dist/images/preview-2.jpg'
import preview13 from '../../assets/dist/images/preview-13.jpg'
import preview5 from '../../assets/dist/images/preview-5.jpg'
import preview1 from '../../assets/dist/images/preview-1.jpg'
import profile1 from '../../assets/dist/images/profile-1.jpg'
import profile2 from '../../assets/dist/images/profile-2.jpg'
import profile4 from '../../assets/dist/images/profile-4.jpg'

import { SideMenu } from '../../components/SideMenu'

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
