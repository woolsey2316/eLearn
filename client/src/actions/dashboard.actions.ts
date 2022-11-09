import { dashboardConstants } from "../constants";

import { dashboardService } from "../services";

import { alertActions } from ".";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { DashboardState } from "../types/DashBoardState";

export const dashboardActions = {
  getUserDashboard,
};

function getUserDashboard() {
  return (dispatch: ThunkDispatch<{}, void, AnyAction>) => {
    dashboardService.getUserDashboard().then(
      (dashboard) => {
        dispatch(success(dashboard));
        dispatch(alertActions.success("Successfully fetched Dashboard Info"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
  function success(dashboard: DashboardState) {
    return { type: dashboardConstants.DASHBOARD_INFO_SUCCESS, dashboard };
  }
  function failure(error: string) {
    return { type: dashboardConstants.DASHBOARD_INFO_FAILURE, error };
  }
}
