import React from "react";

import * as Icon from "react-feather";

import { CourseTable } from "./CourseTable";

import { useGetUserCoursesQuery } from "../../features/course/course-slice-api";
import PageWithSideMenu from "../PageWithSideMenu/PageWithSideMenu";

function Courses() {
  const {data: courses} = useGetUserCoursesQuery()

  return (
    <PageWithSideMenu>
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
    </PageWithSideMenu>
  );
}

export { Courses };
