import { alertConstants } from '../constants'
import { alertActions } from '../actions/alert.actions'

export function alert(state = {}, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: alertActions.message,
      }
    case alertConstants.ERROR:
      return {
        type: 'alert-danger',
        message: action.message,
      }
    case alertConstants.CLEAR:
      return {}
    default:
      return state
  }
}
