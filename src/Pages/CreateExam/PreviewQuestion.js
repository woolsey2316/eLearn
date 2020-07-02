import React from 'react'

function PreviewQuestion({ quiz }) {
  const answerOptions = [quiz.option1, quiz.option2, quiz.option3, quiz.option4]
  return (
    <div className="items-center p-5 border-b border-gray-200">
      <div className="text-base mr-auto font-medium mb-5">Question Preview</div>
      <div className="text-base mr-auto text-medium">{quiz.questions}</div>
      <h2 className="mt-2">{quiz.question}</h2>
      <ul className="answerOptions">
        {answerOptions.map((elem) => (
          <li className="flex m-2">
            <input
              type="checkbox"
              className="input border mr-2"
              checked={elem === quiz.answer}
            />
            <h2 className="text-gray-700">{elem}</h2>
          </li>
        ))}
      </ul>
    </div>
  )
}
export { PreviewQuestion }
