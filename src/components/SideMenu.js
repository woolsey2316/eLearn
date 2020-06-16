import React from 'react'
import * as Icon from 'react-feather'

import logo from "../assets/dist/images/logo.svg"

function SideMenu() {
  return (
    <nav className="side-nav">
            <a href="" className="intro-x flex items-center pl-5 pt-4">
                <img alt="Midone Tailwind HTML Admin Template" className="w-6" src={logo}/>
                <span className="hidden xl:block text-white text-lg ml-3"> e<span className="font-medium">Learn</span> </span>
            </a>
            <div className="side-nav__devider my-6"></div>
            <ul>
                <li>
                    <a href="index.html" className="side-menu">
                        <div className="side-menu__icon"> <Icon.Home/> </div>
                        <div className="side-menu__title"> Dashboard </div>
                    </a>
                </li>
                <li>
                    <a href="javascript:;" className="side-menu">
                        <div className="side-menu__icon"> <Icon.Box/> </div>
                        <div className="side-menu__title"> Menu Layout <Icon.ChevronDown className="side-menu__sub-icon"/> </div>
                    </a>
                    <ul className="">
                        <li>
                            <a href="index.html" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Side Menu </div>
                            </a>
                        </li>
                        <li>
                            <a href="simple-menu-dashboard.html" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Simple Menu </div>
                            </a>
                        </li>
                        <li>
                            <a href="top-menu-dashboard.html" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Top Menu </div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="side-menu-inbox.html" className="side-menu">
                        <div className="side-menu__icon"> <Icon.Inbox/> </div>
                        <div className="side-menu__title"> Inbox </div>
                    </a>
                </li>
                <li>
                    <a href="side-menu-file-manager.html" className="side-menu">
                        <div className="side-menu__icon"> <Icon.HardDrive/> </div>
                        <div className="side-menu__title"> File Manager </div>
                    </a>
                </li>
                <li>
                    <a href="side-menu-point-of-sale.html" className="side-menu">
                        <div className="side-menu__icon"> <Icon.CreditCard/> </div>
                        <div className="side-menu__title"> Point of Sale </div>
                    </a>
                </li>
                <li>
                    <a href="side-menu-chat.html" className="side-menu">
                        <div className="side-menu__icon"> <Icon.MessageSquare/> </div>
                        <div className="side-menu__title"> Chat </div>
                    </a>
                </li>
                <li>
                    <a href="side-menu-post.html" className="side-menu">
                        <div className="side-menu__icon"> <Icon.FileText/> </div>
                        <div className="side-menu__title"> Post </div>
                    </a>
                </li>
                <li className="side-nav__devider my-6"></li>
                <li>
                    <a href="javascript:;" className="side-menu">
                        <div className="side-menu__icon"> <Icon.Edit/> </div>
                        <div className="side-menu__title"> Crud <Icon.ChevronDown className="side-menu__sub-icon"/> </div>
                    </a>
                    <ul className="">
                        <li>
                            <a href="side-menu-crud-data-list.html" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Data List </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-crud-form.html" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Form </div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:;" className="side-menu">
                        <div className="side-menu__icon"> <Icon.Users/> </div>
                        <div className="side-menu__title"> Users <Icon.ChevronDown className="side-menu__sub-icon"/> </div>
                    </a>
                    <ul className="">
                        <li>
                            <a href="side-menu-users-layout-1.html" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Layout 1 </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-users-layout-2.html" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Layout 2 </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-users-layout-3.html" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Layout 3 </div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:;" className="side-menu">
                        <div className="side-menu__icon"> <Icon.Trello/> </div>
                        <div className="side-menu__title"> Profile <Icon.ChevronDown className="side-menu__sub-icon"/> </div>
                    </a>
                    <ul className="">
                        <li>
                            <a href="side-menu-profile-overview-1.html" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Overview 1 </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-profile-overview-2.html" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Overview 2 </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-profile-overview-3.html" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Overview 3 </div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:;.html" className="side-menu side-menu--active">
                        <div className="side-menu__icon"> <Icon.Layout/> </div>
                        <div className="side-menu__title"> Pages <Icon.ChevronDown className="side-menu__sub-icon"/> </div>
                    </a>
                    <ul className="side-menu__sub-open">
                        <li>
                            <a href="javascript:;" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Wizards <Icon.ChevronDown className="side-menu__sub-icon"/> </div>
                            </a>
                            <ul className="">
                                <li>
                                    <a href="side-menu-wizard-layout-1.html" className="side-menu">
                                        <div className="side-menu__icon"> <Icon.Zap/> </div>
                                        <div className="side-menu__title">Layout 1</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-wizard-layout-2.html" className="side-menu">
                                        <div className="side-menu__icon"> <Icon.Zap/> </div>
                                        <div className="side-menu__title">Layout 2</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-wizard-layout-3.html" className="side-menu">
                                        <div className="side-menu__icon"> <Icon.Zap/> </div>
                                        <div className="side-menu__title">Layout 3</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Blog <Icon.ChevronDown className="side-menu__sub-icon"/> </div>
                            </a>
                            <ul className="">
                                <li>
                                    <a href="side-menu-blog-layout-1.html" className="side-menu">
                                        <div className="side-menu__icon"> <Icon.Zap/> </div>
                                        <div className="side-menu__title">Layout 1</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-blog-layout-2.html" className="side-menu">
                                        <div className="side-menu__icon"> <Icon.Zap/> </div>
                                        <div className="side-menu__title">Layout 2</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-blog-layout-3.html" className="side-menu">
                                        <div className="side-menu__icon"> <Icon.Zap/> </div>
                                        <div className="side-menu__title">Layout 3</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Pricing <Icon.ChevronDown className="side-menu__sub-icon"/> </div>
                            </a>
                            <ul className="">
                                <li>
                                    <a href="side-menu-pricing-layout-1.html" className="side-menu">
                                        <div className="side-menu__icon"> <Icon.Zap/> </div>
                                        <div className="side-menu__title">Layout 1</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-pricing-layout-2.html" className="side-menu">
                                        <div className="side-menu__icon"> <Icon.Zap/> </div>
                                        <div className="side-menu__title">Layout 2</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Invoice <Icon.ChevronDown className="side-menu__sub-icon"/> </div>
                            </a>
                            <ul className="">
                                <li>
                                    <a href="side-menu-invoice-layout-1.html" className="side-menu">
                                        <div className="side-menu__icon"> <Icon.Zap/> </div>
                                        <div className="side-menu__title">Layout 1</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-invoice-layout-2.html" className="side-menu">
                                        <div className="side-menu__icon"> <Icon.Zap/> </div>
                                        <div className="side-menu__title">Layout 2</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> FAQ <Icon.ChevronDown className="side-menu__sub-icon"/> </div>
                            </a>
                            <ul className="">
                                <li>
                                    <a href="side-menu-faq-layout-1.html" className="side-menu">
                                        <div className="side-menu__icon"> <Icon.Zap/> </div>
                                        <div className="side-menu__title">Layout 1</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-faq-layout-2.html" className="side-menu">
                                        <div className="side-menu__icon"> <Icon.Zap/> </div>
                                        <div className="side-menu__title">Layout 2</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-faq-layout-3.html" className="side-menu">
                                        <div className="side-menu__icon"> <Icon.Zap/> </div>
                                        <div className="side-menu__title">Layout 3</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="login-login.html" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Login </div>
                            </a>
                        </li>
                        <li>
                            <a href="login-register.html" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Register </div>
                            </a>
                        </li>
                        <li>
                            <a href="main-error-page.html" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Error Page </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-update-profile.html" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Update profile </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-change-password.html" className="side-menu side-menu--active">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Change Password </div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="side-nav__devider my-6"></li>
                <li>
                    <a href="javascript:;" className="side-menu">
                        <div className="side-menu__icon"> <Icon.Inbox/> </div>
                        <div className="side-menu__title"> Components <Icon.ChevronDown className="side-menu__sub-icon"/> </div>
                    </a>
                    <ul className="">
                        <li>
                            <a href="javascript:;" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Grid <Icon.ChevronDown className="side-menu__sub-icon"/> </div>
                            </a>
                            <ul className="">
                                <li>
                                    <a href="side-menu-regular-table.html" className="side-menu">
                                        <div className="side-menu__icon"> <Icon.Zap/> </div>
                                        <div className="side-menu__title">Regular Table</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-datatable.html" className="side-menu">
                                        <div className="side-menu__icon"> <Icon.Zap/> </div>
                                        <div className="side-menu__title">Datatable</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="side-menu-accordion.html" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Accordion </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-button.html" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Button </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-modal.html" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Modal </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-alert.html" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Alert </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-progress-bar.html" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Progress Bar </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-tooltip.html" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Tooltip </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dropdown.html" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Dropdown </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-toast.html" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Toast </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-typography.html" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Typography </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-icon.html" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Icon </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-loading-icon.html" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Loading Icon </div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:;" className="side-menu">
                        <div className="side-menu__icon"> <Icon.Sidebar/> </div>
                        <div className="side-menu__title"> Forms <Icon.ChevronDown className="side-menu__sub-icon"/> </div>
                    </a>
                    <ul className="">
                        <li>
                            <a href="side-menu-regular-form.html" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Regular Form </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-datepicker.html" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Datepicker </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-select2.html" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Select2 </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-file-upload.html" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> File Upload </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-wysiwyg-editor.html" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Wysiwyg Editor </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-validation.html" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Validation </div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:;" className="side-menu">
                        <div className="side-menu__icon"> <Icon.HardDrive/> </div>
                        <div className="side-menu__title"> Widgets <Icon.ChevronDown className="side-menu__sub-icon"/> </div>
                    </a>
                    <ul className="">
                        <li>
                            <a href="side-menu-chart.html" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Chart </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-slider.html" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Slider </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-image-zoom.html" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity/> </div>
                                <div className="side-menu__title"> Image Zoom </div>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
  )
}
export { SideMenu }