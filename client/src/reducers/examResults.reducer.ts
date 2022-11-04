import { examResultConstants } from "../constants";
import { AnyAction } from "redux";
interface ExamState {
  examQuestions: any;
  submittingExam: boolean;
  examList: any;
  average: any;
}
export function examResults(
  state: Partial<ExamState> = {
    submittingExam: false,
    examList: [],
    examQuestions: [],
  },
  action: AnyAction
): Partial<ExamState> {
  switch (action.type) {
    case examResultConstants.EXAM_INFO_SUCCESS:
      return {
        ...state,
        submittingExam: false,
        examList: action.examResultList,
      };
    case examResultConstants.EXAM_RESULT_SUCCESS:
      return {
        ...state,
        submittingExam: false,
        examQuestions: action.questionList,
      };
    case examResultConstants.EXAM_AVERAGES_SUCCESS:
      return {
        ...state,
        submittingExam: false,
        average: action.examResultList,
      };
    default:
      return state;
  }
}
