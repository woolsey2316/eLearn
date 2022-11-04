import { examConstants } from "../constants";
import { AnyAction } from "redux";
/*
  Manages the registration section of the application. The state is limited to
  a submitting flag which is only used for loading animation purposes.
*/
interface ExamState {
  submittingExam: boolean;
  examList?: Array<any>;
}

export function exams(
  state: ExamState = { submittingExam: false, examList: [] },
  action: AnyAction
): ExamState {
  switch (action.type) {
    case examConstants.SUBMIT_REQUEST:
      return { ...state, submittingExam: true };
    case examConstants.SUBMIT_SUCCESS:
      return { ...state, submittingExam: false };
    case examConstants.SUBMIT_FAILURE:
      return { ...state, submittingExam: false };
    case examConstants.EXAM_LIST_INFO_SUCCESS:
      return {
        ...state,
        submittingExam: false,
        examList: action.examList?.data,
      };
    case examConstants.EXAM_SUMMARY_SUCCESS:
      return { ...state, submittingExam: false, examList: action.examList };
    default:
      return state;
  }
}
