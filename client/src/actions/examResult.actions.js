/* 
  Contains Redux action creators for actions related to exams,
  Many actions are asynchronous since many exam actions need to make http requests
  and wait for the response before completing.
*/
import { examResultConstants } from '../constants'
import { examResultsService } from '../services'
import { alertActions } from '.'

export const examResultActions = {
  getAllExamResults,
  getUserExamResultsByCourse,
  getExamResultsByCourse
}

function getUserExamResultsByCourse(courseId) {
  return (dispatch) => {
    dispatch(request(courseId))

    examResultsService.getAllUserExams(courseId).then(
      (examResultList) => {
        dispatch(success(examResultList))
        dispatch(alertActions.success('Successfully fetched exams'))
      },
      (error) => {
        dispatch(failure(error.toString()))
        dispatch(alertActions.error(error.toString()))
      }
    )
  }

  function request(examResultList) {
    return { type: examResultConstants.EXAM_INFO_REQUEST, examResultList }
  }
  function success(examResultList) {
    return { type: examResultConstants.EXAM_INFO_SUCCESS, examResultList }
  }
  function failure(error) {
    return { type: examResultConstants.EXAM_INFO_FAILURE, error }
  }
}

function getExamResultsByCourse(courseId) {
  return (dispatch) => {
    dispatch(request(courseId))

    examResultsService.getExamResultsByCourse(courseId).then(
      (examResultList) => {
        dispatch(success(examResultList))
        dispatch(alertActions.success('Successfully fetched exams'))
      },
      (error) => {
        dispatch(failure(error.toString()))
        dispatch(alertActions.error(error.toString()))
      }
    )
  }

  function request(examResultList) {
    return { type: examResultConstants.EXAM_AVERAGES_REQUEST, examResultList }
  }
  function success(examResultList) {
    return { type: examResultConstants.EXAM_AVERAGES_SUCCESS, examResultList }
  }
  function failure(error) {
    return { type: examResultConstants.EXAM_AVERAGES_FAILURE, error }
  }
}

function getAllExamResults(courseId) {
  return (dispatch) => {
    dispatch(request(courseId))

    examResultsService.getExamResultsByCourse(courseId).then(
      (examResults) => {
        dispatch(success(examResults))
        dispatch(alertActions.success('Successfully fetched exams'))
      },
      (error) => {
        dispatch(failure(error.toString()))
        dispatch(alertActions.error(error.toString()))
      }
    )
  }
  
  function request(examResults) {
    return { type: examResultConstants.EXAM_RESULT_REQUEST, examResults }
  }
  function success(examResults) {
    return { type: examResultConstants.EXAM_RESULT_SUCCESS, examResults }
  }
  function failure(error) {
    return { type: examResultConstants.EXAM_RESULT_FAILURE, error }
  }
}