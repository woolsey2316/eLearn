import { UserInfo } from "../types/UserForm";
import { userConstants } from "../constants";
import { AnyAction, Reducer } from "redux";
interface UsersState {
  items: Array<{ id: string; deleting: boolean; deleteError: boolean }>;
  user: Partial<UserInfo>;
  emailVerified: boolean;
}
const INITIAL_STATE: Partial<UsersState> = {};
export function users(
  state = INITIAL_STATE,
  action: AnyAction
): Partial<UsersState> {
  switch (action.type) {
    case userConstants.DELETE_REQUEST:
      return {
        ...state,
        items: state.items?.map((user) =>
          user.id === action.id ? { ...user, deleting: true } : user
        ),
      };
    case userConstants.DELETE_SUCCESS:
      return {
        ...state,
        items: state.items?.filter((user) => user.id !== action.id),
      };
    case userConstants.DELETE_FAILURE:
      return {
        ...state,
        items: state.items?.map((user) => {
          if (user.id === action.id) {
            const { deleting, ...userCopy } = user;
            return { ...userCopy, deleting: false, deleteError: action.error };
          }
          return user;
        }),
      };
    case userConstants.VERIFICATION_SUCCESS:
      return { ...state, emailVerified: action.verify };
    case userConstants.USER_DETAILS_SUCCESS:
      return { ...state, user: action.user };
    default:
      return state;
  }
}
