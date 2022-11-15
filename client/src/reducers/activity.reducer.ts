import { activityConstants } from "../constants";
import { AnyAction } from "redux";
import { ActivityProps } from "../types/Activity";

interface ActivityState {
  activityList?: ActivityProps[];
  loadingActivity: boolean;
}
const initialState: ActivityState = {
  activityList: [],
  loadingActivity: false,
};
export function activity(
  state = initialState,
  action: AnyAction
): ActivityState {
  switch (action.type) {
    case activityConstants.USER_ACTIVITY_INFO_REQUEST:
      return { ...state, loadingActivity: true };
    case activityConstants.USER_ACTIVITY_INFO_SUCCESS:
      return {
        ...state,
        activityList: action.activityList.activities,
        loadingActivity: false,
      };
    case activityConstants.USER_ACTIVITY_INFO_FAILURE:
      return { ...state, loadingActivity: false };
    default:
      return state;
  }
}
