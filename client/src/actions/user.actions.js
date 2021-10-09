/* 
  Contains Redux action creators for actions related to users,
  Many actions are asynchronous since many user actions need to make http requests
  and wait for the response before completing.
*/
import axios from 'axios'
import { userConstants } from '../constants'
import { userService } from '../services'
import { alertActions } from '.'
import { history, redirect, getUser } from '../helpers'
import { GET_ERRORS } from "./types";

const registerUser = (userData) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
function login(email, password, rememberMe) {
  return (dispatch) => {
    dispatch(request({ email }))

    userService.login(email, password, rememberMe).then(
      (user) => {
        dispatch(success(user))
        // API request to retrieve all user info from server, eg. profile image
        dispatch(getCurrentUserInfo(user))
        // set authentication slice to true
        history.push('/student/dashboard')
        redirect('/student/dashboard')
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
  let user = getUser()
  if (user) {
    userService.logout(user)
  }
  return { type: userConstants.LOGOUT }
}


function getCurrentUserInfo(user) {
  return (dispatch) => {
    dispatch(request(user))

    userService.getCurrentUserInfo().then(
      (userInfo) => {
        dispatch(success())
        dispatch(alertActions.success('Successfully fetched user info'))
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

function verifyEmail(user) {
  return (dispatch) => {
    dispatch(request(user))

    userService.verifyEmail().then(
      (res) => {
        dispatch(success(res))
        dispatch(alertActions.success('Successfully found verification status'))
      },
      (error) => {
        dispatch(failure(error.toString()))
        dispatch(alertActions.error(error.toString()))
      }
    )
  }

  function request(verify) {
    return { type: userConstants.VERIFICATION_REQUEST, verify }
  }
  function success(verify) {
    return { type: userConstants.VERIFICATION_SUCCESS, verify }
  }
  function failure(error) {
    return { type: userConstants.VERIFICATION_FAILURE, error }
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

function setUserDetails(userDTO) {
  return (dispatch) => {
    dispatch(request({ userDTO }))

    userService.setUserDetails(userDTO).then(
      (user) => {
        dispatch(success(user))
        // API request to retrieve all user info from server, eg. profile image
        dispatch(getCurrentUserInfo(user))
      },
      (error) => {
        dispatch(failure(error.toString()))
        dispatch(alertActions.error(error.toString()))
      }
    )
  }

  function request(user) {
    return { type: userConstants.USER_UPDATE_REQUEST, user }
  }
  function success(user) {
    return { type: userConstants.USER_UPDATE_SUCCESS, user }
  }
  function failure(error) {
    return { type: userConstants.USER_UPDATE_FAILURE, error }
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

export const userActions = {
  registerUser,
  login,
  logout,
  resetPassword,
  verifyEmail,
  setUserDetails,
  //delete is reserved
  delete: _delete,
}