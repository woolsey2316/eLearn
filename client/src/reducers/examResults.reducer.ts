import { examResultConstants } from '../constants'
import { AnyAction } from 'redux'
interface ExamState {
    submittingExam: boolean,
    examList: any,
    examQuestions: any
}
export function examResult(state: ExamState = {submittingExam: false, examList: [], examQuestions: []}, action: AnyAction) {
    switch (action.type) {
    case examResultConstants.EXAM_INFO_SUCCESS:
      return { ...state, submittingExam: false, examList: action.examList }
    case examResultConstants.EXAM_RESULT_SUCCESS:
      return { ...state, submittingExam: false, examQuestions: action.questionList }
    default:
      return state
    }
}