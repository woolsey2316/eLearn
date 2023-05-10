import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../../services'
import { Course, CourseDTO } from '../../types/CourseState'
import { authHeader } from '../../helpers'

// Define a service using a base URL and expected endpoints
export const courseApi = createApi({
  reducerPath: 'courses',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    register: builder.mutation<void, CourseDTO>({
      query: (courseDTO) => {
        return {
          method: 'PUT',
          url: `courses/${courseDTO.id}`,
          headers: authHeader()
        }
      },
    }),
    getCourses: builder.query<void, {page: number, size: number}>({
      query: ({page, size}) => `courses?page=${page}&size=${size}`,
    }),
    getUserCourses: builder.query<Course[], void>({
      query: () => `courses/user`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useRegisterMutation, useGetCoursesQuery, useGetUserCoursesQuery } = courseApi