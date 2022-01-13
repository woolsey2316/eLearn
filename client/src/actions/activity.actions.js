import { activityConstants } from '../constants'
import { activityService } from '../services'
import { alertActions } from '.'

export const activityActions = {
    getActivityFeed,
  }

function getActivityFeed() {
    return (dispatch) => {
      dispatch(request())
      activityService.getActivityFeed().then(
        (activityList) => {
          console.log("user activities", activityList)
          dispatch(success(activityList))
          dispatch(alertActions.success('Successfully fetched activities'))
        },
        (error) => {
          dispatch(failure(error.toString()))
          dispatch(alertActions.error(error.toString()))
        }
      )
    }
  
    function request(activityList) {
      return { type: activityConstants.USER_ACTIVITY_INFO_REQUEST, activityList }
    }
    function success(activityList) {
      return { type: activityConstants.USER_ACTIVITY_INFO_SUCCESS, activityList }
    }
    function failure(error) {
      return { type: activityConstants.USER_ACTIVITY_INFO_FAILURE, error }
    }
  }