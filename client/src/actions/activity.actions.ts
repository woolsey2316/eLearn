import { activityConstants } from "../constants";
import { activityService } from "../services";
import { alertActions } from ".";

import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
export const activityActions = {
  getActivityFeed,
};

function getActivityFeed() {
  return (dispatch: ThunkDispatch<{}, undefined, AnyAction>) => {
    dispatch(request());
    activityService.getActivityFeed().then(
      (activityList) => {
        console.log("user activities", activityList);
        dispatch(success(activityList));
        dispatch(alertActions.success("Successfully fetched activities"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: activityConstants.USER_ACTIVITY_INFO_REQUEST };
  }
  function success(activityList: Array<string>) {
    return { type: activityConstants.USER_ACTIVITY_INFO_SUCCESS, activityList };
  }
  function failure(error: boolean) {
    return { type: activityConstants.USER_ACTIVITY_INFO_FAILURE, error };
  }
}
