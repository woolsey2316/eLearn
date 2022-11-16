/*
  Contains Redux action creators for actions related to users,
  Many actions are asynchronous since many user actions need to make http requests
  and wait for the response before completing.
*/
import { userConstants } from "../constants";
import { userService } from "../services";
import { alertActions } from ".";
import { history, getUser } from "../helpers";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { UserInfo } from "../types/UserForm";

function verifyEmail() {
  return (dispatch: ThunkDispatch<{}, void, AnyAction>) => {
    dispatch(request());

    userService.verifyEmail().then(
      (res) => {
        dispatch(success(res));
        dispatch(
          alertActions.success("Successfully found verification status")
        );
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: userConstants.VERIFICATION_REQUEST };
  }
  function success(verify: boolean) {
    return { type: userConstants.VERIFICATION_SUCCESS, verify };
  }
  function failure(error: string) {
    return { type: userConstants.VERIFICATION_FAILURE, error };
  }
}

function getCurrentUserInfo() {
  return (dispatch: ThunkDispatch<{}, void, AnyAction>) => {
    const user = localStorage.getItem("EMAIL");
    dispatch(request(user));

    userService.getUserDetails().then(
      (userInfo) => {
        dispatch(success(userInfo));
        dispatch(alertActions.success("Successfully fetched user info"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user: any) {
    return { type: userConstants.USER_INFO_REQUEST, user };
  }
  function success(user: any) {
    return { type: userConstants.USER_INFO_SUCCESS, user };
  }
  function failure(error: string) {
    return { type: userConstants.USER_INFO_FAILURE, error };
  }
}

function setUserDetails(userDTO: UserInfo) {
  return (dispatch: ThunkDispatch<{}, void, AnyAction>) => {
    userService.setUserDetails(userDTO).then(
      (user) => {
        // API request to retrieve all user info from server, eg. profile image
        dispatch(getCurrentUserInfo());
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
  function failure(error: string) {
    return { type: userConstants.USER_UPDATE_FAILURE, error };
  }
}

function getUserDetails() {
  return (dispatch: ThunkDispatch<{}, void, AnyAction>) => {
    dispatch(request());

    userService.getUserDetails().then(
      (user) => {
        dispatch(success(user));
      },
      (error) => {
        dispatch(failure());
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: userConstants.USER_DETAILS_REQUEST };
  }
  function success(user: any) {
    return { type: userConstants.USER_DETAILS_SUCCESS, user };
  }
  function failure() {
    return { type: userConstants.USER_DETAILS_FAILURE };
  }
}

function _delete(id: string) {
  return (dispatch: ThunkDispatch<{}, void, AnyAction>) => {
    dispatch(request(id));

    userService.delete(id).then(
      (user) => dispatch(success(id)),
      (error) => dispatch(failure(id, error.toString()))
    );
  };

  function request(id: string) {
    return { type: userConstants.DELETE_REQUEST, id };
  }
  function success(id: string) {
    return { type: userConstants.DELETE_SUCCESS, id };
  }
  function failure(id: string, error: string) {
    return { type: userConstants.DELETE_FAILURE, id, error };
  }
}

export const userActions = {
  verifyEmail,
  setUserDetails,
  getUserDetails,
  getCurrentUserInfo,
  // 'delete' is reserved
  delete: _delete,
};
