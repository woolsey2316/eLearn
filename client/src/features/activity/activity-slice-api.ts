import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { ActivityProps } from '../../types/Activity'
import { API_URL } from '../../services'
import { authHeader } from '../../helpers'

// Define a service using a base URL and expected endpoints
export const activityApi = createApi({
  reducerPath: 'activityApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getActivities: builder.query<ActivityProps[], void>({
      query: () => {
        return {
          url: 'activities',
          headers: authHeader()
        }
      }
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetActivitiesQuery } = activityApi