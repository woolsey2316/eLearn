import React from 'react'
import * as Icon from 'react-feather'

import img11 from '../../assets/dist/images/preview-11.jpg'
import img3 from '../../assets/dist/images/preview-3.jpg'

function QuestionCard({ question, setQuestion, questionList, removeItem }) {
  function findQuestion() {
    setQuestion(questionList[question.id])
  }
  function deleteQuestion() {
    removeItem(question.id)
    console.log("deletin question: " + question.id)
    console.log("question List")
    console.log({ questionList })
  }
  return (
    <tr className="intro-x">
      <td className="w-40">
        <div className="flex">
          <div className="w-10 h-10 image-fit zoom-in">
            <img
              alt="Midone Tailwind HTML Admin Template"
              className="tooltip rounded-full tooltipstered"
              src={img11}
            />
          </div>
          <div className="w-10 h-10 image-fit zoom-in -ml-5">
            <img
              alt="Midone Tailwind HTML Admin Template"
              className="tooltip rounded-full tooltipstered"
              src={img3}
            />
          </div>
          <div className="w-10 h-10 image-fit zoom-in -ml-5">
            <img
              alt="Midone Tailwind HTML Admin Template"
              className="tooltip rounded-full tooltipstered"
              src={img3}
            />
          </div>
        </div>
      </td>
      <td>
        <h2 className="font-medium overflow-hidden">{question.question}</h2>
        <div className="text-gray-600 text-xs whitespace-no-wrap">
          {question.answer}
        </div>
      </td>
      <td className="text-center">{question.id + 1}</td>
      <td className="w-40">
        <div className="flex items-center justify-center text-theme-9">
          <Icon.CheckSquare className="w-4 h-4 mr-1 text-theme-9" /> Active
        </div>
      </td>
      <td className="table-report__action w-56">
        <div className="flex justify-center items-center">
          <button onClick={findQuestion} className="flex items-center mr-3 cursor-pointer">
            <Icon.CheckSquare className="w-4 h-4 mr-1" /> Edit
          </button>
          <button
            className="flex items-center text-theme-6 cursor-pointer"
            data-toggle="modal"
            data-target="#delete-confirmation-modal"
          >
            <Icon.Trash2 onClick={deleteQuestion} className="w-4 h-4 mr-1" />
            Delete
          </button>
        </div>
      </td>
    </tr>
  )
}
export { QuestionCard }
