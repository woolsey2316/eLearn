import { examConstants } from '../constants'
import { AnyAction } from 'redux'
/*
  Manages the registration section of the application. The state is limited to
  a submitting flag which is only used for loading animation purposes.
*/
interface ExamState {
  submittingExam: boolean,
  examList?: Array<any>
  examQuestions: {
    quizQuestions: Array<Array<any>>
  }
}
const defaultValues = {question: '', possibleAnswers: ['','','','',]}
export function exams(state: ExamState = {submittingExam: false, examList: [], examQuestions: {quizQuestions: [[defaultValues],[defaultValues],[defaultValues]]}}, action: AnyAction) {
  switch (action.type) {
    case examConstants.SUBMIT_REQUEST:
      return { ...state, submittingExam: true }
    case examConstants.SUBMIT_SUCCESS:
      return { ...state, submittingExam: false }
    case examConstants.SUBMIT_FAILURE:
      return { ...state, submittingExam: false }
    case examConstants.EXAM_LIST_INFO_SUCCESS:
      return { ...state, submittingExam: false, examList: action.examList?.data }
    case examConstants.EXAM_INFO_SUCCESS:
      return { ...state, submittingExam: false, examList: action.examList }
    case examConstants.EXAM_RESULT_SUCCESS:
      return { ...state, submittingExam: false, examResults: action.examResults }
    case examConstants.EXAM_SUMMARY_SUCCESS:
      return { ...state, submittingExam: false, examList: action.examList }
    case examConstants.EXAM_QUESTIONS_SUCCESS:
      return { ...state, submittingExam: false, examQuestions: action.questionList }
    default:
      return state
  }
}
