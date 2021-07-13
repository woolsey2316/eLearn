import { courseConstants } from '../constants'
import { AnyAction } from 'redux'
/*
  Student registers for a course and becomes enrolled. 
  access to any exams belonging to said course.
*/
interface courseState {
  courseRegistering: Boolean,
  userCourseList?: any,
  courseList?: any
}
const initialState: courseState = { courseRegistering: false }
export function courses(state = initialState, action: AnyAction) {
  switch (action.type) {
    case courseConstants.REGISTER_REQUEST:
      return { ...state, courseRegistering: true }
    case courseConstants.REGISTER_SUCCESS:
      return { ...state, courseRegistering: false }
    case courseConstants.REGISTER_FAILURE:
      return { ...state, courseRegistering: false }
    case courseConstants.COURSE_INFO_SUCCESS:
      return { courseRegistering: false, courseList: action.courses.data || [] }
    case courseConstants.USER_COURSE_INFO_SUCCESS:
      return {
        courseRegistering: false,
        userCourseList: action.courseList.data?.list,
      }
    default:
      return state
  }
}
