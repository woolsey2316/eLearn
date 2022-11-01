import { examResultConstants } from '../constants'
import { AnyAction } from 'redux'
interface ExamState {
  submittingExam: boolean,
  examList: any,
}
export function examResults(state: ExamState = {submittingExam: false, examList: []}, action: AnyAction) {
  switch (action.type) {
    case examResultConstants.EXAM_INFO_SUCCESS:
      return { ...state, submittingExam: false, examList: action.examResultList }
    case examResultConstants.EXAM_RESULT_SUCCESS:
      return { ...state, submittingExam: false, examQuestions: action.questionList }
    case examResultConstants.EXAM_AVERAGES_SUCCESS:
      return { ...state, submittingExam: false, average: action.examResultList }
    default:
      return state
  }
}