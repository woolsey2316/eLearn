import { dashboardConstants } from '../constants'
import { AnyAction } from 'redux'
/*
  Manages the dashboard data section of the application. Student has an overview of their overall performance.
*/
interface DashboardState {
  total: {  
    multiChoiceQuestion: number,
    assignment: number,
    exam: number,
  },
  month: {
    multiChoiceQuestion: number,
    assignment: number,
    exam: number,
  }
};
const initialState: Partial<DashboardState> = {
  total: {
    multiChoiceQuestion: 0,
    assignment: 0,
    exam: 0
  },
  month: {
    multiChoiceQuestion: 0,
    assignment: 0,
    exam: 0
  }
} 

export function dashboard(state = initialState, action: AnyAction) {
  switch (action.type) {
    case dashboardConstants.DASHBOARD_INFO_SUCCESS:
      return { ...state, dashboard: action.dashboard.dashboard || initialState }
    default:
      return state
  }
}
