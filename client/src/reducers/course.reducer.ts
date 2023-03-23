import { courseConstants } from "../constants";
import { AnyAction } from "redux";

import { CourseState } from "../types/CourseState";
/*
  Student registers for a course and becomes enrolled.
  access to any exams belonging to said course.
*/

const initialState: Partial<CourseState> = { courseRegistering: false };
export function courses(
  state = initialState,
  action: AnyAction
): Partial<CourseState> {
  switch (action.type) {
    case courseConstants.REGISTER_REQUEST:
      return { ...state, courseRegistering: true };
    case courseConstants.REGISTER_SUCCESS:
      return { ...state, courseRegistering: false, registerOutcome: true };
    case courseConstants.REGISTER_FAILURE:
      return { ...state, courseRegistering: false, registerOutcome: false };
    case courseConstants.COURSE_INFO_SUCCESS:
      return {
        courseRegistering: false,
        courseList: action.courses.data || [],
      };
    case courseConstants.USER_COURSE_INFO_REQUEST:
      return {
        ...state,
        gettingUserCourses: true,
      };
    case courseConstants.USER_COURSE_INFO_SUCCESS:
      return {
        gettingUserCourses: false,
        userCourseList: action.courseList,
      };
    case courseConstants.USER_COURSE_INFO_FAILURE:
      return {
        ...state,
        gettingUserCourses: false,
      };
    default:
      return state;
  }
}
