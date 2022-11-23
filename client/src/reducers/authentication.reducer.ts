import { userConstants } from "../constants";
import { AnyAction } from "redux";
/*
  this reducer manages the state related to login/ logout. After login,
  a user object and isLoggedIn flag (true) are both stored under the 'authentication'
  slice. On logout/failure the authentication state is set to null.
  There is also an intermediate logging in state between login request and success/failure
  made just for loading animations.
*/
const user = JSON.parse(localStorage.getItem("user") as string);
interface AuthState {
  loggedIn: boolean;
  loggingIn: boolean;
  user: any;
}
const initialState: AuthState = { loggedIn: false, loggingIn: false, user };

export function authentication(
  state = initialState,
  action: AnyAction
): AuthState {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return { ...initialState, loggingIn: true, user: action.user };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...initialState,
        loggedIn: true,
        loggingIn: false,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        loggedIn: false,
        loggingIn: false,
        user: "",
      };
    case userConstants.LOGOUT:
      return {
        loggedIn: false,
        loggingIn: false,
        user: "",
      };
    default:
      return state;
  }
}
