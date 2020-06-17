import React from 'react'
import { MobileMenu } from '../../components/MobileMenu'
import { TopBar } from './TopBar'
import { TopMenu } from './TopMenu'

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

function Profile() {
  return (
    <div className="app">
      <MobileMenu />
      <div className="flex">
        <SideMenu />

        {/*<!-- BEGIN: Content -->*/}
        <div className="content">
          {/*<!-- BEGIN: Top Bar -->*/}
          <div className="top-bar">
            {/*<!-- BEGIN: Breadcrumb -->*/}
            <div className="-intro-x breadcrumb mr-auto hidden sm:flex">
              {' '}
              <a href="" className="">
                Application
              </a>{' '}
              <Icon.ChevronRight className="breadcrumb__icon" />{' '}
              <a href="" className="breadcrumb--active">
                Dashboard
              </a>{' '}
            </div>
            {/*<!-- END: Breadcrumb -->*/}
            {/*<!-- BEGIN: Search -->*/}
            <div className="intro-x relative mr-3 sm:mr-6">
              <div className="search hidden sm:block">
                <input
                  type="text"
                  className="search__input input placeholder-theme-13"
                  placeholder="Search..."
                />
                <Icon.Search className="search__icon" />
              </div>
              <a className="notification sm:hidden" href="">
                {' '}
                <Icon.Search className="notification__icon" />{' '}
              </a>
              <div className="search-result">
                <div className="search-result__content">
                  <div className="search-result__content__title">Pages</div>
                  <div className="mb-5">
                    <a href="" className="flex items-center">
                      <div className="w-8 h-8 bg-theme-18 text-theme-9 flex items-center justify-center rounded-full">
                        {' '}
                        <i className="w-4 h-4" data-feather="inbox"></i>{' '}
                      </div>
                      <div className="ml-3">Mail Settings</div>
                    </a>
                    <a href="" className="flex items-center mt-2">
                      <div className="w-8 h-8 bg-theme-17 text-theme-11 flex items-center justify-center rounded-full">
                        {' '}
                        <i className="w-4 h-4" data-feather="users"></i>{' '}
                      </div>
                      <div className="ml-3">Users & Permissions</div>
                    </a>
                    <a href="" className="flex items-center mt-2">
                      <div className="w-8 h-8 bg-theme-14 text-theme-10 flex items-center justify-center rounded-full">
                        {' '}
                        <i
                          className="w-4 h-4"
                          data-feather="credit-card"
                        ></i>{' '}
                      </div>
                      <div className="ml-3">Transactions Report</div>
                    </a>
                  </div>
                  <div className="search-result__content__title">Users</div>
                  <div className="mb-5">
                    <a href="" className="flex items-center mt-2">
                      <div className="w-8 h-8 image-fit">
                        <img
                          alt="Midone Tailwind HTML Admin Template"
                          className="rounded-full"
                          src={profile4}
                        />
                      </div>
                      <div className="ml-3">Angelina Jolie</div>
                      <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                        angelinajolie@left4code.com
                      </div>
                    </a>
                    <a href="" className="flex items-center mt-2">
                      <div className="w-8 h-8 image-fit">
                        <img
                          alt="Midone Tailwind HTML Admin Template"
                          className="rounded-full"
                          src={profile12}
                        />
                      </div>
                      <div className="ml-3">Johnny Depp</div>
                      <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                        johnnydepp@left4code.com
                      </div>
                    </a>
                    <a href="" className="flex items-center mt-2">
                      <div className="w-8 h-8 image-fit">
                        <img
                          alt="Midone Tailwind HTML Admin Template"
                          className="rounded-full"
                          src={profile12}
                        />
                      </div>
                      <div className="ml-3">Johnny Depp</div>
                      <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                        johnnydepp@left4code.com
                      </div>
                    </a>
                    <a href="" className="flex items-center mt-2">
                      <div className="w-8 h-8 image-fit">
                        <img
                          alt="Midone Tailwind HTML Admin Template"
                          className="rounded-full"
                          src={profile3}
                        />
                      </div>
                      <div className="ml-3">Johnny Depp</div>
                      <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                        johnnydepp@left4code.com
                      </div>
                    </a>
                  </div>
                  <div className="search-result__content__title">Products</div>
                  <a href="" className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        className="rounded-full"
                        src={preview7}
                      />
                    </div>
                    <div className="ml-3">Samsung Galaxy S20 Ultra</div>
                    <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                      Smartphone &amp; Tablet
                    </div>
                  </a>
                  <a href="" className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        className="rounded-full"
                        src={preview14}
                      />
                    </div>
                    <div className="ml-3">Samsung Galaxy S20 Ultra</div>
                    <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                      Smartphone &amp; Tablet
                    </div>
                  </a>
                  <a href="" className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        className="rounded-full"
                        src={preview8}
                      />
                    </div>
                    <div className="ml-3">Dell XPS 13</div>
                    <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                      PC &amp; Laptop
                    </div>
                  </a>
                  <a href="" className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        className="rounded-full"
                        src={preview13}
                      />
                    </div>
                    <div className="ml-3">Nikon Z6</div>
                    <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                      Photography
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/*<!-- END: Search -->*/}
            {/*<!-- BEGIN: Notifications -->*/}
            <div className="intro-x dropdown relative mr-auto sm:mr-6">
              <div className="dropdown-toggle notification notification--bullet cursor-pointer">
                {' '}
                <Icon.Bell className="notification__icon" />{' '}
              </div>
              <div className="notification-content dropdown-box mt-8 absolute top-0 left-0 sm:left-auto sm:right-0 z-20 -ml-10 sm:ml-0">
                <div className="notification-content__box dropdown-box__content box">
                  <div className="notification-content__title">
                    Notifications
                  </div>
                  <div className="cursor-pointer relative flex items-center ">
                    <div className="w-12 h-12 flex-none image-fit mr-1">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        className="rounded-full"
                        src={profile4}
                      />
                      <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="ml-2 overflow-hidden">
                      <div className="flex items-center">
                        <a
                          href="javascript:;"
                          className="font-medium truncate mr-5"
                        >
                          Angelina Jolie
                        </a>
                        <div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">
                          01:10 PM
                        </div>
                      </div>
                      <div className="w-full truncate text-gray-600">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&#039;s standard dummy text ever since the 1500
                      </div>
                    </div>
                  </div>
                  <div className="cursor-pointer relative flex items-center mt-5">
                    <div className="w-12 h-12 flex-none image-fit mr-1">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        className="rounded-full"
                        src={profile12}
                      />
                      <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="ml-2 overflow-hidden">
                      <div className="flex items-center">
                        <a
                          href="javascript:;"
                          className="font-medium truncate mr-5"
                        >
                          Johnny Depp
                        </a>
                        <div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">
                          05:09 AM
                        </div>
                      </div>
                      <div className="w-full truncate text-gray-600">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 20
                      </div>
                    </div>
                  </div>
                  <div className="cursor-pointer relative flex items-center mt-5">
                    <div className="w-12 h-12 flex-none image-fit mr-1">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        className="rounded-full"
                        src={profile12}
                      />
                      <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="ml-2 overflow-hidden">
                      <div className="flex items-center">
                        <a
                          href="javascript:;"
                          className="font-medium truncate mr-5"
                        >
                          Johnny Depp
                        </a>
                        <div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">
                          01:10 PM
                        </div>
                      </div>
                      <div className="w-full truncate text-gray-600">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomi
                      </div>
                    </div>
                  </div>
                  <div className="cursor-pointer relative flex items-center mt-5">
                    <div className="w-12 h-12 flex-none image-fit mr-1">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        className="rounded-full"
                        src={profile3}
                      />
                      <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="ml-2 overflow-hidden">
                      <div className="flex items-center">
                        <a
                          href="javascript:;"
                          className="font-medium truncate mr-5"
                        >
                          Johnny Depp
                        </a>
                        <div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">
                          06:05 AM
                        </div>
                      </div>
                      <div className="w-full truncate text-gray-600">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomi
                      </div>
                    </div>
                  </div>
                  <div className="cursor-pointer relative flex items-center mt-5">
                    <div className="w-12 h-12 flex-none image-fit mr-1">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        className="rounded-full"
                        src={profile7}
                      />
                      <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="ml-2 overflow-hidden">
                      <div className="flex items-center">
                        <a
                          href="javascript:;"
                          className="font-medium truncate mr-5"
                        >
                          Kate Winslet
                        </a>
                        <div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">
                          01:10 PM
                        </div>
                      </div>
                      <div className="w-full truncate text-gray-600">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem{' '}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*<!-- END: Notifications -->*/}
            {/*<!-- BEGIN: Account Menu -->*/}
            <div className="intro-x dropdown w-8 h-8 relative">
              <div className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in">
                <img alt="Midone Tailwind HTML Admin Template" src={profile3} />
              </div>
              <div className="dropdown-box mt-10 absolute w-56 top-0 right-0 z-20">
                <div className="dropdown-box__content box bg-theme-38 text-white">
                  <div className="p-4 border-b border-theme-40">
                    <div className="font-medium">Angelina Jolie</div>
                    <div className="text-xs text-theme-41">DevOps Engineer</div>
                  </div>
                  <div className="p-2">
                    <a
                      href=""
                      className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"
                    >
                      {' '}
                      <Icon.User className="w-4 h-4 mr-2" /> Profile{' '}
                    </a>
                    <a
                      href=""
                      className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"
                    >
                      {' '}
                      <Icon.Edit className="w-4 h-4 mr-2" /> Add Account{' '}
                    </a>
                    <a
                      href=""
                      className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"
                    >
                      {' '}
                      <Icon.Lock className="w-4 h-4 mr-2" /> Reset Password{' '}
                    </a>
                    <a
                      href=""
                      className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"
                    >
                      {' '}
                      <Icon.HelpCircle className="w-4 h-4 mr-2" /> Help{' '}
                    </a>
                  </div>
                  <div className="p-2 border-t border-theme-40">
                    <a
                      href=""
                      className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"
                    >
                      {' '}
                      <Icon.ToggleRight className="w-4 h-4 mr-2" /> Logout{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*<!-- END: Account Menu -->*/}
          </div>
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
                  {' '}
                  <Icon.Mail className="w-4 h-4 mr-2" />{' '}
                  kevinspacey@left4code.com{' '}
                </div>
                <div className="truncate sm:whitespace-normal flex items-center mt-3">
                  {' '}
                  <Icon.Instagram className="w-4 h-4 mr-2" /> Instagram Kevin
                  Spacey{' '}
                </div>
                <div className="truncate sm:whitespace-normal flex items-center mt-3">
                  {' '}
                  <Icon.Twitter className="w-4 h-4 mr-2" /> Twitter Kevin Spacey{' '}
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
            <div className="nav-tabs flex flex-col sm:flex-row justify-center lg:justify-start">
              <a
                data-toggle="tab"
                data-target="#profile"
                href="javascript:;"
                className="py-4 sm:mr-8 flex items-center active"
              >
                {' '}
                <i className="w-4 h-4 mr-2" data-feather="user"></i> Update
                Profile{' '}
              </a>
              <a
                data-toggle="tab"
                data-target="#change-password"
                href="javascript:;"
                className="py-4 sm:mr-8 flex items-center"
              >
                {' '}
                <i className="w-4 h-4 mr-2" data-feather="lock"></i> Change
                Password{' '}
              </a>
              <a
                data-toggle="tab"
                data-target="#settings"
                href="javascript:;"
                className="py-4 sm:mr-8 flex items-center"
              >
                {' '}
                <i className="w-4 h-4 mr-2" data-feather="settings"></i>{' '}
                Settings{' '}
              </a>
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
