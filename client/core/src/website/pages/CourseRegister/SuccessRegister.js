import React from 'react'
import * as Icon from 'react-feather'

function SuccessRegister({ course }) {
  return (
    <div className="text-center">
      <Icon.CheckCircle className="sm:w-10 sm:h-10 md:w-12 md:h-12 w-10 h-10 text-theme-9 mx-auto mt-3" />
      <div className="md:text-lg mt-5 text-gray-700">
        Successfully Registered for
      </div>
      <div className="md:text-lg mt-5 text-gray-700">{course.name}</div>
    </div>
  )
}
export { SuccessRegister }
