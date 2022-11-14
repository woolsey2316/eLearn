import { dashboardConstants } from "../constants";
import { AnyAction } from "redux";
import { DashboardState } from "../types/DashBoardState";
/*
  Manages the dashboard data section of the application. Student has an overview of their overall performance.
*/
const initialState: DashboardState = {
  dashboard: {
    active: 0,
    total: 0,
    completed: 0,
  },
  total: {
    totalCompletionRate: 0,
    activeTests: 0,
    completedTests: 0,
    multiChoiceQuestion: 0,
    exam: 0,
  },
  month: {
    multiChoiceQuestion: 0,
    assignment: 0,
    exam: 0,
  },
};
export function dashboard(
  state = initialState,
  action: AnyAction
): DashboardState {
  switch (action.type) {
    case dashboardConstants.DASHBOARD_INFO_SUCCESS:
      return { ...state, dashboard: action.dashboard || initialState };
    default:
      return state;
  }
}
