import React, { useState } from 'react'

import { MobileMenu } from '../../components'

import { ExamCreationForm } from './ExamCreationForm'
import { PreviewQuestion } from './PreviewQuestion'

function CreateExam(props) {
  const [quiz, setQuestion] = useState({
    question: '',
    answer: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
  })
  const [questionList, updateList] = useState([])

  function updateQuestionList(questionId) {
    updateList((questionList) => [...questionList, quiz])
    console.log('update called, quiz: ')
    console.log({ quiz })

    console.log('update called, questionList: ')
    console.log({ quiz })
  }

  return (
    <div className="app">
      <MobileMenu />
      <div className="flex px-2 sm:px-10">
        {props.sideMenu}
        <div className="content">
          <div className="intro-y box lg:mt-5">
            <div className="flex items-center p-5 border-b border-gray-200">
              <h2 className="font-medium text-base mr-auto">
                exam name, course
              </h2>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 xl:col-span-6">
                  <ExamCreationForm
                    setQuestion={setQuestion}
                    quiz={quiz}
                    updateQuestionList={updateQuestionList}
                    questionList={questionList}
                  />
                </div>
                <div className="col-span-12 xl:col-span-6">
                  <PreviewQuestion quiz={quiz} />
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  className="button bg-theme-1 text-white ml-auto"
                >
                  Submit Exam
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { CreateExam }
