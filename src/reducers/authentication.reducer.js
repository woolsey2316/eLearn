import { userConstants } from '../constants'
/*
  this reducer manages the state related to login/ logout. After login,
  a user object and isLoggedIn flag (true) are both stored under 'authentication' 
  section of state. On logout/failure the authentication state is set to null. 
  There is also an intermediate logging in state between login request and success/failure
  made just for loading animations. 
*/
let user = JSON.parse(localStorage.getItem('user'))
const initialState = user ? { loggedIn: true, user } : {}

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return { ...initialState, loggingIn: true, user: action.user }
    case userConstants.LOGIN_SUCCESS:
      return {
        ...initialState,
        loggedIn: true,
        loggingIn: false,
        user: action.user,
      }
    case userConstants.LOGIN_FAILURE:
      return {
        loggedIn: false,
        loggingIn: false
      }
    case userConstants.LOGOUT:
      return {
        loggedIn: false,
        loggingIn: false
      }
    default:
      return state
  }
}
