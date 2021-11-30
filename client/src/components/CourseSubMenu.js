import React from 'react';
import * as Icon from 'react-feather'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faChalkboardTeacher,
//   faUniversity,
// } from '@fortawesome/free-solid-svg-icons'

const CourseSubmenu = () => {
  return ( 
    <ul className={ "side-menu__sub-open display-block"}>
    <li>
      <a href="/student/courses" 
      className={
          window.location.pathname === "/student/courses" 
            ? 'side-menu side-menu--active'
            : 'side-menu'
        }>
        <div className="side-menu__icon flex"> 
          {/* <FontAwesomeIcon
          className="mt-1 mr-5"
          icon={faUniversity}
          style={{ fontSize: '1.55em', marginRight: '10px' }}
          /> */}
          <img src="../../../vendor/fontawesome-free-5.15.3-desktop/svgs/solid/chalkboard-teacher" alt="my courses"/>
        </div>
        <div className="side-menu__title"> Courses </div>
      </a>
    </li>
    <li>
      <a href="/student/courses/CourseRegister" 
      className={
          window.location.pathname === "/student/courses/CourseRegister" 
            ? 'side-menu side-menu--active'
            : 'side-menu'
        }>
        <div className="side-menu__icon flex"> 
          {/* <FontAwesomeIcon
          className="mt-1"
          icon={faUniversity}
          style={{ fontSize: '1.55em', marginRight: '3px' }}
          /> */}
          <img src="../../../vendor/fontawesome-free-5.15.3-desktop/svgs/solid/university" alt="register for course"/>
          <Icon.Plus className= "h-3 w-3 -ml-1"/> </div>
        <div className="side-menu__title"> Course Register </div>
      </a>
    </li>
  </ul>
   );
}

export default CourseSubmenu