import { AnyAction } from "redux";
import { instructorConstants } from "../constants/instructor.constants";
import { Instructor } from "../types/Instructor";
/*
  Manages the Instructor section of the application.
*/

type InstructorInfo = {
  instructor: Instructor
}
export function instructor(
  state = {},
  action: AnyAction
): Partial<InstructorInfo> {
  switch (action.type) {
    case instructorConstants.INSTRUCTOR_INFO_REQUEST:
      return {};
    case instructorConstants.INSTRUCTOR_INFO_SUCCESS:
      return { instructor: action.payload };
    case instructorConstants.INSTRUCTOR_INFO_FAILURE:
      return {};
    default:
      return state;
  }
}