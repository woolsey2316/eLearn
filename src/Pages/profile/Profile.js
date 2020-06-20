import React from 'react'
import { MobileMenu } from '../../components/MobileMenu'
import { TopBar } from '../../components/TopBar'
import { TopMenu } from './TopMenu'
import { Breadcrumb } from '../../components'

import { SideMenu } from '../../components'

import * as Icon from 'react-feather'

import { ProfileOptions } from './ProfileOptions'

import profile4 from '../../assets/dist/images/profile-4.jpg'
import profile12 from '../../assets/dist/images/profile-12.jpg'
import profile3 from '../../assets/dist/images/profile-3.jpg'
import preview7 from '../../assets/dist/images/preview-7.jpg'
import preview14 from '../../assets/dist/images/preview-14.jpg'
import preview8 from '../../assets/dist/images/preview-8.jpg'
import preview13 from '../../assets/dist/images/preview-13.jpg'
import profile7 from '../../assets/dist/images/profile-7.jpg'
import profile14 from '../../assets/dist/images/profile-14.jpg'
import profile1 from '../../assets/dist/images/profile-1.jpg'
import profile2 from '../../assets/dist/images/profile-2.jpg'
import preview3 from '../../assets/dist/images/preview-3.jpg'
import preview12 from '../../assets/dist/images/preview-12.jpg'
import profile6 from '../../assets/dist/images/profile-6.jpg'

function Profile(props) {
  return (
    <div className="app">
      <MobileMenu />
      <div className="flex">
      {props.sideMenu}

        {/*<!-- BEGIN: Content -->*/}
        <div className="content">
          {/*<!-- BEGIN: Top Bar -->*/}
          <TopBar/>
          {/*<!-- END: Top Bar -->*/}
          <div className="intro-y flex items-center mt-8">
            <h2 className="text-lg font-medium mr-auto">Profile Layout</h2>
          </div>
          {/*<!-- BEGIN: Profile Info -->*/}
          <div className="intro-y box px-5 pt-5 mt-5">
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
                  <div className="text-gray-600">Frontend Engineer</div>
                </div>
              </div>
              <div className="flex mt-6 lg:mt-0 items-center lg:items-start flex-1 flex-col justify-center text-gray-600 px-5 border-l border-r border-gray-200 border-t lg:border-t-0 pt-5 lg:pt-0">
                <div className="truncate sm:whitespace-normal flex items-center">
                  
                  <Icon.Mail className="w-4 h-4 mr-2" />{localStorage.getItem('email')}
                </div>
                <div className="truncate sm:whitespace-normal flex items-center mt-3">
                  
                  <Icon.Instagram className="w-4 h-4 mr-2" /> address
                </div>
                <div className="truncate sm:whitespace-normal flex items-center mt-3">
                  
                  <Icon.Twitter className="w-4 h-4 mr-2" /> role
                </div>
              </div>
              <div className="mt-6 lg:mt-0 flex-1 flex items-center justify-center px-5 border-t lg:border-0 border-gray-200 pt-5 lg:pt-0">
                <div className="text-center rounded-md w-20 py-3">
                  <div className="font-semibold text-theme-1 text-lg">201</div>
                  <div className="text-gray-600">Orders</div>
                </div>
                <div className="text-center rounded-md w-20 py-3">
                  <div className="font-semibold text-theme-1 text-lg">1k</div>
                  <div className="text-gray-600">Purchases</div>
                </div>
                <div className="text-center rounded-md w-20 py-3">
                  <div className="font-semibold text-theme-1 text-lg">492</div>
                  <div className="text-gray-600">Reviews</div>
                </div>
              </div>
            </div>
            
          </div>
          {/*<!-- END: Profile Info -->*/}
          <div className="tab-content mt-5">
            <div className="tab-content__pane active" id="profile">
              <div className="grid grid-cols-12 gap-6">
                {/*<!-- BEGIN: Latest Uploads -->*/}

                {/*<!-- END: Latest Uploads -->*/}
                {/*<!-- BEGIN: Work In Progress -->*/}

                {/*<!-- END: Daily Sales -->*/}
                {/*<!-- BEGIN: Latest Tasks -->*/}
              </div>
            </div>
          </div>
          <ProfileOptions />
        </div>
        {/*<!-- END: Content -->*/}
      </div>
    </div>
  )
}

export { Profile }
