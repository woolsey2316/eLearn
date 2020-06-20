import React from 'react'

import * as Icon from 'react-feather'

import { SideMenu } from '../components'
import { Breadcrumb } from '../components'

import '../assets/dist/css/app.css'

import logo from '../assets/dist/images/logo.svg'
import profile15 from '../assets/dist/images/profile-15.jpg'
import profile5 from '../assets/dist/images/profile-5.jpg'
import profile12 from '../assets/dist/images/profile-12.jpg'
import preview1 from '../assets/dist/images/preview-1.jpg'
import preview2 from '../assets/dist/images/preview-2.jpg'
import profile14 from '../assets/dist/images/profile-14.jpg'
import profile8 from '../assets/dist/images/profile-8.jpg'
import profile13 from '../assets/dist/images/profile-13.jpg'
import profile1 from '../assets/dist/images/profile-1.jpg'
import profile7 from '../assets/dist/images/profile-7.jpg'
import profile4 from '../assets/dist/images/profile-4.jpg'
import profile11 from '../assets/dist/images/profile-11.jpg'
import { ProfileOptions } from '../Pages/profile'

function HomePage(props) {
  /*
  const access_token = useSelector(state => state.authentication.user.token.access_token)
  const refresh_token = useSelector(state => state.authentication.user.token.refresh_token)
  */

  return (
    <div className="app">
      <div className="mobile-menu md:hidden">
        <div className="mobile-menu-bar">
          <a href="" className="flex mr-auto">
            <img
              alt="Midone Tailwind HTML Admin Template"
              className="w-6"
              src={logo}
            />
          </a>
          <a href="javascript:;" id="mobile-menu-toggler">
            {' '}
            <Icon.BarChart2 className="w-8 h-8 text-white transform -rotate-90" />{' '}
          </a>
        </div>
        <ul className="border-t border-theme-24 py-5 hidden">
          <li>
            <a href="index.html" className="menu menu--active">
              <div className="menu__icon">
                {' '}
                <Icon.Home />{' '}
              </div>
              <div className="menu__title"> Dashboard </div>
            </a>
          </li>
          <li>
            <a href="javascript:;" className="menu">
              <div className="menu__icon">
                {' '}
                <Icon.Box />{' '}
              </div>
              <div className="menu__title">
                {' '}
                Menu Layout <Icon.ChevronDown className="menu__sub-icon" />{' '}
              </div>
            </a>
            <ul className="">
              <li>
                <a href="index.html" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title"> Side Menu </div>
                </a>
              </li>
              <li>
                <a href="simple-menu-dashboard.html" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title"> Simple Menu </div>
                </a>
              </li>
              <li>
                <a href="top-menu-dashboard.html" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title"> Top Menu </div>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="side-menu-inbox.html" className="menu">
              <div className="menu__icon">
                {' '}
                <Icon.Inbox />{' '}
              </div>
              <div className="menu__title"> Inbox </div>
            </a>
          </li>
          <li>
            <a href="side-menu-file-manager.html" className="menu">
              <div className="menu__icon">
                {' '}
                <Icon.HardDrive />{' '}
              </div>
              <div className="menu__title"> File Manager </div>
            </a>
          </li>
          <li>
            <a href="side-menu-point-of-sale.html" className="menu">
              <div className="menu__icon">
                {' '}
                <Icon.CreditCard />{' '}
              </div>
              <div className="menu__title"> Point of Sale </div>
            </a>
          </li>
          <li>
            <a href="side-menu-chat.html" className="menu">
              <div className="menu__icon">
                {' '}
                <Icon.MessageSquare />{' '}
              </div>
              <div className="menu__title"> Chat </div>
            </a>
          </li>
          <li>
            <a href="side-menu-post.html" className="menu">
              <div className="menu__icon">
                {' '}
                <Icon.FileText />{' '}
              </div>
              <div className="menu__title"> Post </div>
            </a>
          </li>
          <li className="menu__devider my-6"></li>
          <li>
            <a href="javascript:;" className="menu">
              <div className="menu__icon">
                {' '}
                <Icon.Edit />{' '}
              </div>
              <div className="menu__title">
                {' '}
                Crud <Icon.ChevronDown className="menu__sub-icon" />{' '}
              </div>
            </a>
            <ul className="">
              <li>
                <a href="side-menu-crud-data-list.html" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title"> Data List </div>
                </a>
              </li>
              <li>
                <a href="side-menu-crud-form.html" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title"> Form </div>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:;" className="menu">
              <div className="menu__icon">
                {' '}
                <Icon.Users />{' '}
              </div>
              <div className="menu__title">
                {' '}
                Users <Icon.ChevronDown className="menu__sub-icon" />{' '}
              </div>
            </a>
            <ul className="">
              <li>
                <a href="side-menu-users-layout-1.html" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title"> Layout 1 </div>
                </a>
              </li>
              <li>
                <a href="side-menu-users-layout-2.html" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title"> Layout 2 </div>
                </a>
              </li>
              <li>
                <a href="side-menu-users-layout-3.html" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title"> Layout 3 </div>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:;" className="menu">
              <div className="menu__icon">
                {' '}
                <Icon.Trello />{' '}
              </div>
              <div className="menu__title">
                {' '}
                Profile <Icon.ChevronDown className="menu__sub-icon" />{' '}
              </div>
            </a>
            <ul className="">
              <li>
                <a href="side-menu-profile-overview-1.html" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title"> Overview 1 </div>
                </a>
              </li>
              <li>
                <a href="side-menu-profile-overview-2.html" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title"> Overview 2 </div>
                </a>
              </li>
              <li>
                <a href="side-menu-profile-overview-3.html" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title"> Overview 3 </div>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:;" className="menu">
              <div className="menu__icon">
                {' '}
                <Icon.Layout />{' '}
              </div>
              <div className="menu__title">
                {' '}
                Pages <Icon.ChevronDown className="menu__sub-icon" />{' '}
              </div>
            </a>
            <ul className="">
              <li>
                <a href="javascript:;" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title">
                    {' '}
                    Wizards <Icon.ChevronDown className="menu__sub-icon" />{' '}
                  </div>
                </a>
                <ul className="">
                  <li>
                    <a href="side-menu-wizard-layout-1.html" className="menu">
                      <div className="menu__icon">
                        {' '}
                        <Icon.Zap />{' '}
                      </div>
                      <div className="menu__title">Layout 1</div>
                    </a>
                  </li>
                  <li>
                    <a href="side-menu-wizard-layout-2.html" className="menu">
                      <div className="menu__icon">
                        {' '}
                        <Icon.Zap />{' '}
                      </div>
                      <div className="menu__title">Layout 2</div>
                    </a>
                  </li>
                  <li>
                    <a href="side-menu-wizard-layout-3.html" className="menu">
                      <div className="menu__icon">
                        {' '}
                        <Icon.Zap />{' '}
                      </div>
                      <div className="menu__title">Layout 3</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title">
                    {' '}
                    Blog <Icon.ChevronDown className="menu__sub-icon" />{' '}
                  </div>
                </a>
                <ul className="">
                  <li>
                    <a href="side-menu-blog-layout-1.html" className="menu">
                      <div className="menu__icon">
                        {' '}
                        <Icon.Zap />{' '}
                      </div>
                      <div className="menu__title">Layout 1</div>
                    </a>
                  </li>
                  <li>
                    <a href="side-menu-blog-layout-2.html" className="menu">
                      <div className="menu__icon">
                        {' '}
                        <Icon.Zap />{' '}
                      </div>
                      <div className="menu__title">Layout 2</div>
                    </a>
                  </li>
                  <li>
                    <a href="side-menu-blog-layout-3.html" className="menu">
                      <div className="menu__icon">
                        {' '}
                        <Icon.Zap />{' '}
                      </div>
                      <div className="menu__title">Layout 3</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title">
                    {' '}
                    Pricing <Icon.ChevronDown className="menu__sub-icon" />{' '}
                  </div>
                </a>
                <ul className="">
                  <li>
                    <a href="side-menu-pricing-layout-1.html" className="menu">
                      <div className="menu__icon">
                        {' '}
                        <Icon.Zap />{' '}
                      </div>
                      <div className="menu__title">Layout 1</div>
                    </a>
                  </li>
                  <li>
                    <a href="side-menu-pricing-layout-2.html" className="menu">
                      <div className="menu__icon">
                        {' '}
                        <Icon.Zap />{' '}
                      </div>
                      <div className="menu__title">Layout 2</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title">
                    {' '}
                    Invoice <Icon.ChevronDown className="menu__sub-icon" />{' '}
                  </div>
                </a>
                <ul className="">
                  <li>
                    <a href="side-menu-invoice-layout-1.html" className="menu">
                      <div className="menu__icon">
                        {' '}
                        <Icon.Zap />{' '}
                      </div>
                      <div className="menu__title">Layout 1</div>
                    </a>
                  </li>
                  <li>
                    <a href="side-menu-invoice-layout-2.html" className="menu">
                      <div className="menu__icon">
                        {' '}
                        <Icon.Zap />{' '}
                      </div>
                      <div className="menu__title">Layout 2</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title">
                    {' '}
                    FAQ <Icon.ChevronDown className="menu__sub-icon" />{' '}
                  </div>
                </a>
                <ul className="">
                  <li>
                    <a href="side-menu-faq-layout-1.html" className="menu">
                      <div className="menu__icon">
                        {' '}
                        <Icon.Zap />{' '}
                      </div>
                      <div className="menu__title">Layout 1</div>
                    </a>
                  </li>
                  <li>
                    <a href="side-menu-faq-layout-2.html" className="menu">
                      <div className="menu__icon">
                        {' '}
                        <Icon.Zap />{' '}
                      </div>
                      <div className="menu__title">Layout 2</div>
                    </a>
                  </li>
                  <li>
                    <a href="side-menu-faq-layout-3.html" className="menu">
                      <div className="menu__icon">
                        {' '}
                        <Icon.Zap />{' '}
                      </div>
                      <div className="menu__title">Layout 3</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="login-login.html" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title"> Login </div>
                </a>
              </li>
              <li>
                <a href="login-register.html" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title"> Register </div>
                </a>
              </li>
              <li>
                <a href="main-error-page.html" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title"> Error Page </div>
                </a>
              </li>
              <li>
                <a href="side-menu-update-profile.html" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title"> Update profile </div>
                </a>
              </li>
              <li>
                <a href="side-menu-change-password.html" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title"> Change Password </div>
                </a>
              </li>
            </ul>
          </li>
          <li className="menu__devider my-6"></li>
          <li>
            <a href="javascript:;" className="menu">
              <div className="menu__icon">
                {' '}
                <Icon.Inbox />{' '}
              </div>
              <div className="menu__title">
                {' '}
                Components <Icon.ChevronDown className="menu__sub-icon" />{' '}
              </div>
            </a>
            <ul className="">
              <li>
                <a href="javascript:;" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title">
                    {' '}
                    Grid <Icon.ChevronDown className="menu__sub-icon" />{' '}
                  </div>
                </a>
                <ul className="">
                  <li>
                    <a href="side-menu-regular-table.html" className="menu">
                      <div className="menu__icon">
                        {' '}
                        <Icon.Zap />{' '}
                      </div>
                      <div className="menu__title">Regular Table</div>
                    </a>
                  </li>
                  <li>
                    <a href="side-menu-datatable.html" className="menu">
                      <div className="menu__icon">
                        {' '}
                        <Icon.Zap />{' '}
                      </div>
                      <div className="menu__title">Datatable</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="side-menu-accordion.html" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title"> Accordion </div>
                </a>
              </li>
              <li>
                <a href="side-menu-button.html" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title"> Button </div>
                </a>
              </li>
              <li>
                <a href="side-menu-modal.html" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title"> Modal </div>
                </a>
              </li>
              <li>
                <a href="side-menu-alert.html" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title"> Alert </div>
                </a>
              </li>
              <li>
                <a href="side-menu-progress-bar.html" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title"> Progress Bar </div>
                </a>
              </li>
              <li>
                <a href="side-menu-tooltip.html" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title"> Tooltip </div>
                </a>
              </li>
              <li>
                <a href="side-menu-dropdown.html" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title"> Dropdown </div>
                </a>
              </li>
              <li>
                <a href="side-menu-toast.html" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title"> Toast </div>
                </a>
              </li>
              <li>
                <a href="side-menu-typography.html" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title"> Typography </div>
                </a>
              </li>
              <li>
                <a href="side-menu-icon.html" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title"> Icon </div>
                </a>
              </li>
              <li>
                <a href="side-menu-loading-icon.html" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title"> Loading Icon </div>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:;" className="menu">
              <div className="menu__icon">
                {' '}
                <Icon.Sidebar />{' '}
              </div>
              <div className="menu__title">
                {' '}
                Forms <Icon.ChevronDown className="menu__sub-icon" />{' '}
              </div>
            </a>
            <ul className="">
              <li>
                <a href="side-menu-regular-form.html" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title"> Regular Form </div>
                </a>
              </li>
              <li>
                <a href="side-menu-datepicker.html" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title"> Datepicker </div>
                </a>
              </li>
              <li>
                <a href="side-menu-select2.html" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title"> Select2 </div>
                </a>
              </li>
              <li>
                <a href="side-menu-file-upload.html" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title"> File Upload </div>
                </a>
              </li>
              <li>
                <a href="side-menu-wysiwyg-editor.html" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title"> Wysiwyg Editor </div>
                </a>
              </li>
              <li>
                <a href="side-menu-validation.html" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title"> Validation </div>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:;" className="menu">
              <div className="menu__icon">
                {' '}
                <Icon.HardDrive />{' '}
              </div>
              <div className="menu__title">
                {' '}
                Widgets <Icon.ChevronDown className="menu__sub-icon" />{' '}
              </div>
            </a>
            <ul className="">
              <li>
                <a href="side-menu-chart.html" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title"> Chart </div>
                </a>
              </li>
              <li>
                <a href="side-menu-slider.html" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title"> Slider </div>
                </a>
              </li>
              <li>
                <a href="side-menu-image-zoom.html" className="menu">
                  <div className="menu__icon">
                    {' '}
                    <Icon.Activity />{' '}
                  </div>
                  <div className="menu__title"> Image Zoom </div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="flex">
        <SideMenu open={props.open} />

        <div className="content">
          <div className="top-bar">
            <Breadcrumb/>

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
                          src={profile15}
                        />
                      </div>
                      <div className="ml-3">Robert De Niro</div>
                      <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                        robertdeniro@left4code.com
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
                          src={profile12}
                        />
                      </div>
                      <div className="ml-3">Kevin Spacey</div>
                      <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                        kevinspacey@left4code.com
                      </div>
                    </a>
                  </div>
                  <div className="search-result__content__title">Products</div>
                  <a href="" className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        className="rounded-full"
                        src={preview1}
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
                        src={preview2}
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
                    <div className="ml-3">Nikon Z6</div>
                    <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                      Photography
                    </div>
                  </a>
                </div>
              </div>
            </div>

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
                        src={profile15}
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
                          Johnny Depp
                        </a>
                        <div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">
                          06:05 AM
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
                          Kevin Spacey
                        </a>
                        <div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">
                          06:05 AM
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
                          Brad Pitt
                        </a>
                        <div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">
                          06:05 AM
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

            <div className="intro-x dropdown w-8 h-8 relative">
              <div className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in">
                <img alt="Midone Tailwind HTML Admin Template" src={profile8} />
              </div>
              <div className="dropdown-box mt-10 absolute w-56 top-0 right-0 z-20">
                <div className="dropdown-box__content box bg-theme-38 text-white">
                  <div className="p-4 border-b border-theme-40">
                    <div className="font-medium">Robert De Niro</div>
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
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 xxl:col-span-12 grid grid-cols-12 gap-6">
              <div className="col-span-12 mt-8">
                <div className="intro-y flex items-center h-10">
                  <h2 className="text-lg font-medium truncate mr-5">
                    Overview
                  </h2>
                </div>
                <div className="grid grid-cols-12 gap-6 mt-5">
                  <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <div className="report-box zoom-in">
                      <div className="box p-5">
                        <div className="flex">
                          <Icon.Activity className="report-box__icon text-theme-10" />
                          <div className="ml-auto">
                            <div
                              className="report-box__indicator bg-theme-9 tooltip cursor-pointer"
                              title="33% Higher than last month"
                            >
                              {' '}
                              33% <Icon.ChevronUp className="w-4 h-4" />{' '}
                            </div>
                          </div>
                        </div>
                        <div className="text-3xl font-bold leading-8 mt-6">
                          75%
                        </div>
                        <div className="text-base text-gray-600 mt-1">
                          Exam Average
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <div className="report-box zoom-in">
                      <div className="box p-5">
                        <div className="flex">
                          <Icon.AlertCircle className="report-box__icon text-theme-9" />
                          <div className="ml-auto">
                            <div
                              className="report-box__indicator bg-theme-6 tooltip cursor-pointer"
                              title="2% Lower than last month"
                            >
                              {' '}
                              2% <Icon.ChevronDown className="w-4 h-4" />{' '}
                            </div>
                          </div>
                        </div>
                        <div className="text-3xl font-bold leading-8 mt-6">
                          2
                        </div>
                        <div className="text-base text-gray-600 mt-1">
                          Active Tests
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <div className="report-box zoom-in">
                      <div className="box p-5">
                        <div className="flex">
                          <Icon.Monitor className="report-box__icon text-theme-12" />
                          <div className="ml-auto">
                            <div
                              className="report-box__indicator bg-theme-9 tooltip cursor-pointer"
                              title="12% Higher than last month"
                            >
                              {' '}
                              12% <Icon.ChevronUp className="w-4 h-4" />{' '}
                            </div>
                          </div>
                        </div>
                        <div className="text-3xl font-bold leading-8 mt-6">
                          15
                        </div>
                        <div className="text-base text-gray-600 mt-1">
                          Completed Tests
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <div className="report-box zoom-in">
                      <div className="box p-5">
                        <div className="flex">
                          <Icon.Grid className="report-box__icon text-theme-11" />
                          <div className="ml-auto">
                            <div
                              className="report-box__indicator bg-theme-9 tooltip cursor-pointer"
                              title="22% Higher than last month"
                            >
                              {' '}
                              22% <Icon.ChevronUp className="w-4 h-4" />{' '}
                            </div>
                          </div>
                        </div>
                        <div className="text-3xl font-bold leading-8 mt-6">
                          4
                        </div>
                        <div className="text-base text-gray-600 mt-1">
                          Total Enrolled Courses
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 xxl:col-span-3 xxl:border-l border-theme-5 -mb-10 pb-10">
              <div className="xxl:pl-6 grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-6 xl:col-span-4 xxl:col-span-12 mt-3 xxl:mt-8">
                  <div className="intro-x flex items-center h-10">
                    <h2 className="text-lg font-medium truncate mr-5">
                      Transactions
                    </h2>
                  </div>
                  <div className="mt-5">
                    <div className="intro-x">
                      <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                        <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                          <img
                            alt="Midone Tailwind HTML Admin Template"
                            src={profile13}
                          />
                        </div>
                        <div className="ml-4 mr-auto">
                          <div className="font-medium">Nicolas Cage</div>
                          <div className="text-gray-600 text-xs">
                            7 July 2022
                          </div>
                        </div>
                        <div className="text-theme-9">+$88</div>
                      </div>
                    </div>
                    <div className="intro-x">
                      <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                        <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                          <img
                            alt="Midone Tailwind HTML Admin Template"
                            src={profile1}
                          />
                        </div>
                        <div className="ml-4 mr-auto">
                          <div className="font-medium">
                            Arnold Schwarzenegger
                          </div>
                          <div className="text-gray-600 text-xs">
                            9 August 2022
                          </div>
                        </div>
                        <div className="text-theme-6">+$47</div>
                      </div>
                    </div>
                    <div className="intro-x">
                      <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                        <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                          <img
                            alt="Midone Tailwind HTML Admin Template"
                            src={profile7}
                          />
                        </div>
                        <div className="ml-4 mr-auto">
                          <div className="font-medium">Johnny Depp</div>
                          <div className="text-gray-600 text-xs">
                            31 August 2022
                          </div>
                        </div>
                        <div className="text-theme-9">+$34</div>
                      </div>
                    </div>
                    <div className="intro-x">
                      <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                        <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                          <img
                            alt="Midone Tailwind HTML Admin Template"
                            src={profile1}
                          />
                        </div>
                        <div className="ml-4 mr-auto">
                          <div className="font-medium">Johnny Depp</div>
                          <div className="text-gray-600 text-xs">
                            5 November 2021
                          </div>
                        </div>
                        <div className="text-theme-9">+$42</div>
                      </div>
                    </div>
                    <div className="intro-x">
                      <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                        <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                          <img
                            alt="Midone Tailwind HTML Admin Template"
                            src={profile7}
                          />
                        </div>
                        <div className="ml-4 mr-auto">
                          <div className="font-medium">Al Pacino</div>
                          <div className="text-gray-600 text-xs">
                            17 October 2021
                          </div>
                        </div>
                        <div className="text-theme-6">+$22</div>
                      </div>
                    </div>
                    <a
                      href=""
                      className="intro-x w-full block text-center rounded-md py-3 border border-dotted border-theme-15 text-theme-16"
                    >
                      View More
                    </a>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-6 xl:col-span-4 xxl:col-span-12 mt-3">
                  <div className="intro-x flex items-center h-10">
                    <h2 className="text-lg font-medium truncate mr-5">
                      Recent Activities
                    </h2>
                    <a href="" className="ml-auto text-theme-1 truncate">
                      See all
                    </a>
                  </div>
                  <div className="report-timeline mt-5 relative">
                    <div className="intro-x relative flex items-center mb-3">
                      <div className="report-timeline__image">
                        <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                          <img
                            alt="Midone Tailwind HTML Admin Template"
                            src={profile4}
                          />
                        </div>
                      </div>
                      <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                        <div className="flex items-center">
                          <div className="font-medium">John Travolta</div>
                          <div className="text-xs text-gray-500 ml-auto">
                            07:00 PM
                          </div>
                        </div>
                        <div className="text-gray-600 mt-1">
                          Has scheduled a multiple choice test
                        </div>
                      </div>
                    </div>
                    <div className="intro-x relative flex items-center mb-3">
                      <div className="report-timeline__image">
                        <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                          <img
                            alt="Midone Tailwind HTML Admin Template"
                            src={profile7}
                          />
                        </div>
                      </div>
                      <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                        <div className="flex items-center">
                          <div className="font-medium">John Travolta</div>
                          <div className="text-xs text-gray-500 ml-auto">
                            07:00 PM
                          </div>
                        </div>
                        <div className="text-gray-600">
                          <div className="mt-1">
                            Has marked and released results for latest exam
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="intro-x text-gray-500 text-xs text-center my-4">
                      12 November
                    </div>
                    <div className="intro-x relative flex items-center mb-3">
                      <div className="report-timeline__image">
                        <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                          <img
                            alt="Midone Tailwind HTML Admin Template"
                            src={profile11}
                          />
                        </div>
                      </div>
                      <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                        <div className="flex items-center">
                          <div className="font-medium">Leonardo DiCaprio</div>
                          <div className="text-xs text-gray-500 ml-auto">
                            07:00 PM
                          </div>
                        </div>
                        <div className="text-gray-600 mt-1">
                          Has extended due date of test
                        </div>
                      </div>
                    </div>
                    <div className="intro-x relative flex items-center mb-3">
                      <div className="report-timeline__image">
                        <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                          <img
                            alt="Midone Tailwind HTML Admin Template"
                            src={profile14}
                          />
                        </div>
                      </div>
                      <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                        <div className="flex items-center">
                          <div className="font-medium">Kevin Spacey</div>
                          <div className="text-xs text-gray-500 ml-auto">
                            07:00 PM
                          </div>
                        </div>
                        <div className="text-gray-600 mt-1">
                          Has extended due date of test
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-6 xl:col-span-4 xxl:col-span-12 xxl:col-start-auto xxl:row-start-auto mt-3">
                  <div className="intro-x flex items-center h-10">
                    <h2 className="text-lg font-medium truncate mr-5">
                      Schedules
                    </h2>
                    <a
                      href=""
                      className="ml-auto text-theme-1 truncate flex items-center"
                    >
                      {' '}
                      <Icon.Plus className="w-4 h-4 mr-1" /> Add New Schedules{' '}
                    </a>
                  </div>
                  <div className="mt-5">
                    <div className="intro-x box">
                      <div className="p-5">
                        <div className="flex">
                          <Icon.ChevronLeft className="w-5 h-5 text-gray-600" />
                          <div className="font-medium mx-auto">April</div>
                          <Icon.ChevronRight className="w-5 h-5 text-gray-600" />
                        </div>
                        <div className="grid grid-cols-7 gap-4 mt-5 text-center">
                          <div className="font-medium">Su</div>
                          <div className="font-medium">Mo</div>
                          <div className="font-medium">Tu</div>
                          <div className="font-medium">We</div>
                          <div className="font-medium">Th</div>
                          <div className="font-medium">Fr</div>
                          <div className="font-medium">Sa</div>
                          <div className="py-1 rounded relative text-gray-600">
                            29
                          </div>
                          <div className="py-1 rounded relative text-gray-600">
                            30
                          </div>
                          <div className="py-1 rounded relative text-gray-600">
                            31
                          </div>
                          <div className="py-1 rounded relative">1</div>
                          <div className="py-1 rounded relative">2</div>
                          <div className="py-1 rounded relative">3</div>
                          <div className="py-1 rounded relative">4</div>
                          <div className="py-1 rounded relative">5</div>
                          <div className="py-1 bg-theme-18 rounded relative">
                            6
                          </div>
                          <div className="py-1 rounded relative">7</div>
                          <div className="py-1 bg-theme-1 text-white rounded relative">
                            8
                          </div>
                          <div className="py-1 rounded relative">9</div>
                          <div className="py-1 rounded relative">10</div>
                          <div className="py-1 rounded relative">11</div>
                          <div className="py-1 rounded relative">12</div>
                          <div className="py-1 rounded relative">13</div>
                          <div className="py-1 rounded relative">14</div>
                          <div className="py-1 rounded relative">15</div>
                          <div className="py-1 rounded relative">16</div>
                          <div className="py-1 rounded relative">17</div>
                          <div className="py-1 rounded relative">18</div>
                          <div className="py-1 rounded relative">19</div>
                          <div className="py-1 rounded relative">20</div>
                          <div className="py-1 rounded relative">21</div>
                          <div className="py-1 rounded relative">22</div>
                          <div className="py-1 bg-theme-17 rounded relative">
                            23
                          </div>
                          <div className="py-1 rounded relative">24</div>
                          <div className="py-1 rounded relative">25</div>
                          <div className="py-1 rounded relative">26</div>
                          <div className="py-1 bg-theme-14 rounded relative">
                            27
                          </div>
                          <div className="py-1 rounded relative">28</div>
                          <div className="py-1 rounded relative">29</div>
                          <div className="py-1 rounded relative">30</div>
                          <div className="py-1 rounded relative text-gray-600">
                            1
                          </div>
                          <div className="py-1 rounded relative text-gray-600">
                            2
                          </div>
                          <div className="py-1 rounded relative text-gray-600">
                            3
                          </div>
                          <div className="py-1 rounded relative text-gray-600">
                            4
                          </div>
                          <div className="py-1 rounded relative text-gray-600">
                            5
                          </div>
                          <div className="py-1 rounded relative text-gray-600">
                            6
                          </div>
                          <div className="py-1 rounded relative text-gray-600">
                            7
                          </div>
                          <div className="py-1 rounded relative text-gray-600">
                            8
                          </div>
                          <div className="py-1 rounded relative text-gray-600">
                            9
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-gray-200 p-5">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-theme-11 rounded-full mr-3"></div>
                          <span className="truncate">UI/UX Workshop</span>
                          <div className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
                          <span className="font-medium xl:ml-auto">23th</span>
                        </div>
                        <div className="flex items-center mt-4">
                          <div className="w-2 h-2 bg-theme-1 rounded-full mr-3"></div>
                          <span className="truncate">
                            VueJs Frontend Development
                          </span>
                          <div className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
                          <span className="font-medium xl:ml-auto">10th</span>
                        </div>
                        <div className="flex items-center mt-4">
                          <div className="w-2 h-2 bg-theme-12 rounded-full mr-3"></div>
                          <span className="truncate">Laravel Rest API</span>
                          <div className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
                          <span className="font-medium xl:ml-auto">31th</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { HomePage }
