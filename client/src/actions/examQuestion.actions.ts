/*
  Contains Redux action creators for actions related to an exams question list,
  Many actions are asynchronous since many exam actions need to make http requests
  and wait for the response before completing.
*/
import { examQuestionConstants } from "../constants";
import { examQuestionService } from "../services";
import { alertActions } from ".";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { ExamQuestions } from "../types/ExamState";

export const examQuestionActions = {
  getUserExamQuestions,
};

function getUserExamQuestions(examId: string) {
  return (dispatch: ThunkDispatch<{}, void, AnyAction>) => {
    dispatch(request());

    examQuestionService.getExamQuestions(examId).then(
      (questionList) => {
        dispatch(success(questionList));
        console.log("api call", questionList);
        dispatch(alertActions.success("Successfully fetched exams"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: examQuestionConstants.EXAM_QUESTIONS_REQUEST };
  }
  function success(questionList: ExamQuestions) {
    return { type: examQuestionConstants.EXAM_QUESTIONS_SUCCESS, questionList };
  }
  function failure(error: string) {
    return { type: examQuestionConstants.EXAM_QUESTIONS_FAILURE, error };
  }
}
