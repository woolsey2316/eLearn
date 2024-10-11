import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGenericResponse, LoginResponse } from '../../types/HTTP';

import { API_URL } from '../../services'
import { EditableUserInfo } from '../../types/UserForm';
import { authHeader, history, removeJWTToken, setEmail, setJWT, setRefreshTokenExpiryTime, setUserId } from '../../helpers';
import { alertActions } from '../../actions/alert.actions';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}auth/`,
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<{message: string}, EditableUserInfo>({
      query(data) {
        return {
          url: 'register',
          method: 'POST',
          body: data,
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        await queryFulfilled
        history.push("/login");
      },
    }),
    loginUser: builder.mutation<
      LoginResponse,
      { email: string, password: string, rememberMe: boolean }
    >({
      query(data) {
        return {
          url: 'login',
          method: 'POST',
          body: data,
          credentials: 'include',
        };
      },
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const {data} = await queryFulfilled;

          setUserId(data.id);
          setEmail(data.email);
          setJWT(data.token);
          setRefreshTokenExpiryTime(data.expires);

          dispatch(alertActions.success(data.message ?? "successfully logged in"));

          history.push("/student/dashboard");
        } catch (error: any) {
          removeJWTToken();
          dispatch(alertActions.error(error.error.data.message));
        }
      },
    }),
    verifyEmail: builder.mutation<
      IGenericResponse,
      { verificationCode: string }
    >({
      query({ verificationCode }) {
        return {
          url: `verifyemail/${verificationCode}`,
          method: 'GET',
        };
      },
    }),
    logoutUser: builder.mutation<void, void>({
      query() {
        return {
          method: 'POST',
          url: 'logout',
          credentials: 'include',
        };
      },
      async onQueryStarted(args, { queryFulfilled }) {
        try {
          await queryFulfilled;
          removeJWTToken();
        } catch (error) {
          console.log(error)
        }
      }
    }),
    changePassword: builder.mutation<void, void>({
      query() {
        return {
          url: 'oauth2/password/reset',
          headers: authHeader()
        }
      }
    }),
    sendOTP: builder.query<void, string>({
      query(email) {
        return {
          url: `sendotp?email=${email}`,
          headers: authHeader()
        }
      }
    }),
    updatePassword: builder.mutation<void,{oldPassword: string, password: string}>({
      query(data) {
        return {
          method: 'POST',
          url: 'password/update',
          headers: authHeader(),
          body: data
        }
      }
    }),
    resetPassword: builder.mutation<void,
      {
        email: string,
        OTP: string,
        password: string,
        confirmPassword: string
      }
    >({
      query(data) {
        return {
          url: 'password/reset',
          body: data
        }
      }
    })
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useVerifyEmailMutation,
  useSendOTPQuery,
  useUpdatePasswordMutation,
  useResetPasswordMutation,
} = authApi;
