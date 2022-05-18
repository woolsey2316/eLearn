import React from 'react'
import * as Icon from 'react-feather'

function Course({ course }) {
  return (
    <tr>
      <td className="border-b">{course.courseName}</td>
      <td className="border-b">{course.category}</td>
      {course.status ? (
        <td className="border-b ">
          <Icon.CheckSquare className="text-theme-9 mr-2 h-5 w-5 inline" />
          <h2 className="text-theme-9 inline">Active exams</h2>
        </td>
      ) : (
        <td className="border-b ">
          <Icon.CheckSquare className="text-theme-6 mr-2 h-5 w-5 inline" />
          <h2 className="text-theme-6 inline">No Active exams</h2>
        </td>
      )}
    </tr>
  )
}
export { Course }
