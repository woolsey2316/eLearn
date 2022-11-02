import React, { useState } from "react";
import * as Icon from "react-feather";

import { SiteNameAndLogo } from "./SiteNameAndLogo";
import { SideMenuItem } from "./SideMenuItem";
import { AdminMenuContainer } from "./AdminMenuContainer";
import { StudentMenuContainer } from "./StudentMenuContainer";
import ProfileSubMenu from "./ProfileSubMenu";
import CourseSubMenu from "./CourseSubMenu";
import { SideMenuGroup } from "./SideMenuGroup";

function SideMenu(props) {
  const profileSubMenu = <ProfileSubMenu />;
  const courseSubMenu = <CourseSubMenu />;

  const [open, setOpen] = useState(false);

  return (
    <nav className="side-nav">
      <SiteNameAndLogo />
      <StudentMenuContainer>
        <SideMenuItem name="Dashboard" path="/student/dashboard">
          <Icon.BarChart className="side-menu__icon" />
        </SideMenuItem>
        <SideMenuGroup
          name="Profile"
          path="/student/profile"
          subMenu={profileSubMenu}
          open={open}
          setOpen={setOpen}
        >
          <Icon.User className="side-menu__icon mt-2" />
        </SideMenuGroup>
        <SideMenuGroup
          name="Courses"
          path="/student/courses"
          subMenu={courseSubMenu}
          open={open}
          setOpen={setOpen}
        >
          <img
            className="w-10 h-10"
            src="/assets/icons/university-solid.svg"
            alt="course icon"
          />
        </SideMenuGroup>
        <SideMenuItem name="Grades" path="/student/grades">
          <Icon.Activity className="side-menu__icon" />
        </SideMenuItem>
        <SideMenuItem name="Exam List" path="/student/exam_list">
          <Icon.Layers className="side-menu__icon" />
        </SideMenuItem>
        <SideMenuItem name="Logout" path={props.open}>
          <Icon.LogOut className="side-menu__icon" />
        </SideMenuItem>
      </StudentMenuContainer>
      {props.permissions && (
        <AdminMenuContainer>
          <SideMenuItem name="Admin Dashboard" path="/admin/dashboard">
            <Icon.Home className="side-menu__icon" />
          </SideMenuItem>

          <SideMenuItem name="My Courses" path="/admin/my_courses">
            {/* <FontAwesomeIcon
              className="mt-1 -ml-1"
              icon={faChalkboardTeacher}
              style={{ fontSize: '1.5em' }}
              /> */}
            <img
              className="w-6 h-6"
              src="/assets/icons/chalkboard-teacher-solid.svg"
              alt="courses icon"
            />
          </SideMenuItem>

          <SideMenuItem name="Create Exam" path="/admin/create_exam">
            <Icon.Edit className="side-menu__icon" />
          </SideMenuItem>
        </AdminMenuContainer>
      )}
    </nav>
  );
}
export { SideMenu };
