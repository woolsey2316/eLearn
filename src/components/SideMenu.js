import React from 'react'
import Modal from 'react-modal'
import * as Icon from 'react-feather'

import logo from '../assets/dist/images/logo.svg'

function SideMenu(props) {
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
            href="/student/"
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
            href="/student/profile"
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
        </li>
        <li>
          <a
            href="/student/grades"
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
            href="/student/exam_list"
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
            <div className="side-menu__title"> Exam List </div>
          </a>
        </li>
        <li>
          <a
            href="/student/exams"
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
        <li>
          <button
            onClick={props.open}
            href="/login"
            className={
              window.location.pathname === '/profile/changepassword'
                ? 'side-menu side-menu--active'
                : 'side-menu'
            }
          >
            <div className="side-menu__icon">
              {' '}
              <Icon.LogOut />{' '}
            </div>
            <div className="side-menu__title"> Logout </div>
          </button>
        </li>
      </ul>
    </nav>
  )
}
export { SideMenu }
