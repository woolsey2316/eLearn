import React from 'react'
import * as Icon from 'react-feather'

function Result(props) {
  return (
    <div>
      <div className="p-5 text-center">
        <Icon.CheckCircle className="w-16 h-16 text-theme-9 mx-auto mt-3" />
        <div className="text-3xl mt-5">Good job!</div>
        <div className="text-gray-600 mt-2">
          You Completed a section! <br />
          Make sure all other sections are completed
        </div>
      </div>
      <div className="px-5 pb-8 text-center">
        <a
          href="/student/exams"
          type="button"
          data-dismiss="modal"
          className="button w-24 bg-theme-1 text-white"
        >
          Back To Questions
        </a>
      </div>
    </div>
  )
}

export default Result
