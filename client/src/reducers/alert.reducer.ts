import { alertConstants } from "../constants";
import { AnyAction } from "redux";
import { AlertLevel } from "../enums/Alert";
interface Alert {
  type: AlertLevel;
  message: string;
}
export function alert(
  state: Partial<Alert> = {},
  action: AnyAction
): Partial<Alert> {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: AlertLevel.alert_success,
        message: action.message,
      };
    case alertConstants.ERROR:
      return {
        type: AlertLevel.alert_danger,
        message: action.message,
      };
    case alertConstants.MODERATE:
      return {
        type: AlertLevel.alert_moderate,
        message: action.message,
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state;
  }
}
