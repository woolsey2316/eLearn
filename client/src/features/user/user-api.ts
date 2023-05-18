import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setUser } from './user-slice';
import { UserInfo } from '../../types/UserForm';

import { API_URL } from '../../services'
import { authHeader } from '../../helpers';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}users/`,
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getMe: builder.query<UserInfo, void>({
      query: () => {
        return {
          url: 'profile',
          headers: authHeader(),
          credentials: 'include',
        };
      },
      providesTags: ['User']
    }),
    setUserDetails: builder.mutation<void, UserInfo>({
      query(data) {
        return {
          method: 'PUT',
          url: 'profile',
          headers: authHeader(),
          credentials: 'include',
          body: data
        };
      },
      invalidatesTags: ['User']
    }),
    verifyEmail: builder.query<void, void>({
      query: () => {
        return {
          url: 'auth/verifyEmail',
          headers: authHeader(),
        }
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMeQuery, useSetUserDetailsMutation, useVerifyEmailQuery } = userApi