import React from "react";

function TopMenu() {
  return (
    <nav className="top-nav">
      <ul>
        <li>
          <a href="top-menu-dashboard.html" className="top-menu">
            <div className="top-menu__icon">
              <i data-feather="home"></i>
            </div>
            <div className="top-menu__title"> Dashboard </div>
          </a>
        </li>
        <li>
          <a href="/" className="top-menu">
            <div className="top-menu__icon">
              <i data-feather="box"></i>
            </div>
            <div className="top-menu__title">
              Menu Layout
              <i data-feather="chevron-down" className="top-menu__sub-icon"></i>
            </div>
          </a>
          <ul className="">
            <li>
              <a href="index.html" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title"> Side Menu </div>
              </a>
            </li>
            <li>
              <a href="simple-menu-dashboard.html" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title"> Simple Menu </div>
              </a>
            </li>
            <li>
              <a href="top-menu-dashboard.html" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title"> Top Menu </div>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/.html" className="top-menu top-menu--active">
            <div className="top-menu__icon">
              <i data-feather="activity"></i>
            </div>
            <div className="top-menu__title">
              Apps
              <i data-feather="chevron-down" className="top-menu__sub-icon"></i>
            </div>
          </a>
          <ul className="top-menu__sub-open">
            <li>
              <a href="/" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title">
                  Users
                  <i
                    data-feather="chevron-down"
                    className="top-menu__sub-icon"
                  ></i>
                </div>
              </a>
              <ul className="">
                <li>
                  <a href="top-menu-users-layout-1.html" className="top-menu">
                    <div className="top-menu__icon">
                      <i data-feather="zap"></i>
                    </div>
                    <div className="top-menu__title">Layout 1</div>
                  </a>
                </li>
                <li>
                  <a href="top-menu-users-layout-2.html" className="top-menu">
                    <div className="top-menu__icon">
                      <i data-feather="zap"></i>
                    </div>
                    <div className="top-menu__title">Layout 2</div>
                  </a>
                </li>
                <li>
                  <a href="top-menu-users-layout-3.html" className="top-menu">
                    <div className="top-menu__icon">
                      <i data-feather="zap"></i>
                    </div>
                    <div className="top-menu__title">Layout 3</div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title">
                  Profile
                  <i
                    data-feather="chevron-down"
                    className="top-menu__sub-icon"
                  ></i>
                </div>
              </a>
              <ul className="top-menu__sub-open">
                <li>
                  <a
                    href="top-menu-profile-overview-1.html"
                    className="top-menu"
                  >
                    <div className="top-menu__icon">
                      <i data-feather="zap"></i>
                    </div>
                    <div className="top-menu__title">Overview 1</div>
                  </a>
                </li>
                <li>
                  <a
                    href="top-menu-profile-overview-2.html"
                    className="top-menu"
                  >
                    <div className="top-menu__icon">
                      <i data-feather="zap"></i>
                    </div>
                    <div className="top-menu__title">Overview 2</div>
                  </a>
                </li>
                <li>
                  <a
                    href="top-menu-profile-overview-3.html"
                    className="top-menu"
                  >
                    <div className="top-menu__icon">
                      <i data-feather="zap"></i>
                    </div>
                    <div className="top-menu__title">Overview 3</div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="top-menu-inbox.html" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title"> Inbox </div>
              </a>
            </li>
            <li>
              <a href="top-menu-file-manager.html" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title"> File Manager </div>
              </a>
            </li>
            <li>
              <a href="top-menu-point-of-sale.html" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title"> Point of Sale </div>
              </a>
            </li>
            <li>
              <a href="top-menu-chat.html" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title"> Chat </div>
              </a>
            </li>
            <li>
              <a href="top-menu-post.html" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title"> Post </div>
              </a>
            </li>
            <li>
              <a href="/" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title">
                  Crud
                  <i
                    data-feather="chevron-down"
                    className="top-menu__sub-icon"
                  ></i>
                </div>
              </a>
              <ul className="">
                <li>
                  <a href="side-menu-crud-data-list.html" className="top-menu">
                    <div className="top-menu__icon">
                      <i data-feather="zap"></i>
                    </div>
                    <div className="top-menu__title">Data List</div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-crud-form.html" className="top-menu">
                    <div className="top-menu__icon">
                      <i data-feather="zap"></i>
                    </div>
                    <div className="top-menu__title">Form</div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="/" className="top-menu">
            <div className="top-menu__icon">
              <i data-feather="layout"></i>
            </div>
            <div className="top-menu__title">
              Pages
              <i data-feather="chevron-down" className="top-menu__sub-icon"></i>
            </div>
          </a>
          <ul className="">
            <li>
              <a href="/" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title">
                  Wizards
                  <i
                    data-feather="chevron-down"
                    className="top-menu__sub-icon"
                  ></i>
                </div>
              </a>
              <ul className="">
                <li>
                  <a href="top-menu-wizard-layout-1.html" className="top-menu">
                    <div className="top-menu__icon">
                      <i data-feather="zap"></i>
                    </div>
                    <div className="top-menu__title">Layout 1</div>
                  </a>
                </li>
                <li>
                  <a href="top-menu-wizard-layout-2.html" className="top-menu">
                    <div className="top-menu__icon">
                      <i data-feather="zap"></i>
                    </div>
                    <div className="top-menu__title">Layout 2</div>
                  </a>
                </li>
                <li>
                  <a href="top-menu-wizard-layout-3.html" className="top-menu">
                    <div className="top-menu__icon">
                      <i data-feather="zap"></i>
                    </div>
                    <div className="top-menu__title">Layout 3</div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title">
                  Blog
                  <i
                    data-feather="chevron-down"
                    className="top-menu__sub-icon"
                  ></i>
                </div>
              </a>
              <ul className="">
                <li>
                  <a href="top-menu-blog-layout-1.html" className="top-menu">
                    <div className="top-menu__icon">
                      <i data-feather="zap"></i>
                    </div>
                    <div className="top-menu__title">Layout 1</div>
                  </a>
                </li>
                <li>
                  <a href="top-menu-blog-layout-2.html" className="top-menu">
                    <div className="top-menu__icon">
                      <i data-feather="zap"></i>
                    </div>
                    <div className="top-menu__title">Layout 2</div>
                  </a>
                </li>
                <li>
                  <a href="top-menu-blog-layout-3.html" className="top-menu">
                    <div className="top-menu__icon">
                      <i data-feather="zap"></i>
                    </div>
                    <div className="top-menu__title">Layout 3</div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title">
                  Pricing
                  <i
                    data-feather="chevron-down"
                    className="top-menu__sub-icon"
                  ></i>
                </div>
              </a>
              <ul className="">
                <li>
                  <a href="top-menu-pricing-layout-1.html" className="top-menu">
                    <div className="top-menu__icon">
                      <i data-feather="zap"></i>
                    </div>
                    <div className="top-menu__title">Layout 1</div>
                  </a>
                </li>
                <li>
                  <a href="top-menu-pricing-layout-2.html" className="top-menu">
                    <div className="top-menu__icon">
                      <i data-feather="zap"></i>
                    </div>
                    <div className="top-menu__title">Layout 2</div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title">
                  Invoice
                  <i
                    data-feather="chevron-down"
                    className="top-menu__sub-icon"
                  ></i>
                </div>
              </a>
              <ul className="">
                <li>
                  <a href="top-menu-invoice-layout-1.html" className="top-menu">
                    <div className="top-menu__icon">
                      <i data-feather="zap"></i>
                    </div>
                    <div className="top-menu__title">Layout 1</div>
                  </a>
                </li>
                <li>
                  <a href="top-menu-invoice-layout-2.html" className="top-menu">
                    <div className="top-menu__icon">
                      <i data-feather="zap"></i>
                    </div>
                    <div className="top-menu__title">Layout 2</div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title">
                  FAQ
                  <i
                    data-feather="chevron-down"
                    className="top-menu__sub-icon"
                  ></i>
                </div>
              </a>
              <ul className="">
                <li>
                  <a href="top-menu-faq-layout-1.html" className="top-menu">
                    <div className="top-menu__icon">
                      <i data-feather="zap"></i>
                    </div>
                    <div className="top-menu__title">Layout 1</div>
                  </a>
                </li>
                <li>
                  <a href="top-menu-faq-layout-2.html" className="top-menu">
                    <div className="top-menu__icon">
                      <i data-feather="zap"></i>
                    </div>
                    <div className="top-menu__title">Layout 2</div>
                  </a>
                </li>
                <li>
                  <a href="top-menu-faq-layout-3.html" className="top-menu">
                    <div className="top-menu__icon">
                      <i data-feather="zap"></i>
                    </div>
                    <div className="top-menu__title">Layout 3</div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="login-login.html" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title"> Login </div>
              </a>
            </li>
            <li>
              <a href="login-register.html" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title"> Register </div>
              </a>
            </li>
            <li>
              <a href="main-error-page.html" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title"> Error Page </div>
              </a>
            </li>
            <li>
              <a href="top-menu-update-profile.html" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title"> Update profile </div>
              </a>
            </li>
            <li>
              <a href="top-menu-change-password.html" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title"> Change Password </div>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/" className="top-menu">
            <div className="top-menu__icon">
              <i data-feather="inbox"></i>
            </div>
            <div className="top-menu__title">
              Components
              <i data-feather="chevron-down" className="top-menu__sub-icon"></i>
            </div>
          </a>
          <ul className="">
            <li>
              <a href="/" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title">
                  Grid
                  <i
                    data-feather="chevron-down"
                    className="top-menu__sub-icon"
                  ></i>
                </div>
              </a>
              <ul className="">
                <li>
                  <a href="top-menu-regular-table.html" className="top-menu">
                    <div className="top-menu__icon">
                      <i data-feather="zap"></i>
                    </div>
                    <div className="top-menu__title">Regular Table</div>
                  </a>
                </li>
                <li>
                  <a href="top-menu-datatable.html" className="top-menu">
                    <div className="top-menu__icon">
                      <i data-feather="zap"></i>
                    </div>
                    <div className="top-menu__title">Datatable</div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="top-menu-accordion.html" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title"> Accordion </div>
              </a>
            </li>
            <li>
              <a href="top-menu-button.html" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title"> Button </div>
              </a>
            </li>
            <li>
              <a href="top-menu-modal.html" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title"> Modal </div>
              </a>
            </li>
            <li>
              <a href="top-menu-alert.html" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title"> Alert </div>
              </a>
            </li>
            <li>
              <a href="top-menu-progress-bar.html" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title"> Progress Bar </div>
              </a>
            </li>
            <li>
              <a href="top-menu-tooltip.html" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title"> Tooltip </div>
              </a>
            </li>
            <li>
              <a href="top-menu-dropdown.html" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title"> Dropdown </div>
              </a>
            </li>
            <li>
              <a href="top-menu-toast.html" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title"> Toast </div>
              </a>
            </li>
            <li>
              <a href="top-menu-typography.html" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title"> Typography </div>
              </a>
            </li>
            <li>
              <a href="top-menu-icon.html" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title"> Icon </div>
              </a>
            </li>
            <li>
              <a href="side-menu-loading-icon.html" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title"> Loading Icon </div>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/" className="top-menu">
            <div className="top-menu__icon">
              <i data-feather="sidebar"></i>
            </div>
            <div className="top-menu__title">
              Forms
              <i data-feather="chevron-down" className="top-menu__sub-icon"></i>
            </div>
          </a>
          <ul className="">
            <li>
              <a href="top-menu-regular-form.html" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title"> Regular Form </div>
              </a>
            </li>
            <li>
              <a href="top-menu-datepicker.html" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title"> Datepicker </div>
              </a>
            </li>
            <li>
              <a href="top-menu-select2.html" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title"> Select2 </div>
              </a>
            </li>
            <li>
              <a href="top-menu-file-upload.html" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title"> File Upload </div>
              </a>
            </li>
            <li>
              <a href="top-menu-wysiwyg-editor.html" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title"> Wysiwyg Editor </div>
              </a>
            </li>
            <li>
              <a href="top-menu-validation.html" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title"> Validation </div>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/" className="top-menu">
            <div className="top-menu__icon">
              <i data-feather="hard-drive"></i>
            </div>
            <div className="top-menu__title">
              Widgets
              <i data-feather="chevron-down" className="top-menu__sub-icon"></i>
            </div>
          </a>
          <ul className="">
            <li>
              <a href="top-menu-chart.html" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title"> Chart </div>
              </a>
            </li>
            <li>
              <a href="top-menu-slider.html" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title"> Slider </div>
              </a>
            </li>
            <li>
              <a href="top-menu-image-zoom.html" className="top-menu">
                <div className="top-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div className="top-menu__title"> Image Zoom </div>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export { TopMenu };
