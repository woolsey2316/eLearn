import { activityConstants } from "../constants";
import { activityService } from "../services";
import { alertActions } from ".";

import {
  Action,
  Dispatch,
} from 'redux'

interface ActivityListAction extends Action {
  activityList?: string[]
  error?: boolean;
}

export const activityActions = {
  getActivityFeed,
};

function getActivityFeed() {
  return (dispatch: Dispatch<ActivityListAction>) => {
    dispatch(request());
    activityService.getActivityFeed().then(
      (activityList) => {
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
