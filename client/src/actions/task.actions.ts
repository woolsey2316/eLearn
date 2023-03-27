/*
  Contains Redux action creators for actions related to tasks,
*/
import { taskConstants } from "../constants";
import { taskService } from "../services";
import { alertActions } from ".";

import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { Task } from "../types/Task";

export const taskActions = {
  createTask,
};

function createTask(task: Task) {
  return (dispatch: ThunkDispatch<{}, void, AnyAction>) => {
    dispatch(request());

    taskService.createTask(task).then(
      (task: Task) => {
        dispatch(success(task));
        dispatch(alertActions.success("Successfully submitted task"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: taskConstants.CREATE_REQUEST };
  }
  function success(task: Task) {
    return { type: taskConstants.CREATE_SUCCESS, task };
  }
  function failure(error: string) {
    return { type: taskConstants.CREATE_FAILURE, error };
  }
}
