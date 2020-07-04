import { dashboardConstants } from '../constants'
/*
  Manages the registration section of the application. The state is limited to
  a registering flag which is only used for loading animation purposes.
*/

export function dashboard(state = {}, action) {
  switch (action.type) {
    case dashboardConstants.DASHBOARD_INFO_SUCCESS:
      return { ...state, dashboard: action.dashboard.data.dashboard }
    default:
      return state
  }
}
