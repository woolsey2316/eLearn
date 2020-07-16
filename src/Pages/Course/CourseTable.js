import React from 'react'

import { Course } from './Course'

function CourseTable({courses}) {
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
        {courses &&
          courses
            .reduce((unique, item) => {
              // unique course values, current issue with subscribing to the same course 
              // multiple times
              return unique
                .map((elem) => elem.coursesDTO.id)
                .includes(item.coursesDTO.id)
                ? unique
                : [...unique, item]
            }, [])
            .map((elem) => <Course course={elem.coursesDTO} />)}
      </tbody>
    </table>
  )
}
export { CourseTable }