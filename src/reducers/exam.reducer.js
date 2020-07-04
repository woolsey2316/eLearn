import { examConstants } from '../constants'
/*
  Manages the registration section of the application. The state is limited to
  a submitting flag which is only used for loading animation purposes.
*/

export function exams(state = {}, action) {
  switch (action.type) {
    case examConstants.SUBMIT_REQUEST:
      return { ...state, submittingExam: true }
    case examConstants.SUBMIT_SUCCESS:
      return { ...state, submittingExam: false }
    case examConstants.SUBMIT_FAILURE:
      return { ...state, submittingExam: false }
    case examConstants.EXAM_INFO_SUCCESS:
      return { ...state, submittingExam: false, examList: action.examList.data }
    default:
      return state
  }
}
