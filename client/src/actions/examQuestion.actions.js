/*
  Contains Redux action creators for actions related to an exams question list,
  Many actions are asynchronous since many exam actions need to make http requests
  and wait for the response before completing.
*/
import { examQuestionConstants } from "../constants";
import { examQuestionService } from "../services";
import { alertActions } from ".";

export const examQuestionActions = {
  getUserExamQuestions,
};

function getUserExamQuestions(examId) {
  return (dispatch) => {
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

  function request(questionList) {
    return { type: examQuestionConstants.EXAM_QUESTIONS_REQUEST, questionList };
  }
  function success(questionList) {
    return { type: examQuestionConstants.EXAM_QUESTIONS_SUCCESS, questionList };
  }
  function failure(error) {
    return { type: examQuestionConstants.EXAM_QUESTIONS_FAILURE, error };
  }
}
