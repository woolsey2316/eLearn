import { examQuestionConstants } from "../constants";
import { AnyAction } from "redux";
interface ExamState {
  submittingExam: boolean;
  examQuestions: {
    quizQuestions: Array<Array<any>>;
  };
}
const defaultValues = { question: "", possibleAnswers: ["", "", "", ""] };
export function examQuestion(
  state: ExamState = {
    submittingExam: false,
    examQuestions: {
      quizQuestions: [[defaultValues], [defaultValues], [defaultValues]],
    },
  },
  action: AnyAction
): ExamState {
  switch (action.type) {
    case examQuestionConstants.EXAM_QUESTIONS_SUCCESS:
      return {
        ...state,
        submittingExam: false,
        examQuestions: action.questionList,
      };
    default:
      return state;
  }
}
