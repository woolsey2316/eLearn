import React from 'react'

function TopMenu() {
  return (
    <nav class="top-nav">
      <ul>
        <li>
          <a href="top-menu-dashboard.html" class="top-menu">
            <div class="top-menu__icon">
              {' '}
              <i data-feather="home"></i>{' '}
            </div>
            <div class="top-menu__title"> Dashboard </div>
          </a>
        </li>
        <li>
          <a href="javascript:;" class="top-menu">
            <div class="top-menu__icon">
              {' '}
              <i data-feather="box"></i>{' '}
            </div>
            <div class="top-menu__title">
              {' '}
              Menu Layout{' '}
              <i
                data-feather="chevron-down"
                class="top-menu__sub-icon"
              ></i>{' '}
            </div>
          </a>
          <ul class="">
            <li>
              <a href="index.html" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title"> Side Menu </div>
              </a>
            </li>
            <li>
              <a href="simple-menu-dashboard.html" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title"> Simple Menu </div>
              </a>
            </li>
            <li>
              <a href="top-menu-dashboard.html" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title"> Top Menu </div>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="javascript:;.html" class="top-menu top-menu--active">
            <div class="top-menu__icon">
              {' '}
              <i data-feather="activity"></i>{' '}
            </div>
            <div class="top-menu__title">
              {' '}
              Apps{' '}
              <i
                data-feather="chevron-down"
                class="top-menu__sub-icon"
              ></i>{' '}
            </div>
          </a>
          <ul class="top-menu__sub-open">
            <li>
              <a href="javascript:;" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title">
                  {' '}
                  Users{' '}
                  <i
                    data-feather="chevron-down"
                    class="top-menu__sub-icon"
                  ></i>{' '}
                </div>
              </a>
              <ul class="">
                <li>
                  <a href="top-menu-users-layout-1.html" class="top-menu">
                    <div class="top-menu__icon">
                      {' '}
                      <i data-feather="zap"></i>{' '}
                    </div>
                    <div class="top-menu__title">Layout 1</div>
                  </a>
                </li>
                <li>
                  <a href="top-menu-users-layout-2.html" class="top-menu">
                    <div class="top-menu__icon">
                      {' '}
                      <i data-feather="zap"></i>{' '}
                    </div>
                    <div class="top-menu__title">Layout 2</div>
                  </a>
                </li>
                <li>
                  <a href="top-menu-users-layout-3.html" class="top-menu">
                    <div class="top-menu__icon">
                      {' '}
                      <i data-feather="zap"></i>{' '}
                    </div>
                    <div class="top-menu__title">Layout 3</div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="javascript:;" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title">
                  {' '}
                  Profile{' '}
                  <i
                    data-feather="chevron-down"
                    class="top-menu__sub-icon"
                  ></i>{' '}
                </div>
              </a>
              <ul class="top-menu__sub-open">
                <li>
                  <a href="top-menu-profile-overview-1.html" class="top-menu">
                    <div class="top-menu__icon">
                      {' '}
                      <i data-feather="zap"></i>{' '}
                    </div>
                    <div class="top-menu__title">Overview 1</div>
                  </a>
                </li>
                <li>
                  <a href="top-menu-profile-overview-2.html" class="top-menu">
                    <div class="top-menu__icon">
                      {' '}
                      <i data-feather="zap"></i>{' '}
                    </div>
                    <div class="top-menu__title">Overview 2</div>
                  </a>
                </li>
                <li>
                  <a href="top-menu-profile-overview-3.html" class="top-menu">
                    <div class="top-menu__icon">
                      {' '}
                      <i data-feather="zap"></i>{' '}
                    </div>
                    <div class="top-menu__title">Overview 3</div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="top-menu-inbox.html" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title"> Inbox </div>
              </a>
            </li>
            <li>
              <a href="top-menu-file-manager.html" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title"> File Manager </div>
              </a>
            </li>
            <li>
              <a href="top-menu-point-of-sale.html" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title"> Point of Sale </div>
              </a>
            </li>
            <li>
              <a href="top-menu-chat.html" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title"> Chat </div>
              </a>
            </li>
            <li>
              <a href="top-menu-post.html" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title"> Post </div>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title">
                  {' '}
                  Crud{' '}
                  <i
                    data-feather="chevron-down"
                    class="top-menu__sub-icon"
                  ></i>{' '}
                </div>
              </a>
              <ul class="">
                <li>
                  <a href="side-menu-crud-data-list.html" class="top-menu">
                    <div class="top-menu__icon">
                      {' '}
                      <i data-feather="zap"></i>{' '}
                    </div>
                    <div class="top-menu__title">Data List</div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-crud-form.html" class="top-menu">
                    <div class="top-menu__icon">
                      {' '}
                      <i data-feather="zap"></i>{' '}
                    </div>
                    <div class="top-menu__title">Form</div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="javascript:;" class="top-menu">
            <div class="top-menu__icon">
              {' '}
              <i data-feather="layout"></i>{' '}
            </div>
            <div class="top-menu__title">
              {' '}
              Pages{' '}
              <i
                data-feather="chevron-down"
                class="top-menu__sub-icon"
              ></i>{' '}
            </div>
          </a>
          <ul class="">
            <li>
              <a href="javascript:;" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title">
                  {' '}
                  Wizards{' '}
                  <i
                    data-feather="chevron-down"
                    class="top-menu__sub-icon"
                  ></i>{' '}
                </div>
              </a>
              <ul class="">
                <li>
                  <a href="top-menu-wizard-layout-1.html" class="top-menu">
                    <div class="top-menu__icon">
                      {' '}
                      <i data-feather="zap"></i>{' '}
                    </div>
                    <div class="top-menu__title">Layout 1</div>
                  </a>
                </li>
                <li>
                  <a href="top-menu-wizard-layout-2.html" class="top-menu">
                    <div class="top-menu__icon">
                      {' '}
                      <i data-feather="zap"></i>{' '}
                    </div>
                    <div class="top-menu__title">Layout 2</div>
                  </a>
                </li>
                <li>
                  <a href="top-menu-wizard-layout-3.html" class="top-menu">
                    <div class="top-menu__icon">
                      {' '}
                      <i data-feather="zap"></i>{' '}
                    </div>
                    <div class="top-menu__title">Layout 3</div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="javascript:;" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title">
                  {' '}
                  Blog{' '}
                  <i
                    data-feather="chevron-down"
                    class="top-menu__sub-icon"
                  ></i>{' '}
                </div>
              </a>
              <ul class="">
                <li>
                  <a href="top-menu-blog-layout-1.html" class="top-menu">
                    <div class="top-menu__icon">
                      {' '}
                      <i data-feather="zap"></i>{' '}
                    </div>
                    <div class="top-menu__title">Layout 1</div>
                  </a>
                </li>
                <li>
                  <a href="top-menu-blog-layout-2.html" class="top-menu">
                    <div class="top-menu__icon">
                      {' '}
                      <i data-feather="zap"></i>{' '}
                    </div>
                    <div class="top-menu__title">Layout 2</div>
                  </a>
                </li>
                <li>
                  <a href="top-menu-blog-layout-3.html" class="top-menu">
                    <div class="top-menu__icon">
                      {' '}
                      <i data-feather="zap"></i>{' '}
                    </div>
                    <div class="top-menu__title">Layout 3</div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="javascript:;" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title">
                  {' '}
                  Pricing{' '}
                  <i
                    data-feather="chevron-down"
                    class="top-menu__sub-icon"
                  ></i>{' '}
                </div>
              </a>
              <ul class="">
                <li>
                  <a href="top-menu-pricing-layout-1.html" class="top-menu">
                    <div class="top-menu__icon">
                      {' '}
                      <i data-feather="zap"></i>{' '}
                    </div>
                    <div class="top-menu__title">Layout 1</div>
                  </a>
                </li>
                <li>
                  <a href="top-menu-pricing-layout-2.html" class="top-menu">
                    <div class="top-menu__icon">
                      {' '}
                      <i data-feather="zap"></i>{' '}
                    </div>
                    <div class="top-menu__title">Layout 2</div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="javascript:;" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title">
                  {' '}
                  Invoice{' '}
                  <i
                    data-feather="chevron-down"
                    class="top-menu__sub-icon"
                  ></i>{' '}
                </div>
              </a>
              <ul class="">
                <li>
                  <a href="top-menu-invoice-layout-1.html" class="top-menu">
                    <div class="top-menu__icon">
                      {' '}
                      <i data-feather="zap"></i>{' '}
                    </div>
                    <div class="top-menu__title">Layout 1</div>
                  </a>
                </li>
                <li>
                  <a href="top-menu-invoice-layout-2.html" class="top-menu">
                    <div class="top-menu__icon">
                      {' '}
                      <i data-feather="zap"></i>{' '}
                    </div>
                    <div class="top-menu__title">Layout 2</div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="javascript:;" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title">
                  {' '}
                  FAQ{' '}
                  <i
                    data-feather="chevron-down"
                    class="top-menu__sub-icon"
                  ></i>{' '}
                </div>
              </a>
              <ul class="">
                <li>
                  <a href="top-menu-faq-layout-1.html" class="top-menu">
                    <div class="top-menu__icon">
                      {' '}
                      <i data-feather="zap"></i>{' '}
                    </div>
                    <div class="top-menu__title">Layout 1</div>
                  </a>
                </li>
                <li>
                  <a href="top-menu-faq-layout-2.html" class="top-menu">
                    <div class="top-menu__icon">
                      {' '}
                      <i data-feather="zap"></i>{' '}
                    </div>
                    <div class="top-menu__title">Layout 2</div>
                  </a>
                </li>
                <li>
                  <a href="top-menu-faq-layout-3.html" class="top-menu">
                    <div class="top-menu__icon">
                      {' '}
                      <i data-feather="zap"></i>{' '}
                    </div>
                    <div class="top-menu__title">Layout 3</div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="login-login.html" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title"> Login </div>
              </a>
            </li>
            <li>
              <a href="login-register.html" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title"> Register </div>
              </a>
            </li>
            <li>
              <a href="main-error-page.html" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title"> Error Page </div>
              </a>
            </li>
            <li>
              <a href="top-menu-update-profile.html" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title"> Update profile </div>
              </a>
            </li>
            <li>
              <a href="top-menu-change-password.html" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title"> Change Password </div>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="javascript:;" class="top-menu">
            <div class="top-menu__icon">
              {' '}
              <i data-feather="inbox"></i>{' '}
            </div>
            <div class="top-menu__title">
              {' '}
              Components{' '}
              <i
                data-feather="chevron-down"
                class="top-menu__sub-icon"
              ></i>{' '}
            </div>
          </a>
          <ul class="">
            <li>
              <a href="javascript:;" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title">
                  {' '}
                  Grid{' '}
                  <i
                    data-feather="chevron-down"
                    class="top-menu__sub-icon"
                  ></i>{' '}
                </div>
              </a>
              <ul class="">
                <li>
                  <a href="top-menu-regular-table.html" class="top-menu">
                    <div class="top-menu__icon">
                      {' '}
                      <i data-feather="zap"></i>{' '}
                    </div>
                    <div class="top-menu__title">Regular Table</div>
                  </a>
                </li>
                <li>
                  <a href="top-menu-datatable.html" class="top-menu">
                    <div class="top-menu__icon">
                      {' '}
                      <i data-feather="zap"></i>{' '}
                    </div>
                    <div class="top-menu__title">Datatable</div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="top-menu-accordion.html" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title"> Accordion </div>
              </a>
            </li>
            <li>
              <a href="top-menu-button.html" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title"> Button </div>
              </a>
            </li>
            <li>
              <a href="top-menu-modal.html" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title"> Modal </div>
              </a>
            </li>
            <li>
              <a href="top-menu-alert.html" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title"> Alert </div>
              </a>
            </li>
            <li>
              <a href="top-menu-progress-bar.html" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title"> Progress Bar </div>
              </a>
            </li>
            <li>
              <a href="top-menu-tooltip.html" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title"> Tooltip </div>
              </a>
            </li>
            <li>
              <a href="top-menu-dropdown.html" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title"> Dropdown </div>
              </a>
            </li>
            <li>
              <a href="top-menu-toast.html" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title"> Toast </div>
              </a>
            </li>
            <li>
              <a href="top-menu-typography.html" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title"> Typography </div>
              </a>
            </li>
            <li>
              <a href="top-menu-icon.html" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title"> Icon </div>
              </a>
            </li>
            <li>
              <a href="side-menu-loading-icon.html" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title"> Loading Icon </div>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="javascript:;" class="top-menu">
            <div class="top-menu__icon">
              {' '}
              <i data-feather="sidebar"></i>{' '}
            </div>
            <div class="top-menu__title">
              {' '}
              Forms{' '}
              <i
                data-feather="chevron-down"
                class="top-menu__sub-icon"
              ></i>{' '}
            </div>
          </a>
          <ul class="">
            <li>
              <a href="top-menu-regular-form.html" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title"> Regular Form </div>
              </a>
            </li>
            <li>
              <a href="top-menu-datepicker.html" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title"> Datepicker </div>
              </a>
            </li>
            <li>
              <a href="top-menu-select2.html" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title"> Select2 </div>
              </a>
            </li>
            <li>
              <a href="top-menu-file-upload.html" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title"> File Upload </div>
              </a>
            </li>
            <li>
              <a href="top-menu-wysiwyg-editor.html" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title"> Wysiwyg Editor </div>
              </a>
            </li>
            <li>
              <a href="top-menu-validation.html" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title"> Validation </div>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="javascript:;" class="top-menu">
            <div class="top-menu__icon">
              {' '}
              <i data-feather="hard-drive"></i>{' '}
            </div>
            <div class="top-menu__title">
              {' '}
              Widgets{' '}
              <i
                data-feather="chevron-down"
                class="top-menu__sub-icon"
              ></i>{' '}
            </div>
          </a>
          <ul class="">
            <li>
              <a href="top-menu-chart.html" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title"> Chart </div>
              </a>
            </li>
            <li>
              <a href="top-menu-slider.html" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title"> Slider </div>
              </a>
            </li>
            <li>
              <a href="top-menu-image-zoom.html" class="top-menu">
                <div class="top-menu__icon">
                  {' '}
                  <i data-feather="activity"></i>{' '}
                </div>
                <div class="top-menu__title"> Image Zoom </div>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export { TopMenu }
