import React, { userEffect, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { userActions } from '../actions'

import '../assets/dist/css/app.css'

function HomePage() {
  /*
  const access_token = useSelector(state => state.authentication.user.token.access_token)
  const refresh_token = useSelector(state => state.authentication.user.token.refresh_token)
  */

  return (
    <div className="app">
        <div className="mobile-menu md:hidden">
            <div className="mobile-menu-bar">
                <a href="" className="flex mr-auto">
                    <img alt="Midone Tailwind HTML Admin Template" className="w-6" src="dist/images/logo.svg"/>
                </a>
                <a href="javascript:;" id="mobile-menu-toggler"> <i data-feather="bar-chart-2" className="w-8 h-8 text-white transform -rotate-90"></i> </a>
            </div>
            <ul className="border-t border-theme-24 py-5 hidden">
                <li>
                    <a href="index.html" className="menu menu--active">
                        <div className="menu__icon"> <i data-feather="home"></i> </div>
                        <div className="menu__title"> Dashboard </div>
                    </a>
                </li>
                <li>
                    <a href="javascript:;" className="menu">
                        <div className="menu__icon"> <i data-feather="box"></i> </div>
                        <div className="menu__title"> Menu Layout <i data-feather="chevron-down" className="menu__sub-icon"></i> </div>
                    </a>
                    <ul className="">
                        <li>
                            <a href="index.html" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Side Menu </div>
                            </a>
                        </li>
                        <li>
                            <a href="simple-menu-dashboard.html" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Simple Menu </div>
                            </a>
                        </li>
                        <li>
                            <a href="top-menu-dashboard.html" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Top Menu </div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="side-menu-inbox.html" className="menu">
                        <div className="menu__icon"> <i data-feather="inbox"></i> </div>
                        <div className="menu__title"> Inbox </div>
                    </a>
                </li>
                <li>
                    <a href="side-menu-file-manager.html" className="menu">
                        <div className="menu__icon"> <i data-feather="hard-drive"></i> </div>
                        <div className="menu__title"> File Manager </div>
                    </a>
                </li>
                <li>
                    <a href="side-menu-point-of-sale.html" className="menu">
                        <div className="menu__icon"> <i data-feather="credit-card"></i> </div>
                        <div className="menu__title"> Point of Sale </div>
                    </a>
                </li>
                <li>
                    <a href="side-menu-chat.html" className="menu">
                        <div className="menu__icon"> <i data-feather="message-square"></i> </div>
                        <div className="menu__title"> Chat </div>
                    </a>
                </li>
                <li>
                    <a href="side-menu-post.html" className="menu">
                        <div className="menu__icon"> <i data-feather="file-text"></i> </div>
                        <div className="menu__title"> Post </div>
                    </a>
                </li>
                <li className="menu__devider my-6"></li>
                <li>
                    <a href="javascript:;" className="menu">
                        <div className="menu__icon"> <i data-feather="edit"></i> </div>
                        <div className="menu__title"> Crud <i data-feather="chevron-down" className="menu__sub-icon"></i> </div>
                    </a>
                    <ul className="">
                        <li>
                            <a href="side-menu-crud-data-list.html" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Data List </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-crud-form.html" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Form </div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:;" className="menu">
                        <div className="menu__icon"> <i data-feather="users"></i> </div>
                        <div className="menu__title"> Users <i data-feather="chevron-down" className="menu__sub-icon"></i> </div>
                    </a>
                    <ul className="">
                        <li>
                            <a href="side-menu-users-layout-1.html" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Layout 1 </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-users-layout-2.html" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Layout 2 </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-users-layout-3.html" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Layout 3 </div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:;" className="menu">
                        <div className="menu__icon"> <i data-feather="trello"></i> </div>
                        <div className="menu__title"> Profile <i data-feather="chevron-down" className="menu__sub-icon"></i> </div>
                    </a>
                    <ul className="">
                        <li>
                            <a href="side-menu-profile-overview-1.html" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Overview 1 </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-profile-overview-2.html" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Overview 2 </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-profile-overview-3.html" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Overview 3 </div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:;" className="menu">
                        <div className="menu__icon"> <i data-feather="layout"></i> </div>
                        <div className="menu__title"> Pages <i data-feather="chevron-down" className="menu__sub-icon"></i> </div>
                    </a>
                    <ul className="">
                        <li>
                            <a href="javascript:;" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Wizards <i data-feather="chevron-down" className="menu__sub-icon"></i> </div>
                            </a>
                            <ul className="">
                                <li>
                                    <a href="side-menu-wizard-layout-1.html" className="menu">
                                        <div className="menu__icon"> <i data-feather="zap"></i> </div>
                                        <div className="menu__title">Layout 1</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-wizard-layout-2.html" className="menu">
                                        <div className="menu__icon"> <i data-feather="zap"></i> </div>
                                        <div className="menu__title">Layout 2</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-wizard-layout-3.html" className="menu">
                                        <div className="menu__icon"> <i data-feather="zap"></i> </div>
                                        <div className="menu__title">Layout 3</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Blog <i data-feather="chevron-down" className="menu__sub-icon"></i> </div>
                            </a>
                            <ul className="">
                                <li>
                                    <a href="side-menu-blog-layout-1.html" className="menu">
                                        <div className="menu__icon"> <i data-feather="zap"></i> </div>
                                        <div className="menu__title">Layout 1</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-blog-layout-2.html" className="menu">
                                        <div className="menu__icon"> <i data-feather="zap"></i> </div>
                                        <div className="menu__title">Layout 2</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-blog-layout-3.html" className="menu">
                                        <div className="menu__icon"> <i data-feather="zap"></i> </div>
                                        <div className="menu__title">Layout 3</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Pricing <i data-feather="chevron-down" className="menu__sub-icon"></i> </div>
                            </a>
                            <ul className="">
                                <li>
                                    <a href="side-menu-pricing-layout-1.html" className="menu">
                                        <div className="menu__icon"> <i data-feather="zap"></i> </div>
                                        <div className="menu__title">Layout 1</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-pricing-layout-2.html" className="menu">
                                        <div className="menu__icon"> <i data-feather="zap"></i> </div>
                                        <div className="menu__title">Layout 2</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Invoice <i data-feather="chevron-down" className="menu__sub-icon"></i> </div>
                            </a>
                            <ul className="">
                                <li>
                                    <a href="side-menu-invoice-layout-1.html" className="menu">
                                        <div className="menu__icon"> <i data-feather="zap"></i> </div>
                                        <div className="menu__title">Layout 1</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-invoice-layout-2.html" className="menu">
                                        <div className="menu__icon"> <i data-feather="zap"></i> </div>
                                        <div className="menu__title">Layout 2</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> FAQ <i data-feather="chevron-down" className="menu__sub-icon"></i> </div>
                            </a>
                            <ul className="">
                                <li>
                                    <a href="side-menu-faq-layout-1.html" className="menu">
                                        <div className="menu__icon"> <i data-feather="zap"></i> </div>
                                        <div className="menu__title">Layout 1</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-faq-layout-2.html" className="menu">
                                        <div className="menu__icon"> <i data-feather="zap"></i> </div>
                                        <div className="menu__title">Layout 2</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-faq-layout-3.html" className="menu">
                                        <div className="menu__icon"> <i data-feather="zap"></i> </div>
                                        <div className="menu__title">Layout 3</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="login-login.html" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Login </div>
                            </a>
                        </li>
                        <li>
                            <a href="login-register.html" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Register </div>
                            </a>
                        </li>
                        <li>
                            <a href="main-error-page.html" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Error Page </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-update-profile.html" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Update profile </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-change-password.html" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Change Password </div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="menu__devider my-6"></li>
                <li>
                    <a href="javascript:;" className="menu">
                        <div className="menu__icon"> <i data-feather="inbox"></i> </div>
                        <div className="menu__title"> Components <i data-feather="chevron-down" className="menu__sub-icon"></i> </div>
                    </a>
                    <ul className="">
                        <li>
                            <a href="javascript:;" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Grid <i data-feather="chevron-down" className="menu__sub-icon"></i> </div>
                            </a>
                            <ul className="">
                                <li>
                                    <a href="side-menu-regular-table.html" className="menu">
                                        <div className="menu__icon"> <i data-feather="zap"></i> </div>
                                        <div className="menu__title">Regular Table</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-datatable.html" className="menu">
                                        <div className="menu__icon"> <i data-feather="zap"></i> </div>
                                        <div className="menu__title">Datatable</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="side-menu-accordion.html" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Accordion </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-button.html" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Button </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-modal.html" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Modal </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-alert.html" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Alert </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-progress-bar.html" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Progress Bar </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-tooltip.html" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Tooltip </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dropdown.html" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Dropdown </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-toast.html" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Toast </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-typography.html" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Typography </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-icon.html" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Icon </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-loading-icon.html" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Loading Icon </div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:;" className="menu">
                        <div className="menu__icon"> <i data-feather="sidebar"></i> </div>
                        <div className="menu__title"> Forms <i data-feather="chevron-down" className="menu__sub-icon"></i> </div>
                    </a>
                    <ul className="">
                        <li>
                            <a href="side-menu-regular-form.html" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Regular Form </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-datepicker.html" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Datepicker </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-select2.html" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Select2 </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-file-upload.html" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> File Upload </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-wysiwyg-editor.html" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Wysiwyg Editor </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-validation.html" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Validation </div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:;" className="menu">
                        <div className="menu__icon"> <i data-feather="hard-drive"></i> </div>
                        <div className="menu__title"> Widgets <i data-feather="chevron-down" className="menu__sub-icon"></i> </div>
                    </a>
                    <ul className="">
                        <li>
                            <a href="side-menu-chart.html" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Chart </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-slider.html" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Slider </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-image-zoom.html" className="menu">
                                <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                <div className="menu__title"> Image Zoom </div>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

        <div className="flex">

            <nav className="side-nav">
                <a href="" className="intro-x flex items-center pl-5 pt-4">
                    <img alt="Midone Tailwind HTML Admin Template" className="w-6" src="dist/images/logo.svg"/>
                    <span className="hidden xl:block text-white text-lg ml-3"> Mid<span className="font-medium">one</span> </span>
                </a>
                <div className="side-nav__devider my-6"></div>
                <ul>
                    <li>
                        <a href="index.html" className="side-menu side-menu--active">
                            <div className="side-menu__icon"> <i data-feather="home"></i> </div>
                            <div className="side-menu__title"> Dashboard </div>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;" className="side-menu">
                            <div className="side-menu__icon"> <i data-feather="box"></i> </div>
                            <div className="side-menu__title"> Menu Layout <i data-feather="chevron-down" className="side-menu__sub-icon"></i> </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="index.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Side Menu </div>
                                </a>
                            </li>
                            <li>
                                <a href="simple-menu-dashboard.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Simple Menu </div>
                                </a>
                            </li>
                            <li>
                                <a href="top-menu-dashboard.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Top Menu </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="side-menu-inbox.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-feather="inbox"></i> </div>
                            <div className="side-menu__title"> Inbox </div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-file-manager.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-feather="hard-drive"></i> </div>
                            <div className="side-menu__title"> File Manager </div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-point-of-sale.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-feather="credit-card"></i> </div>
                            <div className="side-menu__title"> Point of Sale </div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-chat.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-feather="message-square"></i> </div>
                            <div className="side-menu__title"> Chat </div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-post.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-feather="file-text"></i> </div>
                            <div className="side-menu__title"> Post </div>
                        </a>
                    </li>
                    <li className="side-nav__devider my-6"></li>
                    <li>
                        <a href="javascript:;" className="side-menu">
                            <div className="side-menu__icon"> <i data-feather="edit"></i> </div>
                            <div className="side-menu__title"> Crud <i data-feather="chevron-down" className="side-menu__sub-icon"></i> </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-crud-data-list.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Data List </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-crud-form.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Form </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:;" className="side-menu">
                            <div className="side-menu__icon"> <i data-feather="users"></i> </div>
                            <div className="side-menu__title"> Users <i data-feather="chevron-down" className="side-menu__sub-icon"></i> </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-users-layout-1.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Layout 1 </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-users-layout-2.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Layout 2 </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-users-layout-3.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Layout 3 </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:;" className="side-menu">
                            <div className="side-menu__icon"> <i data-feather="trello"></i> </div>
                            <div className="side-menu__title"> Profile <i data-feather="chevron-down" className="side-menu__sub-icon"></i> </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-profile-overview-1.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Overview 1 </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-profile-overview-2.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Overview 2 </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-profile-overview-3.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Overview 3 </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:;" className="side-menu">
                            <div className="side-menu__icon"> <i data-feather="layout"></i> </div>
                            <div className="side-menu__title"> Pages <i data-feather="chevron-down" className="side-menu__sub-icon"></i> </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="javascript:;" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Wizards <i data-feather="chevron-down" className="side-menu__sub-icon"></i> </div>
                                </a>
                                <ul className="">
                                    <li>
                                        <a href="side-menu-wizard-layout-1.html" className="side-menu">
                                            <div className="side-menu__icon"> <i data-feather="zap"></i> </div>
                                            <div className="side-menu__title">Layout 1</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-wizard-layout-2.html" className="side-menu">
                                            <div className="side-menu__icon"> <i data-feather="zap"></i> </div>
                                            <div className="side-menu__title">Layout 2</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-wizard-layout-3.html" className="side-menu">
                                            <div className="side-menu__icon"> <i data-feather="zap"></i> </div>
                                            <div className="side-menu__title">Layout 3</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Blog <i data-feather="chevron-down" className="side-menu__sub-icon"></i> </div>
                                </a>
                                <ul className="">
                                    <li>
                                        <a href="side-menu-blog-layout-1.html" className="side-menu">
                                            <div className="side-menu__icon"> <i data-feather="zap"></i> </div>
                                            <div className="side-menu__title">Layout 1</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-blog-layout-2.html" className="side-menu">
                                            <div className="side-menu__icon"> <i data-feather="zap"></i> </div>
                                            <div className="side-menu__title">Layout 2</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-blog-layout-3.html" className="side-menu">
                                            <div className="side-menu__icon"> <i data-feather="zap"></i> </div>
                                            <div className="side-menu__title">Layout 3</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Pricing <i data-feather="chevron-down" className="side-menu__sub-icon"></i> </div>
                                </a>
                                <ul className="">
                                    <li>
                                        <a href="side-menu-pricing-layout-1.html" className="side-menu">
                                            <div className="side-menu__icon"> <i data-feather="zap"></i> </div>
                                            <div className="side-menu__title">Layout 1</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-pricing-layout-2.html" className="side-menu">
                                            <div className="side-menu__icon"> <i data-feather="zap"></i> </div>
                                            <div className="side-menu__title">Layout 2</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Invoice <i data-feather="chevron-down" className="side-menu__sub-icon"></i> </div>
                                </a>
                                <ul className="">
                                    <li>
                                        <a href="side-menu-invoice-layout-1.html" className="side-menu">
                                            <div className="side-menu__icon"> <i data-feather="zap"></i> </div>
                                            <div className="side-menu__title">Layout 1</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-invoice-layout-2.html" className="side-menu">
                                            <div className="side-menu__icon"> <i data-feather="zap"></i> </div>
                                            <div className="side-menu__title">Layout 2</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> FAQ <i data-feather="chevron-down" className="side-menu__sub-icon"></i> </div>
                                </a>
                                <ul className="">
                                    <li>
                                        <a href="side-menu-faq-layout-1.html" className="side-menu">
                                            <div className="side-menu__icon"> <i data-feather="zap"></i> </div>
                                            <div className="side-menu__title">Layout 1</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-faq-layout-2.html" className="side-menu">
                                            <div className="side-menu__icon"> <i data-feather="zap"></i> </div>
                                            <div className="side-menu__title">Layout 2</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-faq-layout-3.html" className="side-menu">
                                            <div className="side-menu__icon"> <i data-feather="zap"></i> </div>
                                            <div className="side-menu__title">Layout 3</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="login-login.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Login </div>
                                </a>
                            </li>
                            <li>
                                <a href="login-register.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Register </div>
                                </a>
                            </li>
                            <li>
                                <a href="main-error-page.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Error Page </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-update-profile.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Update profile </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-change-password.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Change Password </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="side-nav__devider my-6"></li>
                    <li>
                        <a href="javascript:;" className="side-menu">
                            <div className="side-menu__icon"> <i data-feather="inbox"></i> </div>
                            <div className="side-menu__title"> Components <i data-feather="chevron-down" className="side-menu__sub-icon"></i> </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="javascript:;" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Grid <i data-feather="chevron-down" className="side-menu__sub-icon"></i> </div>
                                </a>
                                <ul className="">
                                    <li>
                                        <a href="side-menu-regular-table.html" className="side-menu">
                                            <div className="side-menu__icon"> <i data-feather="zap"></i> </div>
                                            <div className="side-menu__title">Regular Table</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-datatable.html" className="side-menu">
                                            <div className="side-menu__icon"> <i data-feather="zap"></i> </div>
                                            <div className="side-menu__title">Datatable</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="side-menu-accordion.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Accordion </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-button.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Button </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-modal.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Modal </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-alert.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Alert </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-progress-bar.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Progress Bar </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-tooltip.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Tooltip </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-dropdown.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Dropdown </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-toast.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Toast </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-typography.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Typography </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-icon.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Icon </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-loading-icon.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Loading Icon </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:;" className="side-menu">
                            <div className="side-menu__icon"> <i data-feather="sidebar"></i> </div>
                            <div className="side-menu__title"> Forms <i data-feather="chevron-down" className="side-menu__sub-icon"></i> </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-regular-form.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Regular Form </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-datepicker.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Datepicker </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-select2.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Select2 </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-file-upload.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> File Upload </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-wysiwyg-editor.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Wysiwyg Editor </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-validation.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Validation </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:;" className="side-menu">
                            <div className="side-menu__icon"> <i data-feather="hard-drive"></i> </div>
                            <div className="side-menu__title"> Widgets <i data-feather="chevron-down" className="side-menu__sub-icon"></i> </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-chart.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Chart </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-slider.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Slider </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-image-zoom.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="side-menu__title"> Image Zoom </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>


            <div className="content">

                <div className="top-bar">

                    <div className="-intro-x breadcrumb mr-auto hidden sm:flex"> <a href="" className="">Application</a> <i data-feather="chevron-right" className="breadcrumb__icon"></i> <a href="" className="breadcrumb--active">Dashboard</a> </div>


                    <div className="intro-x relative mr-3 sm:mr-6">
                        <div className="search hidden sm:block">
                            <input type="text" className="search__input input placeholder-theme-13" placeholder="Search..."/>
                            <i data-feather="search" className="search__icon"></i> 
                        </div>
                        <a className="notification sm:hidden" href=""> <i data-feather="search" className="notification__icon"></i> </a>
                        <div className="search-result">
                            <div className="search-result__content">
                                <div className="search-result__content__title">Pages</div>
                                <div className="mb-5">
                                    <a href="" className="flex items-center">
                                        <div className="w-8 h-8 bg-theme-18 text-theme-9 flex items-center justify-center rounded-full"> <i className="w-4 h-4" data-feather="inbox"></i> </div>
                                        <div className="ml-3">Mail Settings</div>
                                    </a>
                                    <a href="" className="flex items-center mt-2">
                                        <div className="w-8 h-8 bg-theme-17 text-theme-11 flex items-center justify-center rounded-full"> <i className="w-4 h-4" data-feather="users"></i> </div>
                                        <div className="ml-3">Users & Permissions</div>
                                    </a>
                                    <a href="" className="flex items-center mt-2">
                                        <div className="w-8 h-8 bg-theme-14 text-theme-10 flex items-center justify-center rounded-full"> <i className="w-4 h-4" data-feather="credit-card"></i> </div>
                                        <div className="ml-3">Transactions Report</div>
                                    </a>
                                </div>
                                <div className="search-result__content__title">Users</div>
                                <div className="mb-5">
                                    <a href="" className="flex items-center mt-2">
                                        <div className="w-8 h-8 image-fit">
                                            <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-15.jpg"/>
                                        </div>
                                        <div className="ml-3">Robert De Niro</div>
                                        <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">robertdeniro@left4code.com</div>
                                    </a>
                                    <a href="" className="flex items-center mt-2">
                                        <div className="w-8 h-8 image-fit">
                                            <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-5.jpg"/>
                                        </div>
                                        <div className="ml-3">Johnny Depp</div>
                                        <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">johnnydepp@left4code.com</div>
                                    </a>
                                    <a href="" className="flex items-center mt-2">
                                        <div className="w-8 h-8 image-fit">
                                            <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-12.jpg"/>
                                        </div>
                                        <div className="ml-3">Johnny Depp</div>
                                        <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">johnnydepp@left4code.com</div>
                                    </a>
                                    <a href="" className="flex items-center mt-2">
                                        <div className="w-8 h-8 image-fit">
                                            <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-12.jpg"/>
                                        </div>
                                        <div className="ml-3">Kevin Spacey</div>
                                        <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">kevinspacey@left4code.com</div>
                                    </a>
                                </div>
                                <div className="search-result__content__title">Products</div>
                                <a href="" className="flex items-center mt-2">
                                    <div className="w-8 h-8 image-fit">
                                        <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/preview-1.jpg"/>
                                    </div>
                                    <div className="ml-3">Oppo Find X2 Pro</div>
                                    <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">Smartphone &amp; Tablet</div>
                                </a>
                                <a href="" className="flex items-center mt-2">
                                    <div className="w-8 h-8 image-fit">
                                        <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/preview-1.jpg"/>
                                    </div>
                                    <div className="ml-3">Nikon Z6</div>
                                    <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">Photography</div>
                                </a>
                                <a href="" className="flex items-center mt-2">
                                    <div className="w-8 h-8 image-fit">
                                        <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/preview-2.jpg"/>
                                    </div>
                                    <div className="ml-3">Oppo Find X2 Pro</div>
                                    <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">Smartphone &amp; Tablet</div>
                                </a>
                                <a href="" className="flex items-center mt-2">
                                    <div className="w-8 h-8 image-fit">
                                        <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/preview-1.jpg"/>
                                    </div>
                                    <div className="ml-3">Nikon Z6</div>
                                    <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">Photography</div>
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="intro-x dropdown relative mr-auto sm:mr-6">
                        <div className="dropdown-toggle notification notification--bullet cursor-pointer"> <i data-feather="bell" className="notification__icon"></i> </div>
                        <div className="notification-content dropdown-box mt-8 absolute top-0 left-0 sm:left-auto sm:right-0 z-20 -ml-10 sm:ml-0">
                            <div className="notification-content__box dropdown-box__content box">
                                <div className="notification-content__title">Notifications</div>
                                <div className="cursor-pointer relative flex items-center ">
                                    <div className="w-12 h-12 flex-none image-fit mr-1">
                                        <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-15.jpg"/>
                                        <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                                    </div>
                                    <div className="ml-2 overflow-hidden">
                                        <div className="flex items-center">
                                            <a href="javascript:;" className="font-medium truncate mr-5">Robert De Niro</a> 
                                            <div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">01:10 PM</div>
                                        </div>
                                        <div className="w-full truncate text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </div>
                                    </div>
                                </div>
                                <div className="cursor-pointer relative flex items-center mt-5">
                                    <div className="w-12 h-12 flex-none image-fit mr-1">
                                        <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-5.jpg"/>
                                        <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                                    </div>
                                    <div className="ml-2 overflow-hidden">
                                        <div className="flex items-center">
                                            <a href="javascript:;" className="font-medium truncate mr-5">Johnny Depp</a> 
                                            <div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">06:05 AM</div>
                                        </div>
                                        <div className="w-full truncate text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </div>
                                    </div>
                                </div>
                                <div className="cursor-pointer relative flex items-center mt-5">
                                    <div className="w-12 h-12 flex-none image-fit mr-1">
                                        <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-12.jpg"/>
                                        <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                                    </div>
                                    <div className="ml-2 overflow-hidden">
                                        <div className="flex items-center">
                                            <a href="javascript:;" className="font-medium truncate mr-5">Johnny Depp</a> 
                                            <div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">01:10 PM</div>
                                        </div>
                                        <div className="w-full truncate text-gray-600">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 20</div>
                                    </div>
                                </div>
                                <div className="cursor-pointer relative flex items-center mt-5">
                                    <div className="w-12 h-12 flex-none image-fit mr-1">
                                        <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-12.jpg"/>
                                        <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                                    </div>
                                    <div className="ml-2 overflow-hidden">
                                        <div className="flex items-center">
                                            <a href="javascript:;" className="font-medium truncate mr-5">Kevin Spacey</a> 
                                            <div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">06:05 AM</div>
                                        </div>
                                        <div className="w-full truncate text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500</div>
                                    </div>
                                </div>
                                <div className="cursor-pointer relative flex items-center mt-5">
                                    <div className="w-12 h-12 flex-none image-fit mr-1">
                                        <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-14.jpg"/>
                                        <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                                    </div>
                                    <div className="ml-2 overflow-hidden">
                                        <div className="flex items-center">
                                            <a href="javascript:;" className="font-medium truncate mr-5">Brad Pitt</a> 
                                            <div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">06:05 AM</div>
                                        </div>
                                        <div className="w-full truncate text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="intro-x dropdown w-8 h-8 relative">
                        <div className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in">
                            <img alt="Midone Tailwind HTML Admin Template" src="dist/images/profile-8.jpg"/>
                        </div>
                        <div className="dropdown-box mt-10 absolute w-56 top-0 right-0 z-20">
                            <div className="dropdown-box__content box bg-theme-38 text-white">
                                <div className="p-4 border-b border-theme-40">
                                    <div className="font-medium">Robert De Niro</div>
                                    <div className="text-xs text-theme-41">DevOps Engineer</div>
                                </div>
                                <div className="p-2">
                                    <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"> <i data-feather="user" className="w-4 h-4 mr-2"></i> Profile </a>
                                    <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"> <i data-feather="edit" className="w-4 h-4 mr-2"></i> Add Account </a>
                                    <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"> <i data-feather="lock" className="w-4 h-4 mr-2"></i> Reset Password </a>
                                    <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"> <i data-feather="help-circle" className="w-4 h-4 mr-2"></i> Help </a>
                                </div>
                                <div className="p-2 border-t border-theme-40">
                                    <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"> <i data-feather="toggle-right" className="w-4 h-4 mr-2"></i> Logout </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 xxl:col-span-9 grid grid-cols-12 gap-6">

                        <div className="col-span-12 mt-8">
                            <div className="intro-y flex items-center h-10">
                                <h2 className="text-lg font-medium truncate mr-5">
                                    General Report
                                </h2>
                                <a href="" className="ml-auto flex text-theme-1"> <i data-feather="refresh-ccw" className="w-4 h-4 mr-3"></i> Reload Data </a>
                            </div>
                            <div className="grid grid-cols-12 gap-6 mt-5">
                                <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                    <div className="report-box zoom-in">
                                        <div className="box p-5">
                                            <div className="flex">
                                                <i data-feather="shopping-cart" className="report-box__icon text-theme-10"></i> 
                                                <div className="ml-auto">
                                                    <div className="report-box__indicator bg-theme-9 tooltip cursor-pointer" title="33% Higher than last month"> 33% <i data-feather="chevron-up" className="w-4 h-4"></i> </div>
                                                </div>
                                            </div>
                                            <div className="text-3xl font-bold leading-8 mt-6">4.510</div>
                                            <div className="text-base text-gray-600 mt-1">Item Sales</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                    <div className="report-box zoom-in">
                                        <div className="box p-5">
                                            <div className="flex">
                                                <i data-feather="credit-card" className="report-box__icon text-theme-11"></i> 
                                                <div className="ml-auto">
                                                    <div className="report-box__indicator bg-theme-6 tooltip cursor-pointer" title="2% Lower than last month"> 2% <i data-feather="chevron-down" className="w-4 h-4"></i> </div>
                                                </div>
                                            </div>
                                            <div className="text-3xl font-bold leading-8 mt-6">3.521</div>
                                            <div className="text-base text-gray-600 mt-1">New Orders</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                    <div className="report-box zoom-in">
                                        <div className="box p-5">
                                            <div className="flex">
                                                <i data-feather="monitor" className="report-box__icon text-theme-12"></i> 
                                                <div className="ml-auto">
                                                    <div className="report-box__indicator bg-theme-9 tooltip cursor-pointer" title="12% Higher than last month"> 12% <i data-feather="chevron-up" className="w-4 h-4"></i> </div>
                                                </div>
                                            </div>
                                            <div className="text-3xl font-bold leading-8 mt-6">2.145</div>
                                            <div className="text-base text-gray-600 mt-1">Total Products</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                    <div className="report-box zoom-in">
                                        <div className="box p-5">
                                            <div className="flex">
                                                <i data-feather="user" className="report-box__icon text-theme-9"></i> 
                                                <div className="ml-auto">
                                                    <div className="report-box__indicator bg-theme-9 tooltip cursor-pointer" title="22% Higher than last month"> 22% <i data-feather="chevron-up" className="w-4 h-4"></i> </div>
                                                </div>
                                            </div>
                                            <div className="text-3xl font-bold leading-8 mt-6">152.000</div>
                                            <div className="text-base text-gray-600 mt-1">Unique Visitor</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-span-12 lg:col-span-6 mt-8">
                            <div className="intro-y block sm:flex items-center h-10">
                                <h2 className="text-lg font-medium truncate mr-5">
                                    Sales Report
                                </h2>
                                <div className="sm:ml-auto mt-3 sm:mt-0 relative text-gray-700">
                                    <i data-feather="calendar" className="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"></i> 
                                    <input type="text" data-daterange="true" className="datepicker input w-full sm:w-56 box pl-10"/>
                                </div>
                            </div>
                            <div className="intro-y box p-5 mt-12 sm:mt-5">
                                <div className="flex flex-col xl:flex-row xl:items-center">
                                    <div className="flex">
                                        <div>
                                            <div className="text-theme-20 text-lg xl:text-xl font-bold">$15,000</div>
                                            <div className="text-gray-600">This Month</div>
                                        </div>
                                        <div className="w-px h-12 border border-r border-dashed border-gray-300 mx-4 xl:mx-6"></div>
                                        <div>
                                            <div className="text-gray-600 text-lg xl:text-xl font-medium">$10,000</div>
                                            <div className="text-gray-600">Last Month</div>
                                        </div>
                                    </div>
                                    <div className="dropdown relative xl:ml-auto mt-5 xl:mt-0">
                                        <button className="dropdown-toggle button font-normal border text-white relative flex items-center text-gray-700"> Filter by Category <i data-feather="chevron-down" className="w-4 h-4 ml-2"></i> </button>
                                        <div className="dropdown-box mt-10 absolute w-40 top-0 xl:right-0 z-20">
                                            <div className="dropdown-box__content box p-2 overflow-y-auto h-32"> <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md">PC & Laptop</a> <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md">Smartphone</a> <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md">Electronic</a> <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md">Photography</a> <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md">Sport</a> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="report-chart">
                                    <canvas id="report-line-chart" height="160" className="mt-6"></canvas>
                                </div>
                            </div>
                        </div>


                        <div className="col-span-12 sm:col-span-6 lg:col-span-3 mt-8">
                            <div className="intro-y flex items-center h-10">
                                <h2 className="text-lg font-medium truncate mr-5">
                                    Weekly Top Seller
                                </h2>
                                <a href="" className="ml-auto text-theme-1 truncate">See all</a> 
                            </div>
                            <div className="intro-y box p-5 mt-5">
                                <canvas className="mt-3" id="report-pie-chart" height="280"></canvas>
                                <div className="mt-8">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-theme-11 rounded-full mr-3"></div>
                                        <span className="truncate">17 - 30 Years old</span> 
                                        <div className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
                                        <span className="font-medium xl:ml-auto">62%</span> 
                                    </div>
                                    <div className="flex items-center mt-4">
                                        <div className="w-2 h-2 bg-theme-1 rounded-full mr-3"></div>
                                        <span className="truncate">31 - 50 Years old</span> 
                                        <div className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
                                        <span className="font-medium xl:ml-auto">33%</span> 
                                    </div>
                                    <div className="flex items-center mt-4">
                                        <div className="w-2 h-2 bg-theme-12 rounded-full mr-3"></div>
                                        <span className="truncate">>= 50 Years old</span> 
                                        <div className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
                                        <span className="font-medium xl:ml-auto">10%</span> 
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-span-12 sm:col-span-6 lg:col-span-3 mt-8">
                            <div className="intro-y flex items-center h-10">
                                <h2 className="text-lg font-medium truncate mr-5">
                                    Sales Report
                                </h2>
                                <a href="" className="ml-auto text-theme-1 truncate">See all</a> 
                            </div>
                            <div className="intro-y box p-5 mt-5">
                                <canvas className="mt-3" id="report-donut-chart" height="280"></canvas>
                                <div className="mt-8">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-theme-11 rounded-full mr-3"></div>
                                        <span className="truncate">17 - 30 Years old</span> 
                                        <div className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
                                        <span className="font-medium xl:ml-auto">62%</span> 
                                    </div>
                                    <div className="flex items-center mt-4">
                                        <div className="w-2 h-2 bg-theme-1 rounded-full mr-3"></div>
                                        <span className="truncate">31 - 50 Years old</span> 
                                        <div className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
                                        <span className="font-medium xl:ml-auto">33%</span> 
                                    </div>
                                    <div className="flex items-center mt-4">
                                        <div className="w-2 h-2 bg-theme-12 rounded-full mr-3"></div>
                                        <span className="truncate">>= 50 Years old</span> 
                                        <div className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
                                        <span className="font-medium xl:ml-auto">10%</span> 
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-span-12 xl:col-span-8 mt-6">
                            <div className="intro-y block sm:flex items-center h-10">
                                <h2 className="text-lg font-medium truncate mr-5">
                                    Official Store
                                </h2>
                                <div className="sm:ml-auto mt-3 sm:mt-0 relative text-gray-700">
                                    <i data-feather="map-pin" className="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"></i> 
                                    <input type="text" className="input w-full sm:w-40 box pl-10" placeholder="Filter by city"/>
                                </div>
                            </div>
                            <div className="intro-y box p-5 mt-12 sm:mt-5">
                                <div>250 Official stores in 21 countries, click the marker to see location details.</div>
                                <div className="report-maps mt-5 bg-gray-200 rounded-md" data-center="-6.2425342, 106.8626478" data-sources="/dist/json/location.json"></div>
                            </div>
                        </div>


                        <div className="col-span-12 xl:col-span-4 mt-6">
                            <div className="intro-y flex items-center h-10">
                                <h2 className="text-lg font-medium truncate mr-5">
                                    Weekly Best Sellers
                                </h2>
                            </div>
                            <div className="mt-5">
                                <div className="intro-y">
                                    <div className="box px-4 py-4 mb-3 flex items-center zoom-in">
                                        <div className="w-10 h-10 flex-none image-fit rounded-md overflow-hidden">
                                            <img alt="Midone Tailwind HTML Admin Template" src="dist/images/profile-13.jpg"/>
                                        </div>
                                        <div className="ml-4 mr-auto">
                                            <div className="font-medium">Nicolas Cage</div>
                                            <div className="text-gray-600 text-xs">7 July 2022</div>
                                        </div>
                                        <div className="py-1 px-2 rounded-full text-xs bg-theme-9 text-white cursor-pointer font-medium">137 Sales</div>
                                    </div>
                                </div>
                                <div className="intro-y">
                                    <div className="box px-4 py-4 mb-3 flex items-center zoom-in">
                                        <div className="w-10 h-10 flex-none image-fit rounded-md overflow-hidden">
                                            <img alt="Midone Tailwind HTML Admin Template" src="dist/images/profile-1.jpg"/>
                                        </div>
                                        <div className="ml-4 mr-auto">
                                            <div className="font-medium">Arnold Schwarzenegger</div>
                                            <div className="text-gray-600 text-xs">9 August 2022</div>
                                        </div>
                                        <div className="py-1 px-2 rounded-full text-xs bg-theme-9 text-white cursor-pointer font-medium">137 Sales</div>
                                    </div>
                                </div>
                                <div className="intro-y">
                                    <div className="box px-4 py-4 mb-3 flex items-center zoom-in">
                                        <div className="w-10 h-10 flex-none image-fit rounded-md overflow-hidden">
                                            <img alt="Midone Tailwind HTML Admin Template" src="dist/images/profile-7.jpg"/>
                                        </div>
                                        <div className="ml-4 mr-auto">
                                            <div className="font-medium">Johnny Depp</div>
                                            <div className="text-gray-600 text-xs">31 August 2022</div>
                                        </div>
                                        <div className="py-1 px-2 rounded-full text-xs bg-theme-9 text-white cursor-pointer font-medium">137 Sales</div>
                                    </div>
                                </div>
                                <div className="intro-y">
                                    <div className="box px-4 py-4 mb-3 flex items-center zoom-in">
                                        <div className="w-10 h-10 flex-none image-fit rounded-md overflow-hidden">
                                            <img alt="Midone Tailwind HTML Admin Template" src="dist/images/profile-1.jpg"/>
                                        </div>
                                        <div className="ml-4 mr-auto">
                                            <div className="font-medium">Johnny Depp</div>
                                            <div className="text-gray-600 text-xs">5 November 2021</div>
                                        </div>
                                        <div className="py-1 px-2 rounded-full text-xs bg-theme-9 text-white cursor-pointer font-medium">137 Sales</div>
                                    </div>
                                </div>
                                <a href="" className="intro-y w-full block text-center rounded-md py-4 border border-dotted border-theme-15 text-theme-16">View More</a> 
                            </div>
                        </div>


                        <div className="col-span-12 grid grid-cols-12 gap-6 mt-8">
                            <div className="col-span-12 sm:col-span-6 xxl:col-span-3 intro-y">
                                <div className="mini-report-chart box p-5 zoom-in">
                                    <div className="flex items-center">
                                        <div className="w-2/4 flex-none">
                                            <div className="text-lg font-medium truncate">Target Sales</div>
                                            <div className="text-gray-600 mt-1">300 Sales</div>
                                        </div>
                                        <div className="flex-none ml-auto relative">
                                            <canvas id="report-donut-chart-1" width="90" height="90"></canvas>
                                            <div className="font-medium absolute w-full h-full flex items-center justify-center top-0 left-0">20%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 xxl:col-span-3 intro-y">
                                <div className="mini-report-chart box p-5 zoom-in">
                                    <div className="flex">
                                        <div className="text-lg font-medium truncate mr-3">Social Media</div>
                                        <div className="py-1 px-2 rounded-full text-xs bg-gray-200 text-gray-600 cursor-pointer ml-auto truncate">320 Followers</div>
                                    </div>
                                    <div className="mt-4">
                                        <canvas className="simple-line-chart-1 -ml-1" height="60"></canvas>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 xxl:col-span-3 intro-y">
                                <div className="mini-report-chart box p-5 zoom-in">
                                    <div className="flex items-center">
                                        <div className="w-2/4 flex-none">
                                            <div className="text-lg font-medium truncate">New Products</div>
                                            <div className="text-gray-600 mt-1">1450 Products</div>
                                        </div>
                                        <div className="flex-none ml-auto relative">
                                            <canvas id="report-donut-chart-2" width="90" height="90"></canvas>
                                            <div className="font-medium absolute w-full h-full flex items-center justify-center top-0 left-0">45%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 xxl:col-span-3 intro-y">
                                <div className="mini-report-chart box p-5 zoom-in">
                                    <div className="flex">
                                        <div className="text-lg font-medium truncate mr-3">Posted Ads</div>
                                        <div className="py-1 px-2 rounded-full text-xs bg-gray-200 text-gray-600 cursor-pointer ml-auto truncate">180 Campaign</div>
                                    </div>
                                    <div className="mt-4">
                                        <canvas className="simple-line-chart-1 -ml-1" height="60"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-span-12 mt-6">
                            <div className="intro-y block sm:flex items-center h-10">
                                <h2 className="text-lg font-medium truncate mr-5">
                                    Weekly Top Seller
                                </h2>
                                <div className="flex items-center sm:ml-auto mt-3 sm:mt-0">
                                    <button className="button box flex items-center text-gray-700"> <i data-feather="file-text" className="hidden sm:block w-4 h-4 mr-2"></i> Export to Excel </button>
                                    <button className="ml-3 button box flex items-center text-gray-700"> <i data-feather="file-text" className="hidden sm:block w-4 h-4 mr-2"></i> Export to PDF </button>
                                </div>
                            </div>
                            <div className="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
                                <table className="table table-report sm:mt-2">
                                    <thead>
                                        <tr>
                                            <th className="whitespace-no-wrap">IMAGES</th>
                                            <th className="whitespace-no-wrap">PRODUCT NAME</th>
                                            <th className="text-center whitespace-no-wrap">STOCK</th>
                                            <th className="text-center whitespace-no-wrap">STATUS</th>
                                            <th className="text-center whitespace-no-wrap">ACTIONS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="intro-x">
                                            <td className="w-40">
                                                <div className="flex">
                                                    <div className="w-10 h-10 image-fit zoom-in">
                                                        <img alt="Midone Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-10.jpg" title="Uploaded at 7 July 2022"/>
                                                    </div>
                                                    <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                        <img alt="Midone Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-13.jpg" title="Uploaded at 25 May 2022"/>
                                                    </div>
                                                    <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                        <img alt="Midone Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-9.jpg" title="Uploaded at 12 June 2022"/>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <a href="" className="font-medium whitespace-no-wrap">Samsung Galaxy S20 Ultra</a> 
                                                <div className="text-gray-600 text-xs whitespace-no-wrap">Smartphone &amp; Tablet</div>
                                            </td>
                                            <td className="text-center">158</td>
                                            <td className="w-40">
                                                <div className="flex items-center justify-center text-theme-9"> <i data-feather="check-square" className="w-4 h-4 mr-2"></i> Active </div>
                                            </td>
                                            <td className="table-report__action w-56">
                                                <div className="flex justify-center items-center">
                                                    <a className="flex items-center mr-3" href=""> <i data-feather="check-square" className="w-4 h-4 mr-1"></i> Edit </a>
                                                    <a className="flex items-center text-theme-6" href=""> <i data-feather="trash-2" className="w-4 h-4 mr-1"></i> Delete </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="intro-x">
                                            <td className="w-40">
                                                <div className="flex">
                                                    <div className="w-10 h-10 image-fit zoom-in">
                                                        <img alt="Midone Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-4.jpg" title="Uploaded at 9 August 2022"/>
                                                    </div>
                                                    <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                        <img alt="Midone Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-6.jpg" title="Uploaded at 6 July 2020"/>
                                                    </div>
                                                    <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                        <img alt="Midone Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-2.jpg" title="Uploaded at 6 October 2021"/>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <a href="" className="font-medium whitespace-no-wrap">Sony Master Series A9G</a> 
                                                <div className="text-gray-600 text-xs whitespace-no-wrap">Electronic</div>
                                            </td>
                                            <td className="text-center">50</td>
                                            <td className="w-40">
                                                <div className="flex items-center justify-center text-theme-6"> <i data-feather="check-square" className="w-4 h-4 mr-2"></i> Inactive </div>
                                            </td>
                                            <td className="table-report__action w-56">
                                                <div className="flex justify-center items-center">
                                                    <a className="flex items-center mr-3" href=""> <i data-feather="check-square" className="w-4 h-4 mr-1"></i> Edit </a>
                                                    <a className="flex items-center text-theme-6" href=""> <i data-feather="trash-2" className="w-4 h-4 mr-1"></i> Delete </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="intro-x">
                                            <td className="w-40">
                                                <div className="flex">
                                                    <div className="w-10 h-10 image-fit zoom-in">
                                                        <img alt="Midone Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-12.jpg" title="Uploaded at 31 August 2022"/>
                                                    </div>
                                                    <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                        <img alt="Midone Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-14.jpg" title="Uploaded at 17 May 2020"/>
                                                    </div>
                                                    <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                        <img alt="Midone Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-9.jpg" title="Uploaded at 15 March 2021"/>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <a href="" className="font-medium whitespace-no-wrap">Sony Master Series A9G</a> 
                                                <div className="text-gray-600 text-xs whitespace-no-wrap">Electronic</div>
                                            </td>
                                            <td className="text-center">99</td>
                                            <td className="w-40">
                                                <div className="flex items-center justify-center text-theme-9"> <i data-feather="check-square" className="w-4 h-4 mr-2"></i> Active </div>
                                            </td>
                                            <td className="table-report__action w-56">
                                                <div className="flex justify-center items-center">
                                                    <a className="flex items-center mr-3" href=""> <i data-feather="check-square" className="w-4 h-4 mr-1"></i> Edit </a>
                                                    <a className="flex items-center text-theme-6" href=""> <i data-feather="trash-2" className="w-4 h-4 mr-1"></i> Delete </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="intro-x">
                                            <td className="w-40">
                                                <div className="flex">
                                                    <div className="w-10 h-10 image-fit zoom-in">
                                                        <img alt="Midone Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-15.jpg" title="Uploaded at 5 November 2021"/>
                                                    </div>
                                                    <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                        <img alt="Midone Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-3.jpg" title="Uploaded at 22 April 2021"/>
                                                    </div>
                                                    <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                        <img alt="Midone Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-13.jpg" title="Uploaded at 14 April 2021"/>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <a href="" className="font-medium whitespace-no-wrap">Dell XPS 13</a> 
                                                <div className="text-gray-600 text-xs whitespace-no-wrap">PC &amp; Laptop</div>
                                            </td>
                                            <td className="text-center">50</td>
                                            <td className="w-40">
                                                <div className="flex items-center justify-center text-theme-9"> <i data-feather="check-square" className="w-4 h-4 mr-2"></i> Active </div>
                                            </td>
                                            <td className="table-report__action w-56">
                                                <div className="flex justify-center items-center">
                                                    <a className="flex items-center mr-3" href=""> <i data-feather="check-square" className="w-4 h-4 mr-1"></i> Edit </a>
                                                    <a className="flex items-center text-theme-6" href=""> <i data-feather="trash-2" className="w-4 h-4 mr-1"></i> Delete </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="intro-y flex flex-wrap sm:flex-row sm:flex-no-wrap items-center mt-3">
                                <ul className="pagination">
                                    <li>
                                        <a className="pagination__link" href=""> <i className="w-4 h-4" data-feather="chevrons-left"></i> </a>
                                    </li>
                                    <li>
                                        <a className="pagination__link" href=""> <i className="w-4 h-4" data-feather="chevron-left"></i> </a>
                                    </li>
                                    <li> <a className="pagination__link" href="">...</a> </li>
                                    <li> <a className="pagination__link" href="">1</a> </li>
                                    <li> <a className="pagination__link pagination__link--active" href="">2</a> </li>
                                    <li> <a className="pagination__link" href="">3</a> </li>
                                    <li> <a className="pagination__link" href="">...</a> </li>
                                    <li>
                                        <a className="pagination__link" href=""> <i className="w-4 h-4" data-feather="chevron-right"></i> </a>
                                    </li>
                                    <li>
                                        <a className="pagination__link" href=""> <i className="w-4 h-4" data-feather="chevrons-right"></i> </a>
                                    </li>
                                </ul>
                                <select className="w-20 input box mt-3 sm:mt-0">
                                    <option>10</option>
                                    <option>25</option>
                                    <option>35</option>
                                    <option>50</option>
                                </select>
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
                                                <img alt="Midone Tailwind HTML Admin Template" src="dist/images/profile-13.jpg"/>
                                            </div>
                                            <div className="ml-4 mr-auto">
                                                <div className="font-medium">Nicolas Cage</div>
                                                <div className="text-gray-600 text-xs">7 July 2022</div>
                                            </div>
                                            <div className="text-theme-9">+$88</div>
                                        </div>
                                    </div>
                                    <div className="intro-x">
                                        <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                                            <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt="Midone Tailwind HTML Admin Template" src="dist/images/profile-1.jpg"/>
                                            </div>
                                            <div className="ml-4 mr-auto">
                                                <div className="font-medium">Arnold Schwarzenegger</div>
                                                <div className="text-gray-600 text-xs">9 August 2022</div>
                                            </div>
                                            <div className="text-theme-6">+$47</div>
                                        </div>
                                    </div>
                                    <div className="intro-x">
                                        <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                                            <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt="Midone Tailwind HTML Admin Template" src="dist/images/profile-7.jpg"/>
                                            </div>
                                            <div className="ml-4 mr-auto">
                                                <div className="font-medium">Johnny Depp</div>
                                                <div className="text-gray-600 text-xs">31 August 2022</div>
                                            </div>
                                            <div className="text-theme-9">+$34</div>
                                        </div>
                                    </div>
                                    <div className="intro-x">
                                        <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                                            <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt="Midone Tailwind HTML Admin Template" src="dist/images/profile-1.jpg"/>
                                            </div>
                                            <div className="ml-4 mr-auto">
                                                <div className="font-medium">Johnny Depp</div>
                                                <div className="text-gray-600 text-xs">5 November 2021</div>
                                            </div>
                                            <div className="text-theme-9">+$42</div>
                                        </div>
                                    </div>
                                    <div className="intro-x">
                                        <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                                            <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt="Midone Tailwind HTML Admin Template" src="dist/images/profile-7.jpg"/>
                                            </div>
                                            <div className="ml-4 mr-auto">
                                                <div className="font-medium">Al Pacino</div>
                                                <div className="text-gray-600 text-xs">17 October 2021</div>
                                            </div>
                                            <div className="text-theme-6">+$22</div>
                                        </div>
                                    </div>
                                    <a href="" className="intro-x w-full block text-center rounded-md py-3 border border-dotted border-theme-15 text-theme-16">View More</a> 
                                </div>
                            </div>


                            <div className="col-span-12 md:col-span-6 xl:col-span-4 xxl:col-span-12 mt-3">
                                <div className="intro-x flex items-center h-10">
                                    <h2 className="text-lg font-medium truncate mr-5">
                                        Recent Activities
                                    </h2>
                                    <a href="" className="ml-auto text-theme-1 truncate">See all</a> 
                                </div>
                                <div className="report-timeline mt-5 relative">
                                    <div className="intro-x relative flex items-center mb-3">
                                        <div className="report-timeline__image">
                                            <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt="Midone Tailwind HTML Admin Template" src="dist/images/profile-4.jpg"/>
                                            </div>
                                        </div>
                                        <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                                            <div className="flex items-center">
                                                <div className="font-medium">John Travolta</div>
                                                <div className="text-xs text-gray-500 ml-auto">07:00 PM</div>
                                            </div>
                                            <div className="text-gray-600 mt-1">Has joined the team</div>
                                        </div>
                                    </div>
                                    <div className="intro-x relative flex items-center mb-3">
                                        <div className="report-timeline__image">
                                            <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt="Midone Tailwind HTML Admin Template" src="dist/images/profile-7.jpg"/>
                                            </div>
                                        </div>
                                        <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                                            <div className="flex items-center">
                                                <div className="font-medium">John Travolta</div>
                                                <div className="text-xs text-gray-500 ml-auto">07:00 PM</div>
                                            </div>
                                            <div className="text-gray-600">
                                                <div className="mt-1">Added 3 new photos</div>
                                                <div className="flex mt-2">
                                                    <div className="tooltip w-8 h-8 image-fit mr-1 zoom-in" title="Samsung Galaxy S20 Ultra">
                                                        <img alt="Midone Tailwind HTML Admin Template" className="rounded-md border border-white" src="dist/images/preview-8.jpg"/>
                                                    </div>
                                                    <div className="tooltip w-8 h-8 image-fit mr-1 zoom-in" title="Sony Master Series A9G">
                                                        <img alt="Midone Tailwind HTML Admin Template" className="rounded-md border border-white" src="dist/images/preview-12.jpg"/>
                                                    </div>
                                                    <div className="tooltip w-8 h-8 image-fit mr-1 zoom-in" title="Sony Master Series A9G">
                                                        <img alt="Midone Tailwind HTML Admin Template" className="rounded-md border border-white" src="dist/images/preview-11.jpg"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="intro-x text-gray-500 text-xs text-center my-4">12 November</div>
                                    <div className="intro-x relative flex items-center mb-3">
                                        <div className="report-timeline__image">
                                            <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt="Midone Tailwind HTML Admin Template" src="dist/images/profile-11.jpg"/>
                                            </div>
                                        </div>
                                        <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                                            <div className="flex items-center">
                                                <div className="font-medium">Leonardo DiCaprio</div>
                                                <div className="text-xs text-gray-500 ml-auto">07:00 PM</div>
                                            </div>
                                            <div className="text-gray-600 mt-1">Has changed <a className="text-theme-1" href="">Sony A7 III</a> price and description</div>
                                        </div>
                                    </div>
                                    <div className="intro-x relative flex items-center mb-3">
                                        <div className="report-timeline__image">
                                            <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt="Midone Tailwind HTML Admin Template" src="dist/images/profile-14.jpg"/>
                                            </div>
                                        </div>
                                        <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                                            <div className="flex items-center">
                                                <div className="font-medium">Kevin Spacey</div>
                                                <div className="text-xs text-gray-500 ml-auto">07:00 PM</div>
                                            </div>
                                            <div className="text-gray-600 mt-1">Has changed <a className="text-theme-1" href="">Apple MacBook Pro 13</a> description</div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-span-12 md:col-span-6 xl:col-span-12 xxl:col-span-12 xl:col-start-1 xl:row-start-1 xxl:col-start-auto xxl:row-start-auto mt-3">
                                <div className="intro-x flex items-center h-10">
                                    <h2 className="text-lg font-medium truncate mr-auto">
                                        Important Notes
                                    </h2>
                                    <button data-carousel="important-notes" data-target="prev" className="slick-navigator button px-2 border border-gray-400 flex items-center text-gray-700 mr-2"> <i data-feather="chevron-left" className="w-4 h-4"></i> </button>
                                    <button data-carousel="important-notes" data-target="next" className="slick-navigator button px-2 border border-gray-400 flex items-center text-gray-700"> <i data-feather="chevron-right" className="w-4 h-4"></i> </button>
                                </div>
                                <div className="mt-5 intro-x">
                                    <div className="slick-carousel box zoom-in" id="important-notes">
                                        <div className="p-5">
                                            <div className="text-base font-medium truncate">Lorem Ipsum is simply dummy text</div>
                                            <div className="text-gray-500 mt-1">20 Hours ago</div>
                                            <div className="text-gray-600 text-justify mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                                            <div className="font-medium flex mt-5">
                                                <button type="button" className="button button--sm bg-gray-200 text-gray-600">View Notes</button>
                                                <button type="button" className="button button--sm border border-gray-300 text-gray-600 ml-auto">Dismiss</button>
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <div className="font-medium truncate">Lorem Ipsum is simply dummy text</div>
                                            <div className="text-gray-500 mt-1">20 Hours ago</div>
                                            <div className="text-gray-600 text-justify mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                                            <div className="font-medium flex mt-5">
                                                <button type="button" className="button button--sm bg-gray-200 text-gray-600">View Notes</button>
                                                <button type="button" className="button button--sm border border-gray-300 text-gray-600 ml-auto">Dismiss</button>
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <div className="font-medium truncate">Lorem Ipsum is simply dummy text</div>
                                            <div className="text-gray-500 mt-1">20 Hours ago</div>
                                            <div className="text-gray-600 text-justify mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                                            <div className="font-medium flex mt-5">
                                                <button type="button" className="button button--sm bg-gray-200 text-gray-600">View Notes</button>
                                                <button type="button" className="button button--sm border border-gray-300 text-gray-600 ml-auto">Dismiss</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-span-12 md:col-span-6 xl:col-span-4 xxl:col-span-12 xl:col-start-1 xl:row-start-2 xxl:col-start-auto xxl:row-start-auto mt-3">
                                <div className="intro-x flex items-center h-10">
                                    <h2 className="text-lg font-medium truncate mr-5">
                                        Schedules
                                    </h2>
                                    <a href="" className="ml-auto text-theme-1 truncate flex items-center"> <i data-feather="plus" className="w-4 h-4 mr-1"></i> Add New Schedules </a>
                                </div>
                                <div className="mt-5">
                                    <div className="intro-x box">
                                        <div className="p-5">
                                            <div className="flex">
                                                <i data-feather="chevron-left" className="w-5 h-5 text-gray-600"></i> 
                                                <div className="font-medium mx-auto">April</div>
                                                <i data-feather="chevron-right" className="w-5 h-5 text-gray-600"></i> 
                                            </div>
                                            <div className="grid grid-cols-7 gap-4 mt-5 text-center">
                                                <div className="font-medium">Su</div>
                                                <div className="font-medium">Mo</div>
                                                <div className="font-medium">Tu</div>
                                                <div className="font-medium">We</div>
                                                <div className="font-medium">Th</div>
                                                <div className="font-medium">Fr</div>
                                                <div className="font-medium">Sa</div>
                                                <div className="py-1 rounded relative text-gray-600">29</div>
                                                <div className="py-1 rounded relative text-gray-600">30</div>
                                                <div className="py-1 rounded relative text-gray-600">31</div>
                                                <div className="py-1 rounded relative">1</div>
                                                <div className="py-1 rounded relative">2</div>
                                                <div className="py-1 rounded relative">3</div>
                                                <div className="py-1 rounded relative">4</div>
                                                <div className="py-1 rounded relative">5</div>
                                                <div className="py-1 bg-theme-18 rounded relative">6</div>
                                                <div className="py-1 rounded relative">7</div>
                                                <div className="py-1 bg-theme-1 text-white rounded relative">8</div>
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
                                                <div className="py-1 bg-theme-17 rounded relative">23</div>
                                                <div className="py-1 rounded relative">24</div>
                                                <div className="py-1 rounded relative">25</div>
                                                <div className="py-1 rounded relative">26</div>
                                                <div className="py-1 bg-theme-14 rounded relative">27</div>
                                                <div className="py-1 rounded relative">28</div>
                                                <div className="py-1 rounded relative">29</div>
                                                <div className="py-1 rounded relative">30</div>
                                                <div className="py-1 rounded relative text-gray-600">1</div>
                                                <div className="py-1 rounded relative text-gray-600">2</div>
                                                <div className="py-1 rounded relative text-gray-600">3</div>
                                                <div className="py-1 rounded relative text-gray-600">4</div>
                                                <div className="py-1 rounded relative text-gray-600">5</div>
                                                <div className="py-1 rounded relative text-gray-600">6</div>
                                                <div className="py-1 rounded relative text-gray-600">7</div>
                                                <div className="py-1 rounded relative text-gray-600">8</div>
                                                <div className="py-1 rounded relative text-gray-600">9</div>
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
                                                <span className="truncate">VueJs Frontend Development</span> 
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