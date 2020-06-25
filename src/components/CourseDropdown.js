import React, { useState } from 'react'
import * as Icon from 'react-feather'

function CourseDropdown(props) {
  const [show, showMore] = useState(false)
  function chooseCourse(name) {
    props.setCourse(name)
    showMore(!show)
  }
  return (
    <div className="dropdown relative">
      <button
        onClick={() => showMore(!show)}
        className="flex items-center justify-center dropdown-toggle button inline-block bg-theme-5 font-semibold text-theme-1 text-3xl"
      >
        {props.course} <Icon.ChevronDown />
      </button>
      {show && (
        <div className="dropdown-box mt-2 absolute top-30 right-0 -mr-12 sm:mr-0 z-20 show">
          <div className="border border-gray-500 dropdown-box__content box">
            <div className="p-4 border-b border-gray-200 font-medium">
              Select a Course
            </div>
            <div className="p-2">
              <button
                onClick={() => chooseCourse('Course #1')}
                className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"
              >
                <Icon.Box className="w-4 h-4 text-gray-700 mr-2" /> Course
                #1
              </button>
              <button
                onClick={() => chooseCourse('Course #2')}
                className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"
              >
                <Icon.Box className="w-4 h-4 text-gray-700 mr-2" /> Course #2
                <div className="text-xs text-white px-1 rounded-full bg-theme-6 ml-2">
                  2
                </div>
              </button>
              <button
                onClick={() => chooseCourse('Course #3')}
                className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"
              >
                <Icon.Box className="w-4 h-4 text-gray-700 mr-2" /> Course #3
                <div className="text-xs text-white px-1 rounded-full bg-theme-6 ml-2">
                  1
                </div>
              </button>
              <button
                onClick={() => chooseCourse('Course #4')}
                className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"
              >
                <Icon.Box className="w-4 h-4 text-gray-700 mr-2" /> Course
                #4
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export { CourseDropdown }
