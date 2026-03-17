import { createApi } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../../services'
import { authHeader, createBaseQueryWithReauth } from '../../helpers'
import { DashboardState } from '../../types/DashBoardState'

// Define a service using a base URL and expected endpoints
export const dashboardApi = createApi({
  reducerPath: 'dashboard',
  baseQuery: createBaseQueryWithReauth(API_URL),
  endpoints: (builder) => ({
    getDashboard: builder.query<
      {total: number, active: number, completed: number},
      void
    >({
      query: () => {
        return {
          url: 'dashboard',
          headers: authHeader()
        }
      },
    }),
    getMonthlyDashboard: builder.query<
      {total: number, active: number, completed: number},
      void
    >({
      query: () => {
        return {
          url: 'dashboard/month',
          headers: authHeader()
        }
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetDashboardQuery, useGetMonthlyDashboardQuery } = dashboardApi