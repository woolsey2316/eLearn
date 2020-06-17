import React from 'react'

import * as Icon from 'react-feather'

import { SideMenu } from '../../components'
import { MobileMenu } from '../../components'

import { CourseDropdown } from '../../components'

import logo from '../../assets/dist/images/logo.svg'
import profile6 from '../../assets/dist/images/profile-6.jpg'
import profile9 from '../../assets/dist/images/profile-9.jpg'
import profile8 from '../../assets/dist/images/profile-8.jpg'
import preview4 from '../../assets/dist/images/preview-4.jpg'
import preview3 from '../../assets/dist/images/preview-3.jpg'
import preview6 from '../../assets/dist/images/preview-6.jpg'
import preview5 from '../../assets/dist/images/preview-5.jpg'
import profile10 from '../../assets/dist/images/profile-10.jpg'

function ExamResults() {
  return (
    <body class="app">
      {/*<!-- BEGIN: Mobile Menu -->*/}
      <MobileMenu />
      {/*<!-- END: Mobile Menu -->*/}
      <div class="flex">
        {/*<!-- BEGIN: Simple Menu -->*/}
        <SideMenu />
        {/*<!-- END: Simple Menu -->*/}
        {/*<!-- BEGIN: Content -->*/}
        <div class="content">
          {/*<!-- BEGIN: Top Bar -->*/}
          <div class="top-bar">
            {/*<!-- BEGIN: Breadcrumb -->*/}
            <div class="-intro-x breadcrumb mr-auto hidden sm:flex">
              {' '}
              <a href="" class="">
                Application
              </a>{' '}
              <Icon.ChevronRight class="breadcrumb__icon" />{' '}
              <a href="" class="breadcrumb--active">
                Dashboard
              </a>{' '}
            </div>
            {/*<!-- END: Breadcrumb -->*/}
            {/*<!-- BEGIN: Search -->*/}
            <div class="intro-x relative mr-3 sm:mr-6">
              <div class="search hidden sm:block">
                <input
                  type="text"
                  class="search__input input placeholder-theme-13"
                  placeholder="Search..."
                />
                <Icon.Search class="search__icon" />
              </div>
              <a class="notification sm:hidden" href="">
                {' '}
                <Icon.Search class="notification__icon" />{' '}
              </a>
              <div class="search-result">
                <div class="search-result__content">
                  <div class="search-result__content__title">Pages</div>
                  <div class="mb-5">
                    <a href="" class="flex items-center">
                      <div class="w-8 h-8 bg-theme-18 text-theme-9 flex items-center justify-center rounded-full">
                        {' '}
                        <i class="w-4 h-4" data-feather="inbox"></i>{' '}
                      </div>
                      <div class="ml-3">Mail Settings</div>
                    </a>
                    <a href="" class="flex items-center mt-2">
                      <div class="w-8 h-8 bg-theme-17 text-theme-11 flex items-center justify-center rounded-full">
                        {' '}
                        <i class="w-4 h-4" data-feather="users"></i>{' '}
                      </div>
                      <div class="ml-3">Users & Permissions</div>
                    </a>
                    <a href="" class="flex items-center mt-2">
                      <div class="w-8 h-8 bg-theme-14 text-theme-10 flex items-center justify-center rounded-full">
                        {' '}
                        <i class="w-4 h-4" data-feather="credit-card"></i>{' '}
                      </div>
                      <div class="ml-3">Transactions Report</div>
                    </a>
                  </div>
                  <div class="search-result__content__title">Users</div>
                  <div class="mb-5">
                    <a href="" class="flex items-center mt-2">
                      <div class="w-8 h-8 image-fit">
                        <img
                          alt="Midone Tailwind HTML Admin Template"
                          class="rounded-full"
                          src={profile6}
                        />
                      </div>
                      <div class="ml-3">Johnny Depp</div>
                      <div class="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                        johnnydepp@left4code.com
                      </div>
                    </a>
                    <a href="" class="flex items-center mt-2">
                      <div class="w-8 h-8 image-fit">
                        <img
                          alt="Midone Tailwind HTML Admin Template"
                          class="rounded-full"
                          src={profile9}
                        />
                      </div>
                      <div class="ml-3">Kevin Spacey</div>
                      <div class="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                        kevinspacey@left4code.com
                      </div>
                    </a>
                    <a href="" class="flex items-center mt-2">
                      <div class="w-8 h-8 image-fit">
                        <img
                          alt="Midone Tailwind HTML Admin Template"
                          class="rounded-full"
                          src={profile8}
                        />
                      </div>
                      <div class="ml-3">John Travolta</div>
                      <div class="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                        johntravolta@left4code.com
                      </div>
                    </a>
                    <a href="" class="flex items-center mt-2">
                      <div class="w-8 h-8 image-fit">
                        <img
                          alt="Midone Tailwind HTML Admin Template"
                          class="rounded-full"
                          src={profile6}
                        />
                      </div>
                      <div class="ml-3">Tom Cruise</div>
                      <div class="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                        tomcruise@left4code.com
                      </div>
                    </a>
                  </div>
                  <div class="search-result__content__title">Products</div>
                  <a href="" class="flex items-center mt-2">
                    <div class="w-8 h-8 image-fit">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        class="rounded-full"
                        src={preview4}
                      />
                    </div>
                    <div class="ml-3">Samsung Q90 QLED TV</div>
                    <div class="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                      Electronic
                    </div>
                  </a>
                  <a href="" class="flex items-center mt-2">
                    <div class="w-8 h-8 image-fit">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        class="rounded-full"
                        src={preview3}
                      />
                    </div>
                    <div class="ml-3">Nike Air Max 270</div>
                    <div class="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                      Sport &amp; Outdoor
                    </div>
                  </a>
                  <a href="" class="flex items-center mt-2">
                    <div class="w-8 h-8 image-fit">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        class="rounded-full"
                        src={preview6}
                      />
                    </div>
                    <div class="ml-3">Dell XPS 13</div>
                    <div class="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                      PC &amp; Laptop
                    </div>
                  </a>
                  <a href="" class="flex items-center mt-2">
                    <div class="w-8 h-8 image-fit">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        class="rounded-full"
                        src={preview5}
                      />
                    </div>
                    <div class="ml-3">Samsung Galaxy S20 Ultra</div>
                    <div class="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                      Smartphone &amp; Tablet
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/*<!-- END: Search -->*/}
            {/*<!-- BEGIN: Notifications -->*/}
            <div class="intro-x dropdown relative mr-auto sm:mr-6">
              <div class="dropdown-toggle notification notification--bullet cursor-pointer">
                {' '}
                <Icon.Bell class="notification__icon" />{' '}
              </div>
              <div class="notification-content dropdown-box mt-8 absolute top-0 left-0 sm:left-auto sm:right-0 z-20 -ml-10 sm:ml-0">
                <div class="notification-content__box dropdown-box__content box">
                  <div class="notification-content__title">Notifications</div>
                  <div class="cursor-pointer relative flex items-center ">
                    <div class="w-12 h-12 flex-none image-fit mr-1">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        class="rounded-full"
                        src={profile6}
                      />
                      <div class="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                    </div>
                    <div class="ml-2 overflow-hidden">
                      <div class="flex items-center">
                        <a
                          href="javascript:;"
                          class="font-medium truncate mr-5"
                        >
                          Johnny Depp
                        </a>
                        <div class="text-xs text-gray-500 ml-auto whitespace-no-wrap">
                          05:09 AM
                        </div>
                      </div>
                      <div class="w-full truncate text-gray-600">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem{' '}
                      </div>
                    </div>
                  </div>
                  <div class="cursor-pointer relative flex items-center mt-5">
                    <div class="w-12 h-12 flex-none image-fit mr-1">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        class="rounded-full"
                        src={profile9}
                      />
                      <div class="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                    </div>
                    <div class="ml-2 overflow-hidden">
                      <div class="flex items-center">
                        <a
                          href="javascript:;"
                          class="font-medium truncate mr-5"
                        >
                          Kevin Spacey
                        </a>
                        <div class="text-xs text-gray-500 ml-auto whitespace-no-wrap">
                          01:10 PM
                        </div>
                      </div>
                      <div class="w-full truncate text-gray-600">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomi
                      </div>
                    </div>
                  </div>
                  <div class="cursor-pointer relative flex items-center mt-5">
                    <div class="w-12 h-12 flex-none image-fit mr-1">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        class="rounded-full"
                        src={profile8}
                      />
                      <div class="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                    </div>
                    <div class="ml-2 overflow-hidden">
                      <div class="flex items-center">
                        <a
                          href="javascript:;"
                          class="font-medium truncate mr-5"
                        >
                          John Travolta
                        </a>
                        <div class="text-xs text-gray-500 ml-auto whitespace-no-wrap">
                          03:20 PM
                        </div>
                      </div>
                      <div class="w-full truncate text-gray-600">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 20
                      </div>
                    </div>
                  </div>
                  <div class="cursor-pointer relative flex items-center mt-5">
                    <div class="w-12 h-12 flex-none image-fit mr-1">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        class="rounded-full"
                        src={profile6}
                      />
                      <div class="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                    </div>
                    <div class="ml-2 overflow-hidden">
                      <div class="flex items-center">
                        <a
                          href="javascript:;"
                          class="font-medium truncate mr-5"
                        >
                          Tom Cruise
                        </a>
                        <div class="text-xs text-gray-500 ml-auto whitespace-no-wrap">
                          06:05 AM
                        </div>
                      </div>
                      <div class="w-full truncate text-gray-600">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomi
                      </div>
                    </div>
                  </div>
                  <div class="cursor-pointer relative flex items-center mt-5">
                    <div class="w-12 h-12 flex-none image-fit mr-1">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        class="rounded-full"
                        src={profile8}
                      />
                      <div class="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                    </div>
                    <div class="ml-2 overflow-hidden">
                      <div class="flex items-center">
                        <a
                          href="javascript:;"
                          class="font-medium truncate mr-5"
                        >
                          Johnny Depp
                        </a>
                        <div class="text-xs text-gray-500 ml-auto whitespace-no-wrap">
                          01:10 PM
                        </div>
                      </div>
                      <div class="w-full truncate text-gray-600">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 20
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*<!-- END: Notifications -->*/}
            {/*<!-- BEGIN: Account Menu -->*/}
            <div class="intro-x dropdown w-8 h-8 relative">
              <div class="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  src={profile10}
                />
              </div>
              <div class="dropdown-box mt-10 absolute w-56 top-0 right-0 z-20">
                <div class="dropdown-box__content box bg-theme-38 text-white">
                  <div class="p-4 border-b border-theme-40">
                    <div class="font-medium">Johnny Depp</div>
                    <div class="text-xs text-theme-41">Software Engineer</div>
                  </div>
                  <div class="p-2">
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"
                    >
                      {' '}
                      <Icon.User class="w-4 h-4 mr-2" /> Profile{' '}
                    </a>
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"
                    >
                      {' '}
                      <Icon.Edit class="w-4 h-4 mr-2" /> Add Account{' '}
                    </a>
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"
                    >
                      {' '}
                      <Icon.Lock class="w-4 h-4 mr-2" /> Reset Password{' '}
                    </a>
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"
                    >
                      {' '}
                      <Icon.HelpCircle class="w-4 h-4 mr-2" /> Help{' '}
                    </a>
                  </div>
                  <div class="p-2 border-t border-theme-40">
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"
                    >
                      {' '}
                      <Icon.ToggleRight class="w-4 h-4 mr-2" /> Logout{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*<!-- END: Account Menu -->*/}
          </div>
          {/*<!-- END: Top Bar -->*/}
          <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
            <h2 class="text-lg font-medium mr-auto">Grades</h2>
          </div>
          {/*<!-- BEGIN: Invoice -->*/}
          <div class="intro-y box overflow-hidden mt-5">
            <div class="flex flex-col lg:flex-row pt-10 px-5 sm:px-20 sm:pt-20 lg:pb-20 text-center sm:text-left">
              <CourseDropdown />
            </div>
            <div class="flex flex-col lg:flex-row border-b px-5 sm:px-20 pt-10 pb-10 sm:pb-20 text-center sm:text-left">
              <div>
                <div class="text-base text-gray-600">Course Details</div>
                <div class="text-lg font-medium text-theme-1 mt-2">
                  Instructor: Arnold Schwarzenegger
                </div>
                <div class="mt-1">arnodlschwarzenegger@gmail.com</div>
                <div class="mt-1">260 W. Storm Street New York, NY 10025.</div>
              </div>
            </div>
            <div class="px-5 sm:px-16 py-10 sm:py-20">
              <div class="overflow-x-auto">
                <table class="table">
                  <thead>
                    <tr>
                      <th class="border-b-2 whitespace-no-wrap">DESCRIPTION</th>
                      <th class="border-b-2 text-right whitespace-no-wrap">
                        Rank
                      </th>
                      <th class="border-b-2 text-right whitespace-no-wrap">
                        Score
                      </th>
                      <th class="border-b-2 text-right whitespace-no-wrap">
                        Score (%)
                      </th>
                      <th class="border-b-2 text-right whitespace-no-wrap">
                        Average
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border-b">
                        <div class="font-medium whitespace-no-wrap">Exam 1</div>
                        <div class="text-gray-600 text-xs whitespace-no-wrap">
                          06/05/2020
                        </div>
                      </td>
                      <td class="text-right border-b w-32">1</td>
                      <td class="text-right border-b w-32">90/95</td>
                      <td class="text-right border-b w-32 font-medium">95%</td>
                      <td class="text-right border-b w-32">71%</td>
                    </tr>
                    <tr>
                      <td class="border-b">
                        <div class="font-medium whitespace-no-wrap">Exam 2</div>
                        <div class="text-gray-600 text-xs whitespace-no-wrap">
                          06/05/2020
                        </div>
                      </td>
                      <td class="text-right border-b w-32">13</td>
                      <td class="text-right border-b w-32">76/100</td>
                      <td class="text-right border-b w-32 font-medium">76%</td>
                      <td class="text-right border-b w-32">69%</td>
                    </tr>
                    <tr>
                      <td class="border-b">
                        <div class="font-medium whitespace-no-wrap">Exam 3</div>
                        <div class="text-gray-600 text-xs whitespace-no-wrap">
                          06/05/2020
                        </div>
                      </td>
                      <td class="text-right border-b w-32">9</td>
                      <td class="text-right border-b w-32">76/100</td>
                      <td class="text-right border-b w-32 font-medium">76%</td>
                      <td class="text-right border-b w-32">69%</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="font-medium whitespace-no-wrap">Exam 4</div>
                        <div class="text-gray-600 text-xs whitespace-no-wrap">
                          06/05/2020
                        </div>
                      </td>
                      <td class="text-right w-32">14</td>
                      <td class="text-right w-32">76/100</td>
                      <td class="text-right w-32 font-medium">76%</td>
                      <td class="text-right border-b w-32">70%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="px-5 sm:px-20 pb-10 sm:pb-20 flex flex-col-reverse sm:flex-row">
              <div class="text-center sm:text-left mt-10 sm:mt-0">
                <div class="text-lg text-theme-1 font-medium mt-2">
                  David Woolsey
                </div>
                <div class="mt-1">Course Name : History1001</div>
                <div class="mt-1">Course Code : LFT133243</div>
              </div>
              <div class="text-center sm:text-right sm:ml-auto">
                <div class="text-base text-gray-600">Weighted Average</div>
                <div class="text-xl text-theme-1 font-medium mt-2">78%</div>
                <div class="mt-1 tetx-xs">Class Rank: 7</div>
              </div>
            </div>
          </div>
          {/*<!-- END: Invoice -->*/}
        </div>
        {/*<!-- END: Content -->*/}
      </div>
    </body>
  )
}

export { ExamResults }
