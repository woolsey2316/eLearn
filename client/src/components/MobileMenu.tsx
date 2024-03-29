import React from "react";

import * as Icon from "react-feather";

function MobileMenu() {
  return (
    <div className="mobile-menu md:hidden">
      <div className="mobile-menu-bar">
        <a href="/" className="flex mr-auto">
          <img
            alt="Midone Tailwind HTML Admin Template"
            className="w-6 ml-1"
            src="/images/logo.svg"
          />
        </a>
        <a href="/" id="mobile-menu-toggler">
          <Icon.BarChart2 className="w-8 h-8 text-white transform -rotate-90" />
        </a>
      </div>
      <ul className="border-t border-theme-24 py-5 hidden">
        <li>
          <a href="index.html" className="menu">
            <div className="menu__icon">
              <i data-feather="home"></i>
            </div>
            <div className="menu__title"> Dashboard </div>
          </a>
        </li>
        <li>
          <a href="/" className="menu">
            <div className="menu__icon">
              <i data-feather="box"></i>
            </div>
            <div className="menu__title">
              Menu Layout
              <i data-feather="chevron-down" className="menu__sub-icon"></i>
            </div>
          </a>
          <ul className="">
            <li>
              <a href="index.html" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title"> Side Menu </div>
              </a>
            </li>
            <li>
              <a href="simple-menu-dashboard.html" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title"> Simple Menu </div>
              </a>
            </li>
            <li>
              <a href="top-menu-dashboard.html" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title"> Top Menu </div>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="side-menu-inbox.html" className="menu">
            <div className="menu__icon">
              <i data-feather="inbox"></i>
            </div>
            <div className="menu__title"> Inbox </div>
          </a>
        </li>
        <li>
          <a href="side-menu-file-manager.html" className="menu">
            <div className="menu__icon">
              <i data-feather="hard-drive"></i>
            </div>
            <div className="menu__title"> File Manager </div>
          </a>
        </li>
        <li>
          <a href="side-menu-point-of-sale.html" className="menu">
            <div className="menu__icon">
              <i data-feather="credit-card"></i>
            </div>
            <div className="menu__title"> Point of Sale </div>
          </a>
        </li>
        <li>
          <a href="side-menu-chat.html" className="menu">
            <div className="menu__icon">
              <i data-feather="message-square"></i>
            </div>
            <div className="menu__title"> Chat </div>
          </a>
        </li>
        <li>
          <a href="side-menu-post.html" className="menu">
            <div className="menu__icon">
              <i data-feather="file-text"></i>
            </div>
            <div className="menu__title"> Post </div>
          </a>
        </li>
        <li className="menu__devider my-6"></li>
        <li>
          <a href="/" className="menu">
            <div className="menu__icon">
              <i data-feather="edit"></i>
            </div>
            <div className="menu__title">
              Crud
              <i data-feather="chevron-down" className="menu__sub-icon"></i>
            </div>
          </a>
          <ul className="">
            <li>
              <a href="side-menu-crud-data-list.html" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title"> Data List </div>
              </a>
            </li>
            <li>
              <a href="side-menu-crud-form.html" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title"> Form </div>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/" className="menu">
            <div className="menu__icon">
              <i data-feather="users"></i>
            </div>
            <div className="menu__title">
              Users
              <i data-feather="chevron-down" className="menu__sub-icon"></i>
            </div>
          </a>
          <ul className="">
            <li>
              <a href="side-menu-users-layout-1.html" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title"> Layout 1 </div>
              </a>
            </li>
            <li>
              <a href="side-menu-users-layout-2.html" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title"> Layout 2 </div>
              </a>
            </li>
            <li>
              <a href="side-menu-users-layout-3.html" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title"> Layout 3 </div>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/" className="menu">
            <div className="menu__icon">
              <i data-feather="trello"></i>
            </div>
            <div className="menu__title">
              Profile
              <i data-feather="chevron-down" className="menu__sub-icon"></i>
            </div>
          </a>
          <ul className="">
            <li>
              <a href="side-menu-profile-overview-1.html" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title"> Overview 1 </div>
              </a>
            </li>
            <li>
              <a href="side-menu-profile-overview-2.html" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title"> Overview 2 </div>
              </a>
            </li>
            <li>
              <a href="side-menu-profile-overview-3.html" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title"> Overview 3 </div>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/" className="menu">
            <div className="menu__icon">
              <i data-feather="layout"></i>
            </div>
            <div className="menu__title">
              Pages
              <i data-feather="chevron-down" className="menu__sub-icon"></i>
            </div>
          </a>
          <ul className="">
            <li>
              <a href="/" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title">
                  Wizards
                  <i data-feather="chevron-down" className="menu__sub-icon"></i>
                </div>
              </a>
              <ul className="">
                <li>
                  <a href="side-menu-wizard-layout-1.html" className="menu">
                    <div className="menu__icon">
                      <i data-feather="zap"></i>
                    </div>
                    <div className="menu__title">Layout 1</div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-wizard-layout-2.html" className="menu">
                    <div className="menu__icon">
                      <i data-feather="zap"></i>
                    </div>
                    <div className="menu__title">Layout 2</div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-wizard-layout-3.html" className="menu">
                    <div className="menu__icon">
                      <i data-feather="zap"></i>
                    </div>
                    <div className="menu__title">Layout 3</div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title">
                  Blog
                  <i data-feather="chevron-down" className="menu__sub-icon"></i>
                </div>
              </a>
              <ul className="">
                <li>
                  <a href="side-menu-blog-layout-1.html" className="menu">
                    <div className="menu__icon">
                      <i data-feather="zap"></i>
                    </div>
                    <div className="menu__title">Layout 1</div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-blog-layout-2.html" className="menu">
                    <div className="menu__icon">
                      <i data-feather="zap"></i>
                    </div>
                    <div className="menu__title">Layout 2</div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-blog-layout-3.html" className="menu">
                    <div className="menu__icon">
                      <i data-feather="zap"></i>
                    </div>
                    <div className="menu__title">Layout 3</div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title">
                  Pricing
                  <i data-feather="chevron-down" className="menu__sub-icon"></i>
                </div>
              </a>
              <ul className="">
                <li>
                  <a href="side-menu-pricing-layout-1.html" className="menu">
                    <div className="menu__icon">
                      <i data-feather="zap"></i>
                    </div>
                    <div className="menu__title">Layout 1</div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-pricing-layout-2.html" className="menu">
                    <div className="menu__icon">
                      <i data-feather="zap"></i>
                    </div>
                    <div className="menu__title">Layout 2</div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title">
                  Invoice
                  <i data-feather="chevron-down" className="menu__sub-icon"></i>
                </div>
              </a>
              <ul className="">
                <li>
                  <a href="side-menu-invoice-layout-1.html" className="menu">
                    <div className="menu__icon">
                      <i data-feather="zap"></i>
                    </div>
                    <div className="menu__title">Layout 1</div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-invoice-layout-2.html" className="menu">
                    <div className="menu__icon">
                      <i data-feather="zap"></i>
                    </div>
                    <div className="menu__title">Layout 2</div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title">
                  FAQ
                  <i data-feather="chevron-down" className="menu__sub-icon"></i>
                </div>
              </a>
              <ul className="">
                <li>
                  <a href="side-menu-faq-layout-1.html" className="menu">
                    <div className="menu__icon">
                      <i data-feather="zap"></i>
                    </div>
                    <div className="menu__title">Layout 1</div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-faq-layout-2.html" className="menu">
                    <div className="menu__icon">
                      <i data-feather="zap"></i>
                    </div>
                    <div className="menu__title">Layout 2</div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-faq-layout-3.html" className="menu">
                    <div className="menu__icon">
                      <i data-feather="zap"></i>
                    </div>
                    <div className="menu__title">Layout 3</div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="login-login.html" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title"> Login </div>
              </a>
            </li>
            <li>
              <a href="login-register.html" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title"> Register </div>
              </a>
            </li>
            <li>
              <a href="main-error-page.html" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title"> Error Page </div>
              </a>
            </li>
            <li>
              <a href="side-menu-update-profile.html" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title"> Update profile </div>
              </a>
            </li>
            <li>
              <a href="side-menu-change-password.html" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title"> Change Password </div>
              </a>
            </li>
          </ul>
        </li>
        <li className="menu__devider my-6"></li>
        <li>
          <a href="/" className="menu">
            <div className="menu__icon">
              <i data-feather="inbox"></i>
            </div>
            <div className="menu__title">
              Components
              <i data-feather="chevron-down" className="menu__sub-icon"></i>
            </div>
          </a>
          <ul className="">
            <li>
              <a href="/" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title">
                  Grid
                  <i data-feather="chevron-down" className="menu__sub-icon"></i>
                </div>
              </a>
              <ul className="">
                <li>
                  <a href="side-menu-regular-table.html" className="menu">
                    <div className="menu__icon">
                      <i data-feather="zap"></i>
                    </div>
                    <div className="menu__title">Regular Table</div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-datatable.html" className="menu">
                    <div className="menu__icon">
                      <i data-feather="zap"></i>
                    </div>
                    <div className="menu__title">Datatable</div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="side-menu-accordion.html" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title"> Accordion </div>
              </a>
            </li>
            <li>
              <a href="side-menu-button.html" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title"> Button </div>
              </a>
            </li>
            <li>
              <a href="side-menu-modal.html" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title"> Modal </div>
              </a>
            </li>
            <li>
              <a href="side-menu-alert.html" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title"> Alert </div>
              </a>
            </li>
            <li>
              <a href="side-menu-progress-bar.html" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title"> Progress Bar </div>
              </a>
            </li>
            <li>
              <a href="side-menu-tooltip.html" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title"> Tooltip </div>
              </a>
            </li>
            <li>
              <a href="side-menu-dropdown.html" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title"> Dropdown </div>
              </a>
            </li>
            <li>
              <a href="side-menu-toast.html" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title"> Toast </div>
              </a>
            </li>
            <li>
              <a href="side-menu-typography.html" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title"> Typography </div>
              </a>
            </li>
            <li>
              <a href="side-menu-icon.html" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title"> Icon </div>
              </a>
            </li>
            <li>
              <a href="side-menu-loading-icon.html" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title"> Loading Icon </div>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/" className="menu">
            <div className="menu__icon">
              <i data-feather="sidebar"></i>
            </div>
            <div className="menu__title">
              Forms
              <i data-feather="chevron-down" className="menu__sub-icon"></i>
            </div>
          </a>
          <ul className="">
            <li>
              <a href="side-menu-regular-form.html" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title"> Regular Form </div>
              </a>
            </li>
            <li>
              <a href="side-menu-datepicker.html" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title"> Datepicker </div>
              </a>
            </li>
            <li>
              <a href="side-menu-select2.html" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title"> Select2 </div>
              </a>
            </li>
            <li>
              <a href="side-menu-file-upload.html" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title"> File Upload </div>
              </a>
            </li>
            <li>
              <a href="side-menu-wysiwyg-editor.html" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title"> Wysiwyg Editor </div>
              </a>
            </li>
            <li>
              <a href="side-menu-validation.html" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title"> Validation </div>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/" className="menu">
            <div className="menu__icon">
              <i data-feather="hard-drive"></i>
            </div>
            <div className="menu__title">
              Widgets
              <i data-feather="chevron-down" className="menu__sub-icon"></i>
            </div>
          </a>
          <ul className="">
            <li>
              <a href="side-menu-chart.html" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title"> Chart </div>
              </a>
            </li>
            <li>
              <a href="side-menu-slider.html" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title"> Slider </div>
              </a>
            </li>
            <li>
              <a href="side-menu-image-zoom.html" className="menu">
                <div className="menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="menu__title"> Image Zoom </div>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export { MobileMenu };
