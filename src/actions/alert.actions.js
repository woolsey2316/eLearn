/* 
  Contains Redux action creators for actions related to alerts,
  eg. dispatch(alertActions.success('Registration successful')) displays
  a success alert message with the text 'Registration successful'
*/
import { alertConstants } from '../constants'

/* 
  Action methods are wrapped in this alertActions object to simplify importing
  and enhance readability
*/
export const alertActions = {
  success,
  error,
  clear,
}

// implementation details of each action creator
function success(message) {
  return { type: alertConstants.SUCCESS, message }
}

function error(message) {
  return { type: alertConstants.ERROR, message }
}

function clear() {
  return { type: alertConstants.CLEAR }
}
