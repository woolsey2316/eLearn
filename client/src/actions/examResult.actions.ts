/*
  Contains Redux action creators for actions related to exams,
  Many actions are asynchronous since many exam actions need to make http requests
  and wait for the response before completing.
*/
import { examResultConstants } from "../constants";
import { examResultsService } from "../services";
import { alertActions } from ".";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { ExamAverage, ExamResultsList } from "../types/ExamState";

export const examResultActions = {
  getAllExamResults,
  getUserExamResultsByCourse,
  getExamResultsByCourse,
};

function getUserExamResultsByCourse(courseId: string) {
  return (dispatch: ThunkDispatch<{}, void, AnyAction>) => {
    dispatch(request());

    examResultsService.getAllUserExams(courseId).then(
      (examResultList) => {
        dispatch(success(examResultList));
        dispatch(alertActions.success("Successfully fetched exams"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: examResultConstants.EXAM_INFO_REQUEST };
  }
  function success(examResultList: ExamResultsList) {
    return { type: examResultConstants.EXAM_INFO_SUCCESS, examResultList };
  }
  function failure(error: string) {
    return { type: examResultConstants.EXAM_INFO_FAILURE, error };
  }
}

function getExamResultsByCourse(courseId: string) {
  return (dispatch: ThunkDispatch<{}, void, AnyAction>) => {
    dispatch(request());

    examResultsService.getExamResultsByCourse(courseId).then(
      (examResultList) => {
        dispatch(success(examResultList));
        dispatch(alertActions.success("Successfully fetched exams"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: examResultConstants.EXAM_AVERAGES_REQUEST };
  }
  function success(examResultList: ExamAverage) {
    return { type: examResultConstants.EXAM_AVERAGES_SUCCESS, examResultList };
  }
  function failure(error: string) {
    return { type: examResultConstants.EXAM_AVERAGES_FAILURE, error };
  }
}

function getAllExamResults(courseId: string) {
  return (dispatch: ThunkDispatch<{}, void, AnyAction>) => {
    dispatch(request());

    examResultsService.getExamResultsByCourse(courseId).then(
      (examResults) => {
        dispatch(success(examResults));
        dispatch(alertActions.success("Successfully fetched exams"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: examResultConstants.EXAM_RESULT_REQUEST };
  }
  function success(examResults: any) {
    return { type: examResultConstants.EXAM_RESULT_SUCCESS, examResults };
  }
  function failure(error: string) {
    return { type: examResultConstants.EXAM_RESULT_FAILURE, error };
  }
}
