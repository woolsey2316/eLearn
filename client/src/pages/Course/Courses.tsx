import React, { useEffect, useCallback } from "react";

import * as Icon from "react-feather";

import { MobileMenu } from "../../components";
import { TopBar } from "../../components";

import { courseActions } from "../../actions";

import { CourseTable } from "./CourseTable";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import { PageComponentProps } from "../../types/PageComponentProps";

function Courses(props: PageComponentProps) {
  const dispatch = useAppDispatch();
  const courses = useAppSelector((state) => state.courses.userCourseList);
  const page = 0;
  const size = 20;

  const fetchCourses = useCallback(() => {
    dispatch(courseActions.getAllUserCourses());
  }, [page, size, dispatch]);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  return (
    <div className="app">
      <MobileMenu />
      <div className="flex px-2 sm:px-10">
        {props.sideMenu}
        <div className="content">
          <TopBar open={props.openModal} />
          <div className="intro-y flex flex-col sm:flex-row items-center mt-8">
            <h2 className="text-lg font-medium mr-auto">Enrolled Courses</h2>
            <a
              href="/student/courses/CourseRegister"
              className="ml-auto flex items-center text-theme-1 font-medium"
            >
              <Icon.Plus className="w-5 h-5" />
              Enrol in new Course
            </a>
          </div>
          <div className="intro-y box overflow-hidden mt-5">
            <div className="box p-5">
              <div className="overflow-x-auto">
                <CourseTable courses={courses} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Courses };
