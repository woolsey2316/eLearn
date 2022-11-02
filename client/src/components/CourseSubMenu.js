import React from "react";
import * as Icon from "react-feather";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faChalkboardTeacher,
//   faUniversity,
// } from '@fortawesome/free-solid-svg-icons'

const CourseSubmenu = () => {
  return (
    <ul className={"side-menu__sub-open display-block"}>
      <li>
        <a
          href="/student/courses"
          className={
            window.location.pathname === "/student/courses"
              ? "side-menu side-menu--active"
              : "side-menu"
          }
        >
          <div className="side-menu__icon flex">
            {/* <FontAwesomeIcon
          className="mt-1 mr-5"
          icon={faUniversity}
          style={{ fontSize: '1.55em', marginRight: '10px' }}
          /> */}
            <img
              className="w-5 h-5"
              src="/assets/icons/chalkboard-teacher-solid.svg"
              alt="my courses"
            />
          </div>
          <div className="side-menu__title"> Courses </div>
        </a>
      </li>
      <li>
        <a
          href="/student/courses/CourseRegister"
          className={
            window.location.pathname === "/student/courses/CourseRegister"
              ? "side-menu side-menu--active"
              : "side-menu"
          }
        >
          <div className="side-menu__icon flex">
            {/* <FontAwesomeIcon
          className="mt-1"
          icon={faUniversity}
          style={{ fontSize: '1.55em', marginRight: '3px' }}
          /> */}
            <img
              className="w-5 h-5"
              src="/assets/icons/university-solid.svg"
              alt="register for course"
            />
            <Icon.Plus className="h-3 w-3 -ml-1" />{" "}
          </div>
          <div className="side-menu__title"> Course Register </div>
        </a>
      </li>
    </ul>
  );
};

export default CourseSubmenu;
