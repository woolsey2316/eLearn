import React from 'react'

function PreviewQuestion({ quiz }) {
  return (
    <div className="col-span-6 xl:col-span-6">
      <div className="intro-y box lg:mt-5">
        <div
          style={{ wordWrap: 'break-word' }}
          className="items-center"
        >
          <div className="text-base mr-auto font-medium p-5">Question Preview</div>
          <div className="border-b border-gray-200"></div>
          <div className="p-5">
            <div className="text-base mr-auto text-medium font-medium">
              {quiz.question}
              {!quiz.question && 
                <h2 className="text-gray-600">
                  Enter a Question in the form to the left
                </h2>
              }
            </div>
            <ul className="answerOptions">
              {quiz && quiz.option && quiz.option.map((elem, index) => (
                <li key={index} className="flex items-center m-2">
                  <h2 className="text-gray-700 font-medium text-md mr-1">{index + 1}.</h2>
                  <input
                    type="checkbox"
                    className="input border mr-2"
                    checked={elem === quiz.answer}
                    readOnly
                  />
                  <h2 className="text-gray-700">{elem}</h2>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export { PreviewQuestion }
