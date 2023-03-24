import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { instructorConstants } from "../constants/instructor.constants";
import { Instructor } from "../types/Instructor";
import { alertActions } from "./alert.actions";
import { instructorService } from "../services/instructor.services";

export const instructorActions = {
  getInstructorById,
};

function getInstructorById(instructorId: string) {
  return (dispatch: ThunkDispatch<{}, undefined, AnyAction>) => {
    dispatch(request());
    instructorService.getInstructorById(instructorId).then(
      (instructor) => {
        dispatch(success(instructor));
        dispatch(alertActions.success("Successfully fetched activities"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: instructorConstants.INSTRUCTOR_INFO_REQUEST };
  }
  function success(instructor: Instructor) {
    return { type: instructorConstants.INSTRUCTOR_INFO_SUCCESS, payload: instructor };
  }
  function failure(error: boolean) {
    return { type: instructorConstants.INSTRUCTOR_INFO_FAILURE, error };
  }
}