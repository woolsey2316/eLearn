import React from 'react'
import * as Icon from 'react-feather'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChalkboardTeacher, faUniversity } from '@fortawesome/free-solid-svg-icons'

import logo from '../assets/dist/images/logo.svg'

function SideMenu(props) {
  return (
    <nav className="side-nav">
      <a href="" className="intro-x flex items-center pl-5 pt-4">
        <img
          alt="Midone Tailwind HTML Admin Template"
          className="w-6"
          src={logo}
        />
        <span className="hidden xl:block text-white text-lg ml-3">
          e<span className="font-medium">Learn</span>
        </span>
      </a>
      <div className="side-nav__devider my-6"></div>
      <ul>
        <li>
          <a
            href="/student/dashboard"
            className={
              window.location.pathname === '/student/dashboard'
                ? 'side-menu side-menu--active'
                : 'side-menu'
            }
          >
            <div className="side-menu__icon">
              <Icon.BarChart className="side-menu__icon" />
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
              <Icon.User className="side-menu__icon" />
            </div>
            <div className="side-menu__title"> Profile</div>
          </a>
        </li>
        <li>
          <a
            href="/student/courses"
            className={
              window.location.pathname === '/student/courses'
                ? 'side-menu side-menu--active'
                : 'side-menu'
            }
          >
            <div className="side-menu__icon">
            <FontAwesomeIcon className="mt-1" icon={faUniversity} style={{fontSize:'1.55em',marginRight:'3px'}} />
            </div>
            <div className="side-menu__title"> Courses </div>
          </a>
        </li>
        <li>
          <a
            href="/student/grades"
            className={
              window.location.pathname === '/student/grades'
                ? 'side-menu side-menu--active'
                : 'side-menu'
            }
          >
            <div className="side-menu__icon">
              <Icon.Activity className="side-menu__icon" />
            </div>
            <div className="side-menu__title"> Grades </div>
          </a>
        </li>
        <li>
          <a
            href="/student/exam_list"
            className={
              window.location.pathname === '/student/exam_list'
                ? 'side-menu side-menu--active'
                : 'side-menu'
            }
          >
            <div className="side-menu__icon">
              <Icon.Layers className="side-menu__icon" />
            </div>
            <div className="side-menu__title"> Exam List </div>
          </a>
        </li>
        <li>
          <a
            href="/student/exams"
            className={
              window.location.pathname === '/student/exams'
                ? 'side-menu side-menu--active'
                : 'side-menu'
            }
          >
            <div className="side-menu__icon">
              <Icon.Edit className="side-menu__icon" />
            </div>
            <div className="side-menu__title"> Exams </div>
          </a>
        </li>
        <li>
          <button
            onClick={props.open}
            className={
              window.location.pathname === '/profile/changepassword'
                ? 'side-menu side-menu--active'
                : 'side-menu'
            }
          >
            <div className="side-menu__icon">
              <Icon.LogOut className="side-menu__icon" />
            </div>
            <div className="side-menu__title"> Logout </div>
          </button>
        </li>
      </ul>
      {props.permissions && (
        <nav className="side-nav">
          <div className="side-menu">
            Admin
          </div>
          <div className="side-nav__devider mb-6"></div>
          <ul>
            <li>
              <a
                href="/admin"
                className={
                  window.location.pathname === '/admin'
                    ? 'side-menu side-menu--active'
                    : 'side-menu'
                }
              >
                <div className="side-menu__icon">
                  <Icon.Home className="side-menu__icon" />
                </div>
                <div className="side-menu__title"> Admin Dashboard </div>
              </a>
            </li>
            <li>
              <a
                href="/admin/my_courses"
                className={
                  window.location.pathname.includes('/admin/my_courses')
                    ? 'side-menu side-menu--active'
                    : 'side-menu'
                }
              >
                <div className="side-menu__icon">
                  <FontAwesomeIcon className="mt-1 -ml-1" icon={faChalkboardTeacher} style={{fontSize:'1.5em'}} />
                </div>
                <div className="side-menu__title"> My Courses</div>
              </a>
            </li>
            <li>
              <a
                href="/admin/create_exam"
                className={
                  window.location.pathname.includes('/admin/dashboard')
                    ? 'side-menu side-menu--active'
                    : 'side-menu'
                }
              >
                <div className="side-menu__icon">
                  <Icon.Edit className="side-menu__icon" />
                </div>
                <div className="side-menu__title"> Create Exam</div>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </nav>
  )
}
export { SideMenu }
