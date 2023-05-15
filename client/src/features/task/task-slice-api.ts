import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../../services'
import { authHeader } from '../../helpers'
import { Task } from '../../types/Task'

// Define a service using a base URL and expected endpoints
export const taskApi = createApi({
  reducerPath: 'taskApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getTasks: builder.query<Task[], void>({
      query: () => {
        return {
          url: 'tasks',
          headers: authHeader()
        }
      }
    }),
    createTask: builder.mutation<void, {title: string, completed: boolean, due: Date}>({
      query: (data) => {
        return {
          method: 'POST',
          url: 'tasks',
          headers: authHeader(),
          body: data
        }
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTasksQuery, useCreateTaskMutation  } = taskApi