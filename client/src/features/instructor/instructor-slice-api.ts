import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../../services'
import { authHeader } from '../../helpers'
import { Instructor } from '../../types/Instructor'

// Define a service using a base URL and expected endpoints
export const instructorApi = createApi({
  reducerPath: 'instructorApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getInstructorById: builder.query<Instructor, string>({
      query: (instructorId) => {
        return {
          url: `instructors/${instructorId}`,
          headers: authHeader(),
        }
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetInstructorByIdQuery } = instructorApi