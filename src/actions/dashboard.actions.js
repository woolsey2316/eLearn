import { dashboardConstants } from '../constants'

import { dashboardService } from '../services'

import { alertActions } from '../actions'

export const dashboardActions = {
  getUserDashboard,
}

function getUserDashboard(user) {
  return (dispatch) => {
    dashboardService.getUserDashboard().then(
      (dashboard) => {
        dispatch(success(dashboard))
        dispatch(alertActions.success('Successfully fetched Dashboard Info'))
      },
      (error) => {
        dispatch(failure(error.toString()))
        dispatch(alertActions.error(error.toString()))
      }
    )
  }
  function success(dashboard) {
    return { type: dashboardConstants.DASHBOARD_INFO_SUCCESS, dashboard }
  }
  function failure(error) {
    return { type: dashboardConstants.DASHBOARD_INFO_FAILURE, error }
  }
}
