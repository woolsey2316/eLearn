import React, { useState } from "react";
import * as Icon from "react-feather";
import { CourseType } from "../types/CourseState";
type Props = {
  course: string;
  setCourse: React.Dispatch<React.SetStateAction<string>>;
  courseList: CourseType[] | undefined;
};
function CourseDropdown(props: Props) {
  const [show, showMore] = useState(false);
  function chooseCourse(name: string) {
    props.setCourse(name);
    showMore(!show);
  }

  return (
    <div className="dropdown relative">
      <button
        onClick={() => showMore(!show)}
        className="flex items-center justify-center dropdown-toggle button bg-theme-5 font-semibold text-theme-1 text-3xl"
      >
        {props.course}<span className="inline-block mt-1"><Icon.ChevronDown /></span>
      </button>
      {show && (
        <div className="dropdown-box mt-2 absolute top-30 left-0 -mr-12 sm:mr-0 z-20 show">
          <div className="border border-gray-500 dropdown-box__content box">
            <div className="p-4 border-b border-gray-200 font-medium">
              Select a Course
            </div>
            <div className="p-2">
              {props.courseList?.map((course, index) => (
                <button
                  key={index}
                  onClick={() => chooseCourse(course.courseName)}
                  className="flex w-full p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"
                >
                  <span className="inline-block"><Icon.Box className="w-4 h-4 text-gray-700 mr-2" /></span>
                  {course.courseName}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export { CourseDropdown };
