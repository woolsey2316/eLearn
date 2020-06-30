/* 
  Contains Redux action creators for actions related to courses,
  Many actions are asyncronous since many course actions need to make http requests
  and wait for the response before completing.
*/
import { courseConstants } from '../constants'
import { courseService } from '../services'
import { alertActions } from './'
import { redirect } from '../helpers'

export const courseActions = {
  register,
  getCurrentcourseInfo,
  getAllCourses,
  getAllUserCourses,
  delete: _delete,
}

function register(course) {
  return (dispatch) => {
    dispatch(request(course))

    courseService.addCourse(course).then(
      (course) => {
        dispatch(success())
        dispatch(alertActions.success('Registration successful'))
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
        dispatch(alertActions.success('Successfully fetched all courses on eLearn'))
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

function getAllUserCourses(course) {
  return (dispatch) => {
    dispatch(request(course))

    courseService.getAllUserCourses(course).then(
      (courseInfo) => {
        course = { ...course, courseInfo }
        dispatch(success(courseInfo))
        dispatch(alertActions.success('Successfully fetched courses'))
      },
      (error) => {
        dispatch(failure(error.toString()))
        dispatch(alertActions.error(error.toString()))
      }
    )
  }

  function request(courseList) {
    return { type: courseConstants.COURSE_INFO_REQUEST, courseList }
  }
  function success(courseList) {
    return { type: courseConstants.COURSE_INFO_SUCCESS, courseList }
  }
  function failure(error) {
    return { type: courseConstants.COURSE_INFO_FAILURE, error }
  }
}

function getCurrentcourseInfo(course) {
  return (dispatch) => {
    dispatch(request(course))

    courseService.getCurrentcourseInfo(course).then(
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
