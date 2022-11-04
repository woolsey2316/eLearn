import { userConstants } from "../constants";
import { AnyAction } from "redux";
/*
  Manages the registration section of the application. The state is limited to
  a registering flag which is only used for loading animation purposes.
*/
interface Registration {
  registering: boolean;
}
export function registration(
  state = {},
  action: AnyAction
): Partial<Registration> {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { registering: true };
    case userConstants.REGISTER_SUCCESS:
      return {};
    case userConstants.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
}
