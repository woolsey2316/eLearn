import React from 'react'
import * as Icon from 'react-feather'

function FailRegister({ course }) {
  console.log(course)
  return (
    <div className="text-center">
      <Icon.XCircle className="sm:w-10 sm:h-10 md:w-12 md:h-12 w-10 h-10 text-theme-6 mx-auto mt-3" />
      <div className="md:text-lg mt-5 text-gray-700">
        Already registered for course
      </div>
      <div className="md:text-lg mt-5 text-gray-700">{course.name}</div>
    </div>
  )
}
export { FailRegister }
