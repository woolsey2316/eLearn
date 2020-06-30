import { courseConstants } from '../constants'
/*
  Manages the registration section of the application. The state is limited to
  a registering flag which is only used for loading animation purposes.
*/

export function courseList(state = {}, action) {
  switch (action.type) {
    case courseConstants.REGISTER_REQUEST:
      return { ...state, courseRegistering: true }
    case courseConstants.REGISTER_SUCCESS:
      return { ...state, courseRegistering: false}
    case courseConstants.REGISTER_FAILURE:
      return { ...state}
    case courseConstants.COURSE_INFO_SUCCESS:
      return { courseRegistering: false, courseList: action.courses.data }
    default:
      return state
  }
}

