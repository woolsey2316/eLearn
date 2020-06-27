import React from 'react'
import { MobileMenu } from '../../components'
import { ChangePasswordForm } from '../../components'

import { history } from '../../helpers/history'

import { useDispatch, useSelector } from 'react-redux';

import { alertActions } from '../../actions';

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
          <div className="top-bar">
            <div className="-intro-x breadcrumb mr-auto hidden sm:flex">
              <a href="" className="">
                Application
              </a>
              <Icon.ChevronRight className="breadcrumb__icon" />
              <a href="" className="breadcrumb--active">
                Dashboard
              </a>
            </div>
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
                <Icon.Search className="notification__icon" />
              </a>
              <div className="search-result">
                <div className="search-result__content">
                  <div className="search-result__content__title">Pages</div>
                  <div className="mb-5">
                    <a href="" className="flex items-center">
                      <div className="w-8 h-8 bg-theme-18 text-theme-9 flex items-center justify-center rounded-full">
                        <i className="w-4 h-4" data-feather="inbox"></i>
                      </div>
                      <div className="ml-3">Mail Settings</div>
                    </a>
                    <a href="" className="flex items-center mt-2">
                      <div className="w-8 h-8 bg-theme-17 text-theme-11 flex items-center justify-center rounded-full">
                        <i className="w-4 h-4" data-feather="users"></i>
                      </div>
                      <div className="ml-3">Users & Permissions</div>
                    </a>
                    <a href="" className="flex items-center mt-2">
                      <div className="w-8 h-8 bg-theme-14 text-theme-10 flex items-center justify-center rounded-full">
                        <i className="w-4 h-4" data-feather="credit-card"></i>
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
                          src={profile3}
                        />
                      </div>
                      <div className="ml-3">Arnold Schwarzenegger</div>
                      <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                        arnoldschwarzenegger@left4code.com
                      </div>
                    </a>
                    <a href="" className="flex items-center mt-2">
                      <div className="w-8 h-8 image-fit">
                        <img
                          alt="Midone Tailwind HTML Admin Template"
                          className="rounded-full"
                          src={profile14}
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
                          src={profile8}
                        />
                      </div>
                      <div className="ml-3">Nicolas Cage</div>
                      <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                        nicolascage@left4code.com
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
                      <div className="ml-3">Angelina Jolie</div>
                      <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                        angelinajolie@left4code.com
                      </div>
                    </a>
                  </div>
                  <div className="search-result__content__title">Products</div>
                  <a href="" className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        className="rounded-full"
                        src={preview2}
                      />
                    </div>
                    <div className="ml-3">Sony A7 III</div>
                    <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                      Photography
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
                        src={preview5}
                      />
                    </div>
                    <div className="ml-3">Nikon Z6</div>
                    <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                      Photography
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
                    <div className="ml-3">Samsung Galaxy S20 Ultra</div>
                    <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                      Smartphone &amp; Tablet
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="intro-x dropdown relative mr-auto sm:mr-6">
              <div className="dropdown-toggle notification notification--bullet cursor-pointer">
                <Icon.Bell className="notification__icon" />
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
                          Arnold Schwarzenegger
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
                        src={profile14}
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
                        src={profile8}
                      />
                      <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="ml-2 overflow-hidden">
                      <div className="flex items-center">
                        <a
                          href="javascript:;"
                          className="font-medium truncate mr-5"
                        >
                          Nicolas Cage
                        </a>
                        <div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">
                          05:09 AM
                        </div>
                      </div>
                      <div className="w-full truncate text-gray-600">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem
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
                          Brad Pitt
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
                </div>
              </div>
            </div>
            <div className="intro-x dropdown w-8 h-8 relative">
              <div className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in">
                <img alt="Midone Tailwind HTML Admin Template" src={profile2} />
              </div>
              <div className="dropdown-box mt-10 absolute w-56 top-0 right-0 z-20">
                <div className="dropdown-box__content box bg-theme-38 text-white">
                  <div className="p-4 border-b border-theme-40">
                    <div className="font-medium">Arnold Schwarzenegger</div>
                    <div className="text-xs text-theme-41">
                      Backend Engineer
                    </div>
                  </div>
                  <div className="p-2">
                    <a
                      href=""
                      className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"
                    >
                      <Icon.User className="w-4 h-4 mr-2" /> Profile
                    </a>
                    <a
                      href=""
                      className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"
                    >
                      <Icon.Edit className="w-4 h-4 mr-2" /> Add Account
                    </a>
                    <a
                      href=""
                      className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"
                    >
                      <Icon.Lock className="w-4 h-4 mr-2" /> Reset Password
                    </a>
                    <a
                      href=""
                      className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"
                    >
                      <Icon.HelpCircle className="w-4 h-4 mr-2" /> Help
                    </a>
                  </div>
                  <div className="p-2 border-t border-theme-40">
                    <a
                      href=""
                      className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"
                    >
                      <Icon.ToggleRight className="w-4 h-4 mr-2" /> Logout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="intro-y flex items-center mt-8">
            <h2 className="text-lg font-medium mr-auto">Update Profile</h2>
          </div>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-4 xxl:col-span-3 flex lg:block flex-col-reverse">
              <div className="intro-y box mt-5">
                <div className="relative flex items-center p-5">
                  <div className="w-12 h-12 image-fit">
                    <img
                      alt="Midone Tailwind HTML Admin Template"
                      className="rounded-full"
                      src={profile4}
                    />
                  </div>
                  <div className="ml-4 mr-auto">
                    <div className="font-medium text-base">Johnny Depp</div>
                    <div className="text-gray-600">Frontend Engineer</div>
                  </div>
                  <div className="dropdown relative">
                    <a
                      className="dropdown-toggle w-5 h-5 block"
                      href="javascript:;"
                    >
                      <Icon.MoreHorizontal className="w-5 h-5 text-gray-700" />
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
                            <Icon.Activity className="w-4 h-4 text-gray-700 mr-2" />
                            English
                          </a>
                          <a
                            href=""
                            className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"
                          >
                            <Icon.Box className="w-4 h-4 text-gray-700 mr-2" />
                            Indonesia
                            <div className="text-xs text-white px-1 rounded-full bg-theme-6 ml-auto">
                              10
                            </div>
                          </a>
                          <a
                            href=""
                            className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"
                          >
                            <Icon.Layout className="w-4 h-4 text-gray-700 mr-2" />
                            English
                          </a>
                          <a
                            href=""
                            className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"
                          >
                            <Icon.Sidebar className="w-4 h-4 text-gray-700 mr-2" />
                            Indonesia
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
                    <Icon.Activity className="w-4 h-4 mr-2" /> Personal
                    Information
                  </a>
                  <a className="flex items-center mt-5" href="">
                    <Icon.Box className="w-4 h-4 mr-2" /> Account Settings
                  </a>
                  <a className="flex items-center mt-5" href="">
                    <Icon.Lock className="w-4 h-4 mr-2" /> Change Password
                  </a>
                  <a className="flex items-center mt-5" href="">
                    <Icon.Settings className="w-4 h-4 mr-2" /> User Settings
                  </a>
                </div>
                <div className="p-5 border-t border-gray-200">
                  <a className="flex items-center" href="">
                    <Icon.Activity className="w-4 h-4 mr-2" /> Email Settings
                  </a>
                  <a className="flex items-center mt-5" href="">
                    <Icon.Box className="w-4 h-4 mr-2" /> Saved Credit Cards
                  </a>
                  <a className="flex items-center mt-5" href="">
                    <Icon.Lock className="w-4 h-4 mr-2" /> Social Networks
                  </a>
                  <a className="flex items-center mt-5" href="">
                    <Icon.Settings className="w-4 h-4 mr-2" /> Tax Information
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
