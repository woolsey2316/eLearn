import React from 'react'

import * as Icon from 'react-feather'

import { SideMenu } from '../../components'
import { MobileMenu } from '../../components'

import logo from '../../assets/dist/images/logo.svg'
import profile4 from '../../assets/dist/images/profile-4.jpg'
import profile1 from '../../assets/dist/images/profile-1.jpg'
import profile6 from '../../assets/dist/images/profile-6.jpg'
import profile5 from '../../assets/dist/images/profile-5.jpg'
import preview14 from '../../assets/dist/images/preview-14.jpg'
import preview3 from '../../assets/dist/images/preview-3.jpg'
import preview1 from '../../assets/dist/images/preview-1.jpg'
import preview5 from '../../assets/dist/images/preview-5.jpg'
import profile11 from '../../assets/dist/images/profile-11.jpg'
import profile15 from '../../assets/dist/images/profile-15.jpg'
import profile2 from '../../assets/dist/images/profile-2.jpg'

function UpdateProfile() {
  return (
    <body className="app">
      {/*<!-- BEGIN: Mobile Menu -->*/}
      <MobileMenu />
      {/*<!-- END: Mobile Menu -->*/}
      <div className="flex">
        {/*<!-- BEGIN: Side Menu -->*/}
        <SideMenu />
        {/*<!-- END: Side Menu -->*/}
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
                          src={profile1}
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
                          src={profile6}
                        />
                      </div>
                      <div className="ml-3">Kate Winslet</div>
                      <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                        katewinslet@left4code.com
                      </div>
                    </a>
                    <a href="" className="flex items-center mt-2">
                      <div className="w-8 h-8 image-fit">
                        <img
                          alt="Midone Tailwind HTML Admin Template"
                          className="rounded-full"
                          src={profile5}
                        />
                      </div>
                      <div className="ml-3">Charlize Theron</div>
                      <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                        charlizetheron@left4code.com
                      </div>
                    </a>
                  </div>
                  <div className="search-result__content__title">Products</div>
                  <a href="" className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        className="rounded-full"
                        src={preview14}
                      />
                    </div>
                    <div className="ml-3">Samsung Q90 QLED TV</div>
                    <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                      Electronic
                    </div>
                  </a>
                  <a href="" className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        className="rounded-full"
                        src={preview3}
                      />
                    </div>
                    <div className="ml-3">Oppo Find X2 Pro</div>
                    <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                      Smartphone &amp; Tablet
                    </div>
                  </a>
                  <a href="" className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        className="rounded-full"
                        src={preview1}
                      />
                    </div>
                    <div className="ml-3">Apple MacBook Pro 13</div>
                    <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                      PC &amp; Laptop
                    </div>
                  </a>
                  <a href="" className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        className="rounded-full"
                        src={preview5}
                      />
                    </div>
                    <div className="ml-3">Oppo Find X2 Pro</div>
                    <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                      Smartphone &amp; Tablet
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
                        src={profile1}
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
                          05:09 AM
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
                        src={profile6}
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
                          05:09 AM
                        </div>
                      </div>
                      <div className="w-full truncate text-gray-600">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem{' '}
                      </div>
                    </div>
                  </div>
                  <div className="cursor-pointer relative flex items-center mt-5">
                    <div className="w-12 h-12 flex-none image-fit mr-1">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        className="rounded-full"
                        src={profile5}
                      />
                      <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="ml-2 overflow-hidden">
                      <div className="flex items-center">
                        <a
                          href="javascript:;"
                          className="font-medium truncate mr-5"
                        >
                          Charlize Theron
                        </a>
                        <div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">
                          05:09 AM
                        </div>
                      </div>
                      <div className="w-full truncate text-gray-600">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem{' '}
                      </div>
                    </div>
                  </div>
                  <div className="cursor-pointer relative flex items-center mt-5">
                    <div className="w-12 h-12 flex-none image-fit mr-1">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        className="rounded-full"
                        src={profile11}
                      />
                      <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="ml-2 overflow-hidden">
                      <div className="flex items-center">
                        <a
                          href="javascript:;"
                          className="font-medium truncate mr-5"
                        >
                          Robert De Niro
                        </a>
                        <div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">
                          05:09 AM
                        </div>
                      </div>
                      <div className="w-full truncate text-gray-600">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&#039;s standard dummy text ever since the 1500
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
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  src={profile15}
                />
              </div>
              <div className="dropdown-box mt-10 absolute w-56 top-0 right-0 z-20">
                <div className="dropdown-box__content box bg-theme-38 text-white">
                  <div className="p-4 border-b border-theme-40">
                    <div className="font-medium">Johnny Depp</div>
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
            <h2 className="text-lg font-medium mr-auto">Update Profile</h2>
          </div>
          <div className="grid grid-cols-12 gap-6">
            {/*<!-- BEGIN: Profile Menu -->*/}
            <div className="col-span-12 lg:col-span-4 xxl:col-span-3 flex lg:block flex-col-reverse">
              <div className="intro-y box mt-5">
                <div className="relative flex items-center p-5">
                  <div className="w-12 h-12 image-fit">
                    <img
                      alt="Midone Tailwind HTML Admin Template"
                      className="rounded-full"
                      src={profile2}
                    />
                  </div>
                  <div className="ml-4 mr-auto">
                    <div className="font-medium text-base">Bruce Willis</div>
                    <div className="text-gray-600">Frontend Engineer</div>
                  </div>
                  <div className="dropdown relative">
                    <a
                      className="dropdown-toggle w-5 h-5 block"
                      href="javascript:;"
                    >
                      {' '}
                      <Icon.MoreHorizontal className="w-5 h-5 text-gray-700" />{' '}
                    </a>
                    <div className="dropdown-box mt-5 absolute w-56 top-0 right-0 z-20">
                      <div className="dropdown-box__content box">
                        <div className="p-4 border-b border-gray-200 font-medium">
                          Export Options
                        </div>
                        <div className="p-2">
                          <a
                            href=""
                            className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"
                          >
                            {' '}
                            <Icon.Activity className="w-4 h-4 text-gray-700 mr-2" />{' '}
                            English{' '}
                          </a>
                          <a
                            href=""
                            className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"
                          >
                            <Icon.Box className="w-4 h-4 text-gray-700 mr-2" />{' '}
                            Indonesia
                            <div className="text-xs text-white px-1 rounded-full bg-theme-6 ml-auto">
                              10
                            </div>
                          </a>
                          <a
                            href=""
                            className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"
                          >
                            {' '}
                            <Icon.Layout className="w-4 h-4 text-gray-700 mr-2" />{' '}
                            English{' '}
                          </a>
                          <a
                            href=""
                            className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"
                          >
                            {' '}
                            <Icon.Sidebar className="w-4 h-4 text-gray-700 mr-2" />{' '}
                            Indonesia{' '}
                          </a>
                        </div>
                        <div className="px-3 py-3 border-t border-gray-200 font-medium flex">
                          <button
                            type="button"
                            className="button button--sm bg-theme-1 text-white"
                          >
                            Settings
                          </button>
                          <button
                            type="button"
                            className="button button--sm bg-gray-200 text-gray-600 ml-auto"
                          >
                            View Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5 border-t border-gray-200">
                  <a
                    className="flex items-center text-theme-1 font-medium"
                    href=""
                  >
                    {' '}
                    <Icon.Activity className="w-4 h-4 mr-2" /> Personal
                    Information{' '}
                  </a>
                  <a className="flex items-center mt-5" href="">
                    {' '}
                    <Icon.Box className="w-4 h-4 mr-2" /> Account Settings{' '}
                  </a>
                  <a className="flex items-center mt-5" href="">
                    {' '}
                    <Icon.Lock className="w-4 h-4 mr-2" /> Change Password{' '}
                  </a>
                  <a className="flex items-center mt-5" href="">
                    {' '}
                    <Icon.Settings className="w-4 h-4 mr-2" /> User Settings{' '}
                  </a>
                </div>
                <div className="p-5 border-t border-gray-200">
                  <a className="flex items-center" href="">
                    {' '}
                    <Icon.Activity className="w-4 h-4 mr-2" /> Email Settings{' '}
                  </a>
                  <a className="flex items-center mt-5" href="">
                    {' '}
                    <Icon.Box className="w-4 h-4 mr-2" /> Saved Credit Cards{' '}
                  </a>
                  <a className="flex items-center mt-5" href="">
                    {' '}
                    <Icon.Lock className="w-4 h-4 mr-2" /> Social Networks{' '}
                  </a>
                  <a className="flex items-center mt-5" href="">
                    {' '}
                    <Icon.Settings className="w-4 h-4 mr-2" /> Tax Information{' '}
                  </a>
                </div>
                <div className="p-5 border-t flex">
                  <button
                    type="button"
                    className="button button--sm block bg-theme-1 text-white"
                  >
                    New Group
                  </button>
                  <button
                    type="button"
                    className="button button--sm border text-gray-700 ml-auto"
                  >
                    New Quick Link
                  </button>
                </div>
              </div>
            </div>
            {/*<!-- END: Profile Menu -->*/}
            <div className="col-span-12 lg:col-span-8 xxl:col-span-9">
              {/*<!-- BEGIN: Display Information -->*/}
              <div className="intro-y box lg:mt-5">
                <div className="flex items-center p-5 border-b border-gray-200">
                  <h2 className="font-medium text-base mr-auto">
                    Display Information
                  </h2>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12 xl:col-span-4">
                      <div className="border border-gray-200 rounded-md p-5">
                        <div className="w-40 h-40 relative image-fit cursor-pointer zoom-in mx-auto">
                          <img
                            className="rounded-md"
                            alt="Midone Tailwind HTML Admin Template"
                            src={profile2}
                          />
                          <div
                            title="Remove this profile photo?"
                            className="tooltip w-5 h-5 flex items-center justify-center absolute rounded-full text-white bg-theme-6 right-0 top-0 -mr-2 -mt-2"
                          >
                            {' '}
                            <Icon.X className="w-4 h-4" />{' '}
                          </div>
                        </div>
                        <div className="w-40 mx-auto cursor-pointer relative mt-5">
                          <button
                            type="button"
                            className="button w-full bg-theme-1 text-white"
                          >
                            Change Photo
                          </button>
                          <input
                            type="file"
                            className="w-full h-full top-0 left-0 absolute opacity-0"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-span-12 xl:col-span-8">
                      <div>
                        <label>Display Name</label>
                        <input
                          type="text"
                          className="input w-full border bg-gray-100 cursor-not-allowed mt-2"
                          placeholder="Input text"
                          value="Bruce Willis"
                          disabled
                        />
                      </div>
                      <div className="mt-3">
                        <label>Nearest MRT Station</label>
                        <div className="mt-2">
                          <select className="select2 w-full">
                            <option value="1">Admiralty</option>
                            <option value="2">Aljunied</option>
                            <option value="3">Ang Mo Kio</option>
                            <option value="4">Bartley</option>
                            <option value="5">Beauty World</option>
                          </select>
                        </div>
                      </div>
                      <div className="mt-3">
                        <label>Postal Code</label>
                        <div className="mt-2">
                          <select className="select2 w-full">
                            <option value="1">
                              018906 - 1 STRAITS BOULEVARD SINGA...
                            </option>
                            <option value="2">
                              018910 - 5A MARINA GARDENS DRIVE...
                            </option>
                            <option value="3">
                              018915 - 100A CENTRAL BOULEVARD...
                            </option>
                            <option value="4">
                              018925 - 21 PARK STREET MARINA...
                            </option>
                            <option value="5">
                              018926 - 23 PARK STREET MARINA...
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="mt-3">
                        <label>Address</label>
                        <textarea
                          className="input w-full border mt-2"
                          placeholder="Adress"
                        >
                          10 Anson Road, International Plaza, #10-11, 079903
                          Singapore, Singapore
                        </textarea>
                      </div>
                      <button
                        type="button"
                        className="button w-20 bg-theme-1 text-white mt-3"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/*<!-- END: Display Information -->*/}
              {/*<!-- BEGIN: Personal Information -->*/}
              <div className="intro-y box lg:mt-5">
                <div className="flex items-center p-5 border-b border-gray-200">
                  <h2 className="font-medium text-base mr-auto">
                    Personal Information
                  </h2>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12 xl:col-span-6">
                      <div>
                        <label>Email</label>
                        <input
                          type="text"
                          className="input w-full border bg-gray-100 cursor-not-allowed mt-2"
                          placeholder="Input text"
                          value="brucewillis@left4code.com"
                          disabled
                        />
                      </div>
                      <div className="mt-3">
                        <label>Name</label>
                        <input
                          type="text"
                          className="input w-full border mt-2"
                          placeholder="Input text"
                          value="Bruce Willis"
                          disabled
                        />
                      </div>
                      <div className="mt-3">
                        <label>ID Type</label>
                        <select className="input w-full border mt-2">
                          <option>IC</option>
                          <option>FIN</option>
                          <option>Passport</option>
                        </select>
                      </div>
                      <div className="mt-3">
                        <label>ID Number</label>
                        <input
                          type="text"
                          className="input w-full border mt-2"
                          placeholder="Input text"
                          value="357821204950001"
                        />
                      </div>
                    </div>
                    <div className="col-span-12 xl:col-span-6">
                      <div>
                        <label>Phone Number</label>
                        <input
                          type="text"
                          className="input w-full border mt-2"
                          placeholder="Input text"
                          value="65570828"
                        />
                      </div>
                      <div className="mt-3">
                        <label>Address</label>
                        <input
                          type="text"
                          className="input w-full border mt-2"
                          placeholder="Input text"
                          value="10 Anson Road, International Plaza, #10-11, 079903 Singapore, Singapore"
                        />
                      </div>
                      <div className="mt-3">
                        <label>Bank Name</label>
                        <div className="mt-2">
                          <select className="select2 w-full">
                            <option value="1">SBI - STATE BANK OF INDIA</option>
                            <option value="1">CITI BANK - CITI BANK</option>
                          </select>
                        </div>
                      </div>
                      <div className="mt-3">
                        <label>Bank Account</label>
                        <input
                          type="text"
                          className="input w-full border mt-2"
                          placeholder="Input text"
                          value="DBS Current 011-903573-0"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4">
                    <a href="" className="text-theme-6 flex items-center">
                      {' '}
                      <Icon.Trash2 className="w-4 h-4 mr-1" /> Delete Account{' '}
                    </a>
                    <button
                      type="button"
                      className="button w-20 bg-theme-1 text-white ml-auto"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
              {/*<!-- END: Personal Information -->*/}
            </div>
          </div>
        </div>
        {/*<!-- END: Content -->*/}
      </div>
    </body>
  )
}

export { UpdateProfile }
