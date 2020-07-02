import React from 'react'
import { Profile } from '../../components'
import * as Icon from 'react-feather'
import { QuestionButton } from './QuestionButton'
import { QuestionNavigation } from './QuestionNavigation'
import { getUser } from '../../helpers'

function RightPanel({
  onClickQuestion,
  markedQuestions,
  questionId,
  answerList,
  section,
}) {
  const user = getUser()
  return (
    <div
      style={{ width: '23em' }}
      className="sm:box sm:bg-theme-1 box sm:hidden md:block m-2 px-3 flex flex-col justify-between"
    >
      <div className="ml-2 mt-5 mr-auto">
        <div className="font-medium text-white">{user && user.name}</div>
        <div className="text-gray-600">Student</div>
      </div>
      <div className=" border-t border-theme-3 mt-3 pt-2 text-white">
        <div className="flex items-center py-1 truncate font-medium">
          <Icon.Check className="w-7 h-7 text-theme-9 mx-2" />
          <h2 className="font-medium">Answered</h2>
        </div>
        <div className="flex items-center py-1 mt-1 rounded-md truncate">
          <Icon.UserCheck className="w-7 h-7 text-theme-9 mx-2" />
          <h2 className="font-medium">Answered AND marked for review</h2>
        </div>

        <div className="flex items-center py-1 mt-1 rounded-md truncate">
          <Icon.AlertTriangle className="w-7 h-7 text-theme-12 mx-2" />
          <h2 className="font-medium">Not Answered</h2>
        </div>
        <div className="flex items-center py-1 mt-1 rounded-md truncate">
          <Icon.Crosshair className="w-7 h-7 text-theme-11 mx-2" />
          <h2 className="font-medium">Marked for Review, NOT answered</h2>
        </div>

        <div className="flex items-center py-1 mt-1 rounded-md truncate">
          <Icon.AlertCircle className="w-7 h-7 text-gray-600 mx-2" />
          <h2 className="font-medium">Not Visited</h2>
        </div>
      </div>
      <div className="border-t border-theme-3 mt-2 pt-4 text-white flex-grow">
        <h2 className="intro-x text-lg">{section}</h2>
        <h2 className="intro-x">choose a question</h2>
        <QuestionNavigation
          onClickQuestion={onClickQuestion}
          markedQuestions={markedQuestions}
          currentQuestion={questionId}
          answerList={answerList}
        />
      </div>
      <div className="border-t border-theme-3 mt-2 pt-5 text-white">
        <button
          style={{ width: '21em', position: 'absolute', bottom: '0' }}
          className="button flex items-center justify-center inline-block py-5 bg-theme-2 text-gray-700 my-2"
        >
          <Icon.CheckCircle className="my-auto mx-2" />
          Submit Exam
        </button>
      </div>
    </div>
  )
}

export { RightPanel }
