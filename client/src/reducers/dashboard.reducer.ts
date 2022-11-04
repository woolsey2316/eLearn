import { dashboardConstants } from "../constants";
import { AnyAction } from "redux";
/*
  Manages the dashboard data section of the application. Student has an overview of their overall performance.
*/
interface DashboardState {
  dashboard: any;
  total: {
    totalCompletionRate: number;
    activeTests: number;
    completedTests: number;
  };
  month: {
    multiChoiceQuestion: number;
    assignment: number;
    exam: number;
  };
}
const initialState: Partial<DashboardState> = {
  total: {
    totalCompletionRate: 0,
    activeTests: 0,
    completedTests: 0,
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
): Partial<DashboardState> {
  switch (action.type) {
    case dashboardConstants.DASHBOARD_INFO_SUCCESS:
      return { ...state, dashboard: action.dashboard || initialState };
    default:
      return state;
  }
}
