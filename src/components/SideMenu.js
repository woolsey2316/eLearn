import React from 'react'
import * as Icon from 'react-feather'

import logo from '../assets/dist/images/logo.svg'

function SideMenu() {
  return (
    <nav style={{ paddingLeft: '2.3em' }} className="side-nav">
      <a href="" className="intro-x flex items-center pl-5 pt-4">
        <img
          alt="Midone Tailwind HTML Admin Template"
          className="w-6"
          src={logo}
        />
        <span className="hidden xl:block text-white text-lg ml-3">
          {' '}
          e<span className="font-medium">Learn</span>{' '}
        </span>
      </a>
      <div className="side-nav__devider my-6"></div>
      <ul>
        <li>
          <a
            href="/"
            className={
              window.location.pathname === '/'
                ? 'side-menu side-menu--active'
                : 'side-menu'
            }
          >
            <div className="side-menu__icon">
              {' '}
              <Icon.Home />{' '}
            </div>
            <div className="side-menu__title"> Dashboard </div>
          </a>
        </li>
        <li>
          <a
            href="/profile"
            className={
              window.location.pathname.includes('/profile')
                ? 'side-menu side-menu--active'
                : 'side-menu'
            }
          >
            <div className="side-menu__icon">
              {' '}
              <Icon.User />{' '}
            </div>
            <div className="side-menu__title"> Profile</div>
          </a>
          <ul className="">
            <li>
              <a
                href="/profile/preferences"
                className={
                  window.location.pathname === '/profile/preferences'
                    ? 'side-menu side-menu--active'
                    : 'side-menu'
                }
              >
                <div className="side-menu__icon">
                  {' '}
                  <Icon.Sliders />{' '}
                </div>
                <div className="side-menu__title"> Preferences </div>
              </a>
            </li>
            <li>
              <a
                href="/profile/changepassword"
                className={
                  window.location.pathname === '/profile/changepassword'
                    ? 'side-menu side-menu--active'
                    : 'side-menu'
                }
              >
                <div className="side-menu__icon">
                  {' '}
                  <Icon.Activity />{' '}
                </div>
                <div className="side-menu__title"> Change Password</div>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="/grades"
            className={
              window.location.pathname === '/grades'
                ? 'side-menu side-menu--active'
                : 'side-menu'
            }
          >
            <div className="side-menu__icon">
              {' '}
              <Icon.Inbox />{' '}
            </div>
            <div className="side-menu__title"> Grades </div>
          </a>
        </li>
        <li>
          <a
            href="/enrolled_courses"
            className={
              window.location.pathname === '/enrolled_courses'
                ? 'side-menu side-menu--active'
                : 'side-menu'
            }
          >
            <div className="side-menu__icon">
              {' '}
              <Icon.HardDrive />{' '}
            </div>
            <div className="side-menu__title"> Enrolled Courses </div>
          </a>
        </li>
        <li>
          <a
            href="/exams"
            className={
              window.location.pathname === '/exams'
                ? 'side-menu side-menu--active'
                : 'side-menu'
            }
          >
            <div className="side-menu__icon">
              {' '}
              <Icon.BookOpen />{' '}
            </div>
            <div className="side-menu__title"> Exams </div>
          </a>
        </li>
      </ul>
    </nav>
  )
}
export { SideMenu }
