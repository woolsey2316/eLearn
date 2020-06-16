/* 
  Contains Redux action creators for actions related to users,
  Many actions are asyncronous since many user actions need to make http requests
  and wait for the response before completing.
*/
import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './';
import { history } from '../helpers';

export const userActions = {
  login,
  logout,
  register,
  resetPassword,
  //delete is reserved
  delete: _delete
};

function login(email, password) {
  return dispatch => {
    dispatch(request({ email }))

    userService.login(email, password)
      .then(
        user => {
          dispatch(success(user))
          history.push('/')
        },
        error => {
          dispatch(failure(error.toString()))
          dispatch(alertActions.error(error.toString()))
        }
      )
  }

  function request(user) { return { type: userConstants.LOGIN_REQUEST, user }}
  function success(user) { return { type: userConstants.LOGIN_SUCCESS, user }}
  function failure(error) { return { type: userConstants.LOGIN_FAILURE, error }}
}

function logout() {
  userService.logout()
  return { type: userConstants.LOGOUT }
}

function register(user) {
  return dispatch => {
    dispatch(request(user))

    userService.register(user)
      .then(
        user => {
          dispatch(success())
          history.push('/login')
          dispatch(alertActions.success('Registration successful'))
        },
        error => {
          dispatch(failure(error.toString()))
          dispatch(alertActions.error(error.toString()))
        }
      )
  }

  function request(user) { return { type: userConstants.REGISTER_REQUEST, user}}
  function success(user) { return { type: userConstants.REGISTER_SUCCESS, user}}
  function failure(error) { return { type: userConstants.REGISTER_FAILURE, error}}
}

function resetPassword(user) {
  return dispatch => {
    dispatch(request(user))

    userService.register(user)
      .then(
        user => {
          dispatch(success())
          dispatch(alertActions.success('password change successful'))
        },
        error => {
          dispatch(failure(error.toString()))
          dispatch(alertActions.error(error.toString()))
        }
      )
  }

  function request(user) { return { type: userConstants.CHANGEPASSWORD_REQUEST, user}}
  function success(user) { return { type: userConstants.CHANGEPASSWORD_SUCCESS, user}}
  function failure(error) { return { type: userConstants.CHANGEPASSWORD_FAILURE, error}}
}

function _delete(id) {
  return dispatch => {
    dispatch(request(id))

    userService.delete(id)
      .then(
        user => dispatch(success(id)),
        error => dispatch(failure(id, error.toString()))
      )
  }

  function request(id) { return { type: userConstants.DELETE_REQUEST, id }}
  function success(id) { return { type: userConstants.DELETE_SUCCESS, id }}
  function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error}}
}
