import React from 'react'
import { Profile } from '../../components'
import * as Icon from 'react-feather'
import { QuestionButton } from './QuestionButton'

function RightPanel(props) {
  return (
    <div className="sm:w-25 sm:intro-y sm:box sm:bg-theme-1 sm:p-5 box sm:hidden md:block m-2">
      <Profile />
      <div className="border-t border-theme-3 mt-5 pt-5 text-white">
        <a href="" className="flex items-center px-3 py-2 truncate font-medium">
          <Icon.Check className="w-7 h-7 text-theme-9 mr-2" />
          Answered
        </a>
        <a
          href=""
          className="flex items-center px-3 py-2 mt-2 rounded-md truncate"
        >
          <Icon.UserCheck className="w-7 h-7 text-theme-9 mr-2" />
          Answered AND <br /> marked for review
        </a>
        <a
          href=""
          className="flex items-center px-3 py-2 mt-2 rounded-md truncate"
        >
          <Icon.AlertTriangle className="w-7 h-7 text-theme-12 mr-2" />
          Not Answered
        </a>
        <a
          href=""
          className="flex items-center px-3 py-2 mt-2 rounded-md truncate"
        >
          <Icon.Crosshair className="w-7 h-7 text-theme-11 mr-2" />
          Marked for Review, <br /> NOT answered
        </a>
        <a
          href=""
          className="flex items-center px-3 py-2 mt-2 rounded-md truncate"
        >
          <Icon.AlertCircle className="w-7 h-7 text-gray-600 mr-2" />
          Not Visited
        </a>
      </div>
      <div className="border-t border-theme-3 mt-5 pt-5 text-white">
        <button
          style={{ width: '100%' }}
          className="button flex items-center justify-center inline-block py-5 mb-2 bg-theme-2 text-gray-700"
        >
          <Icon.CheckCircle className="my-auto mx-2" />
          Submit Exam
        </button>
      </div>
    </div>
  )
}

export { RightPanel }
