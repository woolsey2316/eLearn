/*
  Contains Redux action creators for actions related to courses,
  Many actions are asynchronous since many course actions need to make http requests
  and wait for the response before completing.
*/
import { courseConstants } from "../constants";
import { courseService } from "../services";
import { alertActions } from ".";

import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { CourseDTO, CourseType } from "../types/CourseState";
import { CourseAPI } from "../types/CourseApi";

export const courseActions = {
  register,
  getAllCourses,
  getAllUserCourses,
};

function register(course: CourseDTO) {
  return (dispatch: ThunkDispatch<{}, void, AnyAction>) => {
    dispatch(request(course));

    courseService.register(course).then(
      (alreadyRegistered) => {
        if (alreadyRegistered) {
          dispatch(failure("User is already registered"));
        } else {
          dispatch(success());
          dispatch(alertActions.success("Registration successful"));
        }
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(course: CourseDTO) {
    return { type: courseConstants.REGISTER_REQUEST, course };
  }
  function success() {
    return { type: courseConstants.REGISTER_SUCCESS };
  }
  function failure(error: string) {
    return { type: courseConstants.REGISTER_FAILURE, error };
  }
}

function getAllCourses(page: number, size: number) {
  return (dispatch: ThunkDispatch<{}, void, AnyAction>) => {
    courseService.getAllCourses(page, size).then(
      (courseInfo) => {
        dispatch(success(courseInfo));
        dispatch(
          alertActions.success("Successfully fetched all courses on eLearn")
        );
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function success(courses: CourseAPI) {
    return { type: courseConstants.COURSE_INFO_SUCCESS, courses };
  }
  function failure(error: string) {
    return { type: courseConstants.COURSE_INFO_FAILURE, error };
  }
}

function getAllUserCourses() {
  return (dispatch: ThunkDispatch<{}, void, AnyAction>) => {
    dispatch(request());
    courseService.getAllUserCourses().then(
      (courseList) => {
        dispatch(success(courseList));
        dispatch(alertActions.success("Successfully fetched courses"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: courseConstants.USER_COURSE_INFO_REQUEST };
  }
  function success(courseList: CourseType[] | undefined) {
    return { type: courseConstants.USER_COURSE_INFO_SUCCESS, courseList };
  }
  function failure(error: string) {
    return { type: courseConstants.USER_COURSE_INFO_FAILURE, error };
  }
}
