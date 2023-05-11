import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../../services'
import { Course, CourseDTO, CourseType } from '../../types/CourseState'
import { authHeader } from '../../helpers'

// Define a service using a base URL and expected endpoints
export const courseApi = createApi({
  reducerPath: 'coursesApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    register: builder.mutation<boolean, CourseDTO>({
      query: (courseDTO) => {
        return {
          method: 'PUT',
          url: `courses/${courseDTO.id}`,
          headers: authHeader()
        }
      },
    }),
    getCourses: builder.query<Course[], {page: number, size: number}>({
      query: ({page, size}) => `courses?page=${page}&size=${size}`,
    }),
    getUserCourses: builder.query<CourseType[], void>({
      query: () => {
        return {
          url: 'courses/user',
          headers: authHeader()
        }
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useRegisterMutation, useGetCoursesQuery, useGetUserCoursesQuery } = courseApi