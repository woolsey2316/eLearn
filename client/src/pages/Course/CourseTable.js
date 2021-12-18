import React from 'react'

import { Course } from './Course'

function CourseTable({ courses }) {
  console.log("courses table", courses)
  return (
    <table className="table">
      <thead>
        <tr className="bg-gray-700 text-white">
          <th className="whitespace-no-wrap">#</th>
          <th className="whitespace-no-wrap">Course Name</th>
          <th className="whitespace-no-wrap">Category</th>
          <th className="whitespace-no-wrap">Course Status</th>
          <th className="whitespace-no-wrap">Course Expire Date</th>
        </tr>
      </thead>
      <tbody>
        {courses?.courseList?.courses?.courses.map(elem => <Course course={elem}></Course>)}
      </tbody>
    </table>
  )
}
export { CourseTable }
