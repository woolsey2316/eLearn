import React from "react";
import * as Icon from "react-feather";

import { CourseDTO } from "../../types/CourseState";

type FailRegisterProps = {
  course: Partial<CourseDTO>;
  msg: string;
};

function FailRegister({ course, msg }: FailRegisterProps) {
  return (
    <div className="text-center">
      <Icon.XCircle className="sm:w-10 sm:h-10 md:w-12 md:h-12 w-10 h-10 text-theme-6 mx-auto mt-3" />
      <div className="md:text-lg mt-5 text-gray-700">
        {msg}
      </div>
      <div className="md:text-lg mt-5 text-gray-700">{course.name}</div>
    </div>
  );
}
export { FailRegister };
