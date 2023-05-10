import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGenericResponse, LoginResponse } from '../../types/HTTP';
import { userApi } from '../user/user-api';

import { API_URL } from '../../services'
import { EditableUserInfo } from '../../types/UserForm';
import { authHeader, history, removeJWTToken, setEmail, setJWT, setRefreshTokenExpiryTime, setUserId } from '../../helpers';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}auth/`,
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<IGenericResponse, EditableUserInfo>({
      query(data) {
        return {
          url: 'register',
          method: 'POST',
          body: data,
        };
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
      async onQueryStarted(args, { queryFulfilled }) {
        try {
          const {data} = await queryFulfilled;
          if (data.success !== true) {
            removeJWTToken();
            return new Error("toast.user.general_error");
          }

          setUserId(data.id);
          setEmail(data.email);
          setJWT(data.token);
          setRefreshTokenExpiryTime(data.expires);

          history.push("/student/dashboard");
        } catch (error: any) {
          return error
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
    sendOTP: builder.query<void, void>({
      query() {
        return {
          url: 'auth/sendotp?email=${email}',
          headers: authHeader()
        }
      }
    }),
    updatePassword: builder.mutation<void,{oldPassword: string, password: string}>({
      query(data) {
        return {
          url: 'auth/password/update',
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
          url: 'auth/password/reset',
          body: data
        }
      }
    })
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation,
  useVerifyEmailMutation,
} = authApi;