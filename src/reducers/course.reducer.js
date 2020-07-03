import { courseConstants } from '../constants'
/*
  Manages the registration section of the application. The state is limited to
  a registering flag which is only used for loading animation purposes.
*/

export function courses(state = {}, action) {
  switch (action.type) {
    case courseConstants.REGISTER_REQUEST:
      return { ...state, courseRegistering: true }
    case courseConstants.REGISTER_SUCCESS:
      return { ...state, courseRegistering: false }
    case courseConstants.REGISTER_FAILURE:
      return { ...state, courseRegistering: false }
    case courseConstants.COURSE_INFO_SUCCESS:
      return { courseRegistering: false, courseList: action.courses.data }
    case courseConstants.USER_COURSE_INFO_SUCCESS:
      return { courseRegistering: false, userCourseList: action.courseList.data.list }
    default:
      return state
  }
}
