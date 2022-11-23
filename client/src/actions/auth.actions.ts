/*
  Contains Redux action creators for actions related to users,
  Many actions are asynchronous since many user actions need to make http requests
  and wait for the response before completing.
*/
import { userConstants } from "../constants";
import { authService } from "../services";
import { alertActions, userActions } from ".";
import { history, getUser } from "../helpers";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { EditableUserInfo } from "../types/UserForm";

function registerUser(user: EditableUserInfo) {
  return (dispatch: ThunkDispatch<{}, void, AnyAction>) => {
    dispatch(request());
    authService.register(user).then(
      (user) => {
        dispatch(success(user));
        // API request to retrieve all user info from server, eg. profile image
        dispatch(userActions.getCurrentUserInfo());

        history.push("/login");
        window.location.reload();
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: userConstants.REGISTER_REQUEST };
  }
  function success(user: EditableUserInfo) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }
  function failure(error: string) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
}

function login(email: string, password: string, rememberMe: boolean) {
  return (dispatch: ThunkDispatch<{}, void, AnyAction>) => {
    dispatch(request());

    authService.login(email, password, rememberMe).then(
      (user) => {
        history.push("/student/dashboard");
        window.location.reload();
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: userConstants.LOGIN_REQUEST };
  }
  function success() {
    return { type: userConstants.LOGIN_SUCCESS };
  }
  function failure(error: string) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  const user = getUser();
  if (user) {
    authService.logout();
  }
  return { type: userConstants.LOGOUT };
}

function updatePassword(
  oldPassword: string,
  password: string,
  confirmPassword: string
) {
  return (dispatch: ThunkDispatch<{}, void, AnyAction>): void => {
    dispatch(request());
    authService.updatePassword(oldPassword, password, confirmPassword).then(
      (res) => {
        dispatch(success());
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
    return { type: userConstants.UPDATE_PASSWORD_REQUEST };
  }
  function success() {
    return { type: userConstants.UPDATE_PASSWORD_SUCCESS };
  }
  function failure(error: string) {
    return { type: userConstants.UPDATE_PASSWORD_FAILURE, error };
  }
}

// updates password when you forgot your old password
function resetPassword(
  email: string,
  OTP: string,
  password: string,
  confirmPassword: string
) {
  return (dispatch: ThunkDispatch<{}, void, AnyAction>): void => {
    dispatch(request());
    authService.resetPassword(email, OTP, password, confirmPassword).then(
      () => {
        dispatch(success());
        dispatch(alertActions.success("password change successful"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
  function request() {
    return { type: userConstants.CHANGE_PASSWORD_REQUEST };
  }
  function success() {
    return { type: userConstants.CHANGE_PASSWORD_SUCCESS };
  }
  function failure(error: string) {
    return { type: userConstants.CHANGE_PASSWORD_FAILURE, error };
  }
}

function sendOtp(email: string) {
  return (dispatch: ThunkDispatch<{}, void, AnyAction>): void => {
    dispatch(request());
    authService.sendOTP(email).then(
      () => {
        dispatch(success());
        dispatch(alertActions.success("one-time password sent"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: userConstants.SEND_OTP_REQUEST };
  }
  function success() {
    return { type: userConstants.SEND_OTP_SUCCESS };
  }
  function failure(error: string) {
    return { type: userConstants.SEND_OTP_FAILURE, error };
  }
}

export const authActions = {
  registerUser,
  login,
  logout,
  resetPassword,
  updatePassword,
  sendOtp,
};
