/* 
  Contains Redux action creators for actions related to users,
  Many actions are asyncronous since many user actions need to make http requests
  and wait for the response before completing.
*/
import { userConstants } from '../constants'
import { userService } from '../services'
import { alertActions } from './'
import { history } from '../helpers'
import { redirect } from '../helpers'

export const userActions = {
  login,
  logout,
  register,
  resetPassword,
  //delete is reserved
  delete: _delete,
}

function login(email, password) {
  return (dispatch) => {
    dispatch(request({ email }))

    userService.login(email, password).then(
      (user) => {
        dispatch(success(user))
        // API request to retrieve all user info from server, eg. profile image
        dispatch(getCurrentUserInfo(user))
        history.push('/student/');
        redirect('/student/')
      },
      (error) => {
        dispatch(failure(error.toString()))
        dispatch(alertActions.error(error.toString()))
      }
    )
  }

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user }
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user }
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error }
  }
}

function logout() {
  userService.logout()
  return { type: userConstants.LOGOUT }
}

function register(user) {
  return (dispatch) => {
    dispatch(request(user))

    userService.register(user).then(
      (user) => {
        dispatch(success())
        redirect('/login')
        dispatch(alertActions.success('Registration successful'))
      },
      (error) => {
        dispatch(failure(error.toString()))
        dispatch(alertActions.error(error.toString()))
      }
    )
  }

  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user }
  }
  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user }
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error }
  }
}

function getCurrentUserInfo(user) {
  return (dispatch) => {
    dispatch(request(user))

    userService.getCurrentUserInfo(user).then(
      (userInfo) => {
        user = { ...user, userInfo }
        dispatch(success())
        dispatch(alertActions.success('Successfully fetched User info'))
      },
      (error) => {
        dispatch(failure(error.toString()))
        dispatch(alertActions.error(error.toString()))
      }
    )
  }

  function request(user) {
    return { type: userConstants.USER_INFO_REQUEST, user }
  }
  function success(user) {
    return { type: userConstants.USER_INFO_SUCCESS, user }
  }
  function failure(error) {
    return { type: userConstants.USER_INFO_FAILURE, error }
  }
}

function resetPassword(user) {
  return (dispatch) => {
    dispatch(request(user))

    userService.changePassword(user).then(
      (user) => {
        dispatch(success())
        dispatch(alertActions.success('password change successful'))
      },
      (error) => {
        dispatch(failure(error.toString()))
        dispatch(alertActions.error(error.toString()))
      }
    )
  }

  function request(user) {
    return { type: userConstants.CHANGE_PASSWORD_REQUEST, user }
  }
  function success(user) {
    return { type: userConstants.CHANGE_PASSWORD_SUCCESS, user }
  }
  function failure(error) {
    return { type: userConstants.CHANGE_PASSWORD_FAILURE, error }
  }
}

function _delete(id) {
  return (dispatch) => {
    dispatch(request(id))

    userService.delete(id).then(
      (user) => dispatch(success(id)),
      (error) => dispatch(failure(id, error.toString()))
    )
  }

  function request(id) {
    return { type: userConstants.DELETE_REQUEST, id }
  }
  function success(id) {
    return { type: userConstants.DELETE_SUCCESS, id }
  }
  function failure(id, error) {
    return { type: userConstants.DELETE_FAILURE, id, error }
  }
}
