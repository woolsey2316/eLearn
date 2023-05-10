import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setUser } from './user-slice';
import { EditableUserInfo, UserInfo } from '../../types/UserForm';

import { API_URL } from '../../services'
import { authHeader } from '../../helpers';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}users/`,
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getMe: builder.query<EditableUserInfo, null>({
      query() {
        return {
          url: `users/profile`,
          headers: authHeader(),
          credentials: 'include',
        };
      },
      transformResponse: (result: { data: { user: EditableUserInfo } }) =>
        result.data.user,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {}
      },
    }),
    setUserDetails: builder.mutation<void, UserInfo>({
      query(data) {
        return {
          method: 'POST',
          url: 'users/profile',
          headers: authHeader(),
          credentials: 'include',
          body: data
        };
      }
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