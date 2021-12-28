/* 
  Contains Redux action creators for actions related to exams,
  Many actions are asynchronous since many exam actions need to make http requests
  and wait for the response before completing.
*/
import { examConstants } from '../constants'
import { examService } from '../services'
import { alertActions } from '.'

export const examActions = {
  submit,
  getUserExams,
  getUserExamQuestions,
  getCurrentExamInfo,
  getAllExamResults,
  getUserExamResultsByCourse,
}

function submit(exam) {
  return (dispatch) => {
    dispatch(request(exam))

    examService.submitExam(exam).then(
      (exam) => {
        dispatch(success())
        dispatch(alertActions.success('Successfully submitted exam'))
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
    return { type: examConstants.EXAM_INFO_REQUEST, examList }
  }
  function success(examList) {
    return { type: examConstants.EXAM_INFO_SUCCESS, examList }
  }
  function failure(error) {
    return { type: examConstants.EXAM_INFO_FAILURE, error }
  }
}

function getUserExams() {
  return (dispatch) => {
    dispatch(request())

    examService.getAllExams().then(
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
    return { type: examConstants.EXAM_SUMMARY_REQUEST, examList }
  }
  function success(examList) {
    return { type: examConstants.EXAM_SUMMARY_SUCCESS, examList }
  }
  function failure(error) {
    return { type: examConstants.EXAM_SUMMARY_FAILURE, error }
  }
}

function getUserExamQuestions(examId) {
  return (dispatch) => {
    dispatch(request())

    examService.getExamQuestions(examId).then(
      (questionList) => {
        dispatch(success(questionList))
        console.log("api call", questionList)
        dispatch(alertActions.success('Successfully fetched exams'))
      },
      (error) => {
        dispatch(failure(error.toString()))
        dispatch(alertActions.error(error.toString()))
      }
    )
  }

  function request(questionList) {
    return { type: examConstants.EXAM_QUESTIONS_REQUEST, questionList }
  }
  function success(questionList) {
    return { type: examConstants.EXAM_QUESTIONS_SUCCESS, questionList }
  }
  function failure(error) {
    return { type: examConstants.EXAM_QUESTIONS_FAILURE, error }
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
    return { type: examConstants.EXAM_RESULT_REQUEST, examResults }
  }
  function success(examResults) {
    return { type: examConstants.EXAM_RESULT_SUCCESS, examResults }
  }
  function failure(error) {
    return { type: examConstants.EXAM_RESULT_FAILURE, error }
  }
}

function getCurrentExamInfo(exam) {
  return (dispatch) => {
    dispatch(request(exam))

    examService.getCurrentExamInfo(exam).then(
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
