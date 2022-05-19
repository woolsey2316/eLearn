/* 
  Contains Redux action creators for actions related to exams,
  Many actions are asynchronous since many exam actions need to make http requests
  and wait for the response before completing.
*/
import { examResultConstants } from '../constants'
import { examService } from '../services'
import { alertActions } from '.'

export const examResultActions = {
  getAllExamResults,
  getUserExamResultsByCourse,
}

function getUserExamResultsByCourse(courseId) {
    return (dispatch) => {
      dispatch(request(courseId))
  
      examService.getAllUserExams(courseId).then(
        (examList) => {
          dispatch(success(examList))
          dispatch(alertActions.success('Successfully fetched exams'))
        },
        (error) => {
          dispatch(failure(error.toString()))
          dispatch(alertActions.error(error.toString()))
        }
      )
    }
  
    function request(examList) {
      return { type: examResultConstants.EXAM_INFO_REQUEST, examList }
    }
    function success(examList) {
      return { type: examResultConstants.EXAM_INFO_SUCCESS, examList }
    }
    function failure(error) {
      return { type: examResultConstants.EXAM_INFO_FAILURE, error }
    }
}

function getAllExamResults(courseId) {
    return (dispatch) => {
      dispatch(request(courseId))
  
      examService.getExamResultsByCourse(courseId).then(
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