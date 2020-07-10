import React, { useState } from 'react'

import { MobileMenu } from '../../components'
import { TopBar } from '../../components'

import { ExamCreationForm } from './ExamCreationForm'
import { PreviewQuestion } from './PreviewQuestion'

import { QuestionList } from './QuestionList'

function CreateExam(props) {
  const [questionList, updateList] = useState([])
  const [quiz, setQuestion] = useState({
    question: '',
    answer: '',
    option: ['','','',''],
    id: questionList.length
  })
  
  function removeItem(id) {
    updateList(questionList.filter((item, index) => index !== id))
  }
  
  function updateQuestionList(question) {
    updateList((questionList) => [...questionList, question])
    console.log('update called, new question: ')
    console.log({ question })

    console.log('update called, questionList: ')
    console.log({ questionList })
  }

  return (
    <div className="app">
      <MobileMenu />
      <div className="flex px-2 sm:px-10">
        {props.sideMenu}
        <div className="content">
          <TopBar />
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-6 xl:col-span-6">
              <div className="intro-y box lg:mt-5">
                <div className="flex items-center p-5 border-b border-gray-200">
                  <h2 className="font-medium text-base mr-auto">
                    exam name, course
                  </h2>
                </div>
                <div className="p-5">
                  <ExamCreationForm
                    setQuestion={setQuestion}
                    quiz={quiz}
                    updateQuestionList={updateQuestionList}
                    questionList={questionList}
                  />

                  <div className="flex justify-start mt-4">
                    <button
                      type="submit"
                      className="button bg-theme-1 text-white"
                    >
                      Submit Exam
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <PreviewQuestion quiz={quiz} />
            <QuestionList removeItem={removeItem} questionList={questionList} setQuestion={setQuestion} />
          </div>
        </div>
      </div>
    </div>
  )
}

export { CreateExam }
