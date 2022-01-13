/* 
  Contains Redux action creators for actions related to courses,
  Many actions are asynchronous since many course actions need to make http requests
  and wait for the response before completing.
*/
import { courseConstants } from '../constants'
import { courseService } from '../services'
import { alertActions } from '.'

export const courseActions = {
  register,
  getCurrentCourseInfo,
  getAllCourses,
  getAllUserCourses,
  resetPassword,
  delete: _delete,
}

function register(course) {
  return (dispatch) => {
    dispatch(request(course))

    courseService.register(course).then(
      (alreadyRegistered) => {
        console.log("alreadyRegistered", alreadyRegistered)
        dispatch(success())
        if (alreadyRegistered) {
          dispatch(failure('User is already registered'))
        } else {
          dispatch(alertActions.success('Registration successful'))
        }
        
      },
      (error) => {
        dispatch(failure(error.toString()))
        dispatch(alertActions.error(error.toString()))
      }
    )
  }

  function request(course) {
    return { type: courseConstants.REGISTER_REQUEST, course }
  }
  function success(course) {
    return { type: courseConstants.REGISTER_SUCCESS, course }
  }
  function failure(error) {
    return { type: courseConstants.REGISTER_FAILURE, error }
  }
}

function getAllCourses(page, size) {
  return (dispatch) => {
    courseService.getAllCourses(page, size).then(
      (courseInfo) => {
        dispatch(success(courseInfo))
        dispatch(
          alertActions.success('Successfully fetched all courses on eLearn')
        )
      },
      (error) => {
        dispatch(failure(error.toString()))
        dispatch(alertActions.error(error.toString()))
      }
    )
  }

  function success(courses) {
    return { type: courseConstants.COURSE_INFO_SUCCESS, courses }
  }
  function failure(error) {
    return { type: courseConstants.COURSE_INFO_FAILURE, error }
  }
}

function getAllUserCourses() {
  return (dispatch) => {
    dispatch(request())
    courseService.getAllUserCourses().then(
      (courseList) => {
        console.log("user courses", courseList)
        dispatch(success(courseList))
        dispatch(alertActions.success('Successfully fetched courses'))
      },
      (error) => {
        dispatch(failure(error.toString()))
        dispatch(alertActions.error(error.toString()))
      }
    )
  }

  function request(courseList) {
    return { type: courseConstants.USER_COURSE_INFO_REQUEST, courseList }
  }
  function success(courseList) {
    return { type: courseConstants.USER_COURSE_INFO_SUCCESS, courseList }
  }
  function failure(error) {
    return { type: courseConstants.USER_COURSE_INFO_FAILURE, error }
  }
}

function getCurrentCourseInfo(course) {
  return (dispatch) => {
    dispatch(request(course))

    courseService.getCurrentCourseInfo(course).then(
      (courseInfo) => {
        course = { ...course, courseInfo }
        dispatch(success())
        dispatch(alertActions.success('Successfully fetched course info'))
      },
      (error) => {
        dispatch(failure(error.toString()))
        dispatch(alertActions.error(error.toString()))
      }
    )
  }

  function request(course) {
    return { type: courseConstants.course_INFO_REQUEST, course }
  }
  function success(course) {
    return { type: courseConstants.course_INFO_SUCCESS, course }
  }
  function failure(error) {
    return { type: courseConstants.course_INFO_FAILURE, error }
  }
}

function resetPassword(course) {
  return (dispatch) => {
    dispatch(request(course))

    courseService.changePassword(course).then(
      (course) => {
        dispatch(success())
        dispatch(alertActions.success('password change successful'))
      },
      (error) => {
        dispatch(failure(error.toString()))
        dispatch(alertActions.error(error.toString()))
      }
    )
  }

  function request(course) {
    return { type: courseConstants.CHANGE_PASSWORD_REQUEST, course }
  }
  function success(course) {
    return { type: courseConstants.CHANGE_PASSWORD_SUCCESS, course }
  }
  function failure(error) {
    return { type: courseConstants.CHANGE_PASSWORD_FAILURE, error }
  }
}

function _delete(id) {
  return (dispatch) => {
    dispatch(request(id))

    courseService.delete(id).then(
      (course) => dispatch(success(id)),
      (error) => dispatch(failure(id, error.toString()))
    )
  }

  function request(id) {
    return { type: courseConstants.DELETE_REQUEST, id }
  }
  function success(id) {
    return { type: courseConstants.DELETE_SUCCESS, id }
  }
  function failure(id, error) {
    return { type: courseConstants.DELETE_FAILURE, id, error }
  }
}
