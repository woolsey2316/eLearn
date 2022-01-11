import React, { useEffect } from 'react'
import { MobileMenu } from '../../components/MobileMenu'
import { TopBar } from '../../components/TopBar'

import * as Icon from 'react-feather'

import { ProfileOptions } from './ProfileOptions'

import { useDispatch, useSelector } from 'react-redux'

import { userActions } from '../../actions'

function Profile(props) {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.users.user)

  useEffect(() => {
    dispatch(userActions.verifyEmail())
  }, [dispatch])

  useEffect(() => {
    dispatch(userActions.getUserDetails())
    
  },[])

  //const verified = useSelector((state) => state.user.verifyEmail)
  const role = ['Student', 'Admin']

  return (
    <div className="app">
      <MobileMenu />
      <div className="flex px-2 sm:px-10">
        {props.sideMenu}
        <div className="content">
          <TopBar open={props.openModal} />
          <div className="intro-y flex items-center mt-8 mb-5">
            <h2 className="text-lg font-medium mr-auto">Profile</h2>
          </div>
          <div className="grid grid-cols-12 gap-5">
            <div className="intro-y box col-span-8 lg:col-span-9 px-5 pt-5">
              <div className="flex flex-col lg:flex-row border-b border-gray-200 pb-5 -mx-5">
                <div className="flex flex-1 px-5 items-center justify-center lg:justify-start">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 flex-none lg:w-32 lg:h-32 image-fit relative">
                    <img
                      alt="Midone Tailwind HTML Admin Template"
                      className="rounded-full"
                      src='/images/profile-8.png'
                    />
                  </div>
                  <div className="ml-5">
                    <div className="sm:whitespace-normal font-medium text-lg break-all">
                      {user?.name}
                    </div>
                    <div className="text-gray-600">{role[user?.roleId - 1]}</div>
                    <div className="flex mt-1">
                      <div
                        className="truncate sm:whitespace-normal flex items-center text-theme-9 tooltip"
                        title="Email verified"
                      >
                        {true ? (
                          <Icon.Mail className="w-4 h-4 mr-2 text-theme-9" />
                        ) : (
                          <Icon.Mail className="w-4 h-4 mr-2 text-theme-11" />
                        )}
                      </div>
                      <div
                        className="truncate sm:whitespace-normal flex items-center tooltip"
                        title="Mobile verified"
                      >
                        {true ? (
                          <Icon.Phone className="w-4 h-4 mr-2 text-theme-9" />
                        ) : (
                          <Icon.Phone className="w-4 h-4 mr-2 text-theme-11" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex mt-6 lg:mt-0 items-center lg:items-start flex-1 flex-col text-gray-600 px-5 border-l border-r border-gray-200 border-t lg:border-t-0 pt-5 lg:pt-0">
                  <div className="truncate sm:whitespace-normal flex items-center">
                    <Icon.Mail className="w-4 h-4 mr-2" />
                    {user?.email}
                  </div>
                  <div className="truncate sm:whitespace-normal flex items-center mt-3">
                    <Icon.Home className="w-4 h-4 mr-2" /> {user?.address1}
                  </div>
                  <div className="truncate sm:whitespace-normal flex items-center mt-3">
                    <Icon.Phone className="w-4 h-4 mr-2" /> {user?.mobile}
                  </div>
                  <div className="truncate sm:whitespace-normal flex items-center mt-3">
                    <Icon.Book className="w-4 h-4 mr-2" /> {user?.school}
                  </div>
                  <div className="truncate sm:whitespace-normal flex items-center mt-3">
                    <Icon.Briefcase className="w-4 h-4 mr-2" />
                    {`${user?.state}, ${user?.area}`}
                  </div>
                </div>
                <div className=""></div>
              </div>
            </div>
            <div className="intro-y box col-span-4 lg:col-span-3">
              <div className="relative flex items-center pt-5 pb-5 pl-5">
                <div className="dropdown relative">
                  <h2 className="text-lg font-medium">Profile Settings</h2>
                </div>
              </div>
              <div className="p-5 border-t border-gray-200">
                <a
                  className="flex items-center mb-5"
                  href="/student/profile/update_profile"
                >
                  <Icon.Box className="w-4 h-4 mr-2" /> Update Profile
                </a>
                <a
                  className="flex items-center mb-5"
                  href="/student/profile/change_password"
                >
                  <Icon.Lock className="w-4 h-4 mr-2" /> Change Password
                </a>
              </div>
            </div>
            <ProfileOptions />
          </div>
        </div>
      </div>
    </div>
  )
}

export { Profile }
