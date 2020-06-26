import { alertConstants } from '../constants'

export function alert(state = {}, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message,
      }
    case alertConstants.ERROR:
      return {
        type: 'alert-danger',
        message: action.message,
      }
    case alertConstants.MODERATE:
      return {
        type: 'alert-moderate',
        message: action.message,
      }
    case alertConstants.CLEAR:
      return {}
    default:
      return state
  }
}
