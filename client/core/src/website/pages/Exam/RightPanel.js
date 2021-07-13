import React, { useState } from 'react'
import * as Icon from 'react-feather'
import { QuestionNavigation } from './QuestionNavigation'
import Tooltip from '@reach/tooltip'
import { getUser } from '../../../helpers'
import { ExamInstructionModal } from '../../components/Exam'

function RightPanel({
  onClickQuestion,
  markedQuestions,
  currentQuestion,
  answerList,
  section,
  submitExam,
}) {
  const user = getUser()

  const [open, setOpen] = useState(false)
  function openModal() {
    console.log('open modal request')
    setOpen(true)
  }

  function closeModal() {
    setOpen(false)
  }
  return (
    <div
      style={{ width: '22em' }}
      className="sm:box sm:bg-theme-1 box sm:hidden md:block mt-2 mb-2 mr-2 px-3 flex flex-col justify-between"
    >
      <div className="ml-2 mt-5 flex justify-between">
        <div className="font-medium text-white">{user && user.name}</div>
        <Tooltip
          style={{
            background: 'hsla(0, 0%, 0%, 0.75)',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            padding: '0.5em 1em',
            zIndex: '10000',
          }}
          label="Examination Instructions"
        >
          <Icon.HelpCircle
            className="rounded-full mr-1 mb-2 bg-gray-200 text-gray-600 cursor-pointer"
            onClick={openModal}
          />
        </Tooltip>
        <ExamInstructionModal open={open} closeModal={closeModal} />
      </div>
      <div className=" border-t border-theme-3 mt-1 pt-2 text-white">
        <div className="flex items-center py-1 truncate font-medium">
          <Icon.Check className="w-7 h-8 text-theme-9 ml-3 mr-1" />
          <h2 className="font-medium mt-1">Answered</h2>
        </div>
        <div className="flex items-center py-1 mt-0 rounded-md truncate">
          <Icon.UserCheck className="w-7 h-7 text-theme-9 ml-3 mr-1" />
          <h2 className="font-medium mt-1">Answered AND marked for review</h2>
        </div>

        <div className="flex items-center py-1 mt-1 rounded-md truncate">
          <Icon.AlertTriangle className="w-7 h-7 text-theme-12 mx-2" />
          <h2 className="font-medium mt-1">Not Answered</h2>
        </div>
        <div className="flex items-center py-1 mt-1 rounded-md truncate">
          <Icon.Crosshair className="w-7 h-7 text-theme-11 mx-2" />
          <h2 className="font-medium mt-1">Marked for Review, NOT answered</h2>
        </div>

        <div className="flex items-center py-1 mt-1 rounded-md truncate">
          <Icon.AlertCircle className="w-7 h-7 text-gray-600 mx-2" />
          <h2 className="font-medium mt-1">Not Visited</h2>
        </div>
      </div>
      <div className="border-t border-theme-3 mt-2 pt-4 pb-2 text-white flex-grow">
        <h2 className="intro-x text-lg px-2">{section}</h2>
        <h2 className="intro-x py-1">choose a question</h2>
        <QuestionNavigation
          onClickQuestion={onClickQuestion}
          markedQuestions={markedQuestions}
          currentQuestion={currentQuestion}
          answerList={answerList}
        />
      </div>
      <div className="border-t border-theme-3 mt-2 text-white">
        <button
          onClick={submitExam}
          className="button flex items-center justify-center inline-block py-5 bg-theme-2 text-gray-700 my-3 mx-auto w-full"
        >
          <Icon.CheckCircle className="my-auto mx-2" />
          Submit Exam
        </button>
      </div>
    </div>
  )
}

export { RightPanel }
