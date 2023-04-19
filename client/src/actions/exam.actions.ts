/*
  Contains Redux action creators for actions related to exams,
  Many actions are asynchronous since many exam actions need to make http requests
  and wait for the response before completing.
*/
import { examConstants } from "../constants";
import { examService } from "../services";
import { alertActions } from ".";

import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { Exam, ExamAnswerSheet, ExamState } from "../types/ExamState";

export const examActions = {
  submit,
  getUserExams,
  createExam
};

function submit(examAnswerSheet: ExamAnswerSheet) {
  return (dispatch: ThunkDispatch<{}, void, AnyAction>) => {
    dispatch(request());

    examService.submitExam(examAnswerSheet).then(
      (exam) => {
        dispatch(success());
        dispatch(alertActions.success("Successfully submitted exam"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: examConstants.SUBMIT_REQUEST };
  }
  function success() {
    return { type: examConstants.SUBMIT_SUCCESS };
  }
  function failure(error: string) {
    return { type: examConstants.SUBMIT_FAILURE, error };
  }
}

function getUserExams() {
  return (dispatch: ThunkDispatch<{}, void, AnyAction>) => {
    dispatch(request());

    examService.getAllExams().then(
      (examList) => {
        dispatch(success(examList));
        dispatch(alertActions.success("Successfully fetched exams"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: examConstants.EXAM_SUMMARY_REQUEST };
  }
  function success(examList: any) {
    return { type: examConstants.EXAM_SUMMARY_SUCCESS, examList };
  }
  function failure(error: string) {
    return { type: examConstants.EXAM_SUMMARY_FAILURE, error };
  }
}

function createExam(exam: Exam) {
  return (dispatch: ThunkDispatch<{}, void, AnyAction>) => {
    dispatch(request());

    examService.createExam(exam).then(
      (exam) => {
        dispatch(success());
        dispatch(alertActions.success("Successfully created exam"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: examConstants.CREATE_EXAM_REQUEST };
  }
  function success() {
    return { type: examConstants.CREATE_EXAM_SUCCESS };
  }
  function failure(error: string) {
    return { type: examConstants.CREATE_EXAM_FAILURE, error };
  }
}
