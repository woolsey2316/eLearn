/* 
  Contains Redux action creators for actions related to exams,
  Many actions are asyncronous since many exam actions need to make http requests
  and wait for the response before completing.
*/
import { examConstants } from '../constants'
import { examService } from '../services'
import { alertActions } from './'

export const examActions = {
  submit,
  getCurrentexamInfo,
  getAllExams,
}

function submit(exam) {
  return (dispatch) => {
    dispatch(request(exam))

    examService.addExam(exam).then(
      (exam) => {
        dispatch(success())
        dispatch(alertActions.success('Registration successful'))
      },
      (error) => {
        dispatch(failure(error.toString()))
        dispatch(alertActions.error(error.toString()))
      }
    )
  }

  function request(exam) {
    return { type: examConstants.SUBMIT_REQUEST, exam }
  }
  function success(exam) {
    return { type: examConstants.SUBMIT_SUCCESS, exam }
  }
  function failure(error) {
    return { type: examConstants.SUBMIT_FAILURE, error }
  }
}

function getAllExams(courseId) {
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
    return { type: examConstants.EXAM_INFO_REQUEST, examList }
  }
  function success(examList) {
    return { type: examConstants.EXAM_INFO_SUCCESS, examList }
  }
  function failure(error) {
    return { type: examConstants.EXAM_INFO_FAILURE, error }
  }
}

function getCurrentexamInfo(exam) {
  return (dispatch) => {
    dispatch(request(exam))

    examService.getCurrentexamInfo(exam).then(
      (examInfo) => {
        exam = { ...exam, examInfo }
        dispatch(success())
        dispatch(alertActions.success('Successfully fetched exam info'))
      },
      (error) => {
        dispatch(failure(error.toString()))
        dispatch(alertActions.error(error.toString()))
      }
    )
  }

  function request(exam) {
    return { type: examConstants.EXAM_INFO_REQUEST, exam }
  }
  function success(exam) {
    return { type: examConstants.EXAM_INFO_SUCCESS, exam }
  }
  function failure(error) {
    return { type: examConstants.EXAM_INFO_FAILURE, error }
  }
}
