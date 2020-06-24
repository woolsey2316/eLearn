import React from 'react'
import { MobileMenu } from '../../components/MobileMenu'
import { TopBar } from '../../components/TopBar'
import { TopMenu } from './TopMenu'
import { Breadcrumb } from '../../components'

import { SideMenu } from '../../components'

import * as Icon from 'react-feather'

import { ProfileOptions } from './ProfileOptions'

import profile14 from '../../assets/dist/images/profile-14.jpg'

function Profile(props) {
  return (
    <div className="app">
      <MobileMenu />
      <div style={{ paddingLeft: '2.3em' }} className="flex">
        {props.sideMenu}
        <div className="content">
          <TopBar />
          <div className="intro-y flex items-center mt-8">
            <h2 className="text-lg font-medium mr-auto">Profile</h2>
          </div>
          <div className="flex">
            <div
              style={{ width: '75%' }}
              className="intro-y box px-5 pt-5 mt-5"
            >
              <div className="flex flex-col lg:flex-row border-b border-gray-200 pb-5 -mx-5">
                <div className="flex flex-1 px-5 items-center justify-center lg:justify-start">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 flex-none lg:w-32 lg:h-32 image-fit relative">
                    <img
                      alt="Midone Tailwind HTML Admin Template"
                      className="rounded-full"
                      src={profile14}
                    />
                  </div>
                  <div className="ml-5">
                    <div className="w-24 sm:w-40 truncate sm:whitespace-normal font-medium text-lg">
                      Kevin Spacey
                    </div>
                    <div className="text-gray-600">Student</div>
                  </div>
                </div>
                <div className="flex mt-6 lg:mt-0 items-center lg:items-start flex-1 flex-col justify-center text-gray-600 px-5 border-l border-r border-gray-200 border-t lg:border-t-0 pt-5 lg:pt-0">
                  <div className="truncate sm:whitespace-normal flex items-center">
                    <Icon.Mail className="w-4 h-4 mr-2" />
                    {localStorage.getItem('email')}
                  </div>
                  <div className="truncate sm:whitespace-normal flex items-center mt-3">
                    <Icon.Book className="w-4 h-4 mr-2" /> address
                  </div>
                  <div className="truncate sm:whitespace-normal flex items-center mt-3">
                    <Icon.Briefcase className="w-4 h-4 mr-2" /> role
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-4 xxl:col-span-3 flex lg:block flex-col-reverse"></div>
              </div>
            </div>
            <div style={{ width: '25%' }} className="intro-y box mt-5 ml-5">
              <div className="relative flex items-center pt-5 pb-5 pl-5">
                <div className="dropdown relative">
                  <h2 className="text-lg font-medium">Profile Settings</h2>
                </div>
              </div>
              <div className="p-5 border-t border-gray-200">
                <a className="flex items-center mb-5" href="">
                  <Icon.Box className="w-4 h-4 mr-2" /> Account Settings
                </a>
                <a className="flex items-center mb-5" href="">
                  <Icon.Lock className="w-4 h-4 mr-2" /> Change Password
                </a>
              </div>
            </div>
          </div>
          <ProfileOptions />
        </div>
      </div>
    </div>
  )
}

export { Profile }
