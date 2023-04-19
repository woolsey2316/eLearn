import React from 'react'
import * as Icon from 'react-feather'
import ReactHtmlParser from 'react-html-parser'
import { Quiz } from '../../types/ExamState';
interface Props {
  question: Quiz;
  setQuestion: React.Dispatch<React.SetStateAction<Quiz>>;
  questionList: Quiz[];
  removeItem: (qId: number) => void;
}
function QuestionCard({ question, setQuestion, questionList, removeItem }: Props) {
  function findQuestion() {
    setQuestion(questionList[question.number - 1])
    window.scroll(0, 600)
  }
  function deleteQuestion() {
    removeItem(question.number - 1)
    console.log('deleting question')
    console.log(question.number - 1)
    console.log('question List')
    console.log({ questionList })
  }
  return (
    <tr className="intro-x">
      <td>
        <h2
          className="font-medium overflow-hidden"
          style={{ maxWidth: '15em' }}
        >
          {ReactHtmlParser(question.question)}
        </h2>
        <div className="text-gray-600 text-xs whitespace-no-wrap">
          question {question.number}
        </div>
      </td>
      <td className="text-center">{question.answer}</td>
      <td className="table-report__action w-56">
        <div className="flex flex-col justify-center items-center">
          <button
            onClick={findQuestion}
            className="flex items-center mr-3 cursor-pointer"
          >
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
