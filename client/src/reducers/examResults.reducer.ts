import { examResultConstants } from "../constants";
import { AnyAction } from "redux";
import { ExamResult } from "../types/ExamState";
interface ExamState {
  examQuestions: any;
  submittingExam: boolean;
  examList: ExamResult[];
  examResults: any;
  weightedAverage: {userAverage: number; classRank: number};
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
        examList: action.examResultList.examResults,
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
        weightedAverage: action.payload,
      };
    default:
      return state;
  }
}
