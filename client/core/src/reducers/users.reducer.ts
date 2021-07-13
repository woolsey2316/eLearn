import { userConstants } from '../constants'
import { AnyAction } from 'redux'
interface usersState {
  items: Array<{id: string, deleting: boolean}>
}
const INITIAL_STATE: Partial<usersState> = {}
export function users(state = INITIAL_STATE, action: AnyAction) {
  switch (action.type) {
    case userConstants.DELETE_REQUEST:
      return {
        ...state,
        items: state.items?.map((user) =>
          user.id === action.id ? { ...user, deleting: true } : user
        ),
      }
    case userConstants.DELETE_SUCCESS:
      return {
        items: state.items?.filter((user) => user.id !== action.id),
      }
    case userConstants.DELETE_FAILURE:
      return {
        ...state,
        items: state.items?.map((user) => {
          if (user.id === action.id) {
            const { deleting, ...userCopy } = user
            return { ...userCopy, deleteError: action.error }
          }
          return user
        }),
      }
    case userConstants.VERIFICATION_SUCCESS:
      return { ...state, emailVerified: action.verify }
    default:
      return state
  }
}
