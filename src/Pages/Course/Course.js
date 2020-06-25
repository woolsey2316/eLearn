import React from 'react'
import * as Icon from 'react-feather'
function Course(props) {
  return (
    <tr>
      <td class="border-b">1</td>
      <td class="border-b">{props.name}</td>
      <td class="border-b">{props.code}</td>
      {props.active ? (
        <td class="border-b flex">
          <Icon.CheckSquare className="text-theme-9 mr-2 h-5 w-5" />
          <a className="text-theme-9">Active exams</a>
        </td>
      ) : (
        <td class="border-b flex">
          <Icon.CheckSquare className="text-theme-6 mr-2 h-5 w-5" />
          <a className="text-theme-6">No Active exams</a>
        </td>
      )}

      <td class="border-b">View details</td>
    </tr>
  )
}
export { Course }
