import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../../services'
import { authHeader } from '../../helpers'
import { Task } from '../../types/Task'

// Define a service using a base URL and expected endpoints
export const taskApi = createApi({
  reducerPath: 'taskApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getInstructorById: builder.mutation<void, {task: Task}>({
      query: (data) => {
        return {
          method: 'POST',
          url: `task`,
          headers: authHeader(),
          body: data.task
        }
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetInstructorByIdMutation } = taskApi