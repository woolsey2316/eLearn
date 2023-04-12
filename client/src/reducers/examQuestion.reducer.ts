import { examQuestionConstants } from "../constants";
import { AnyAction } from "redux";
import { QuizQuestions } from "../types/ExamState";
interface ExamState {
  submittingExam: boolean;
  examInfo: {
    sections: string[];
    examName: string;
    duration: number;
    quizQuestions: QuizQuestions;
  };
}
const defaultValues = { question: "", possibleAnswers: ["", "", "", ""] };
export function examQuestion(
  state: ExamState = {
    submittingExam: false,
    examInfo: {
      sections: [],
      examName: "exam Name",
      duration: 60,
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
        examInfo: action.examInfo,
      };
    default:
      return state;
  }
}
