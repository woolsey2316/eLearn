import { activityConstants } from '../constants'
import { AnyAction } from "redux";
interface Activity {
    instructor: String;
    description: String;
    date: Date;
    courseId: String
}
interface ActivityState {
    activityList?: Activity[];
  }
  const initialState: ActivityState = { activityList: [] };
  export function activity(state = initialState, action: AnyAction) {
    switch (action.type) {
      case activityConstants.USER_ACTIVITY_INFO_REQUEST:
        return { ...state };
      case activityConstants.USER_ACTIVITY_INFO_SUCCESS:
        return { ...state, activityList: action.activityList.activities };
      case activityConstants.USER_ACTIVITY_INFO_FAILURE:
        return { ...state };
      default:
        return state;
    }
  }