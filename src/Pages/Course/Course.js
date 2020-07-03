import React, { useEffect } from 'react'
import * as Icon from 'react-feather'

import { useDispatch, useSelector } from 'react-redux'

import { courseActions } from '../../actions'
import { alertActions } from '../../actions'
import { courseService } from '../../services'

function Course({course}) {
  return (
    <tr>
      <td className="border-b">{course.id}</td>
      <td className="border-b">{course.name}</td>
      <td className="border-b">{course.category}</td>
      {course.status ? (
        <td className="border-b ">
          <Icon.CheckSquare className="text-theme-9 mr-2 h-5 w-5 inline" />
          <a className="text-theme-9">Active exams</a>
        </td>
      ) : (
        <td className="border-b ">
          <Icon.CheckSquare className="text-theme-6 mr-2 h-5 w-5 inline" />
          <a className="text-theme-6">No Active exams</a>
        </td>
      )}

      <td className="border-b">
        <div className="px-3 py-2 bg-theme-14 text-theme-10 rounded font-medium inline">
          {course.expires && course.expires.split(" ")[0]}
        </div>
      </td>
    </tr>
  )
}
export { Course }
