import React from 'react'

import ReactHtmlParser from 'react-html-parser'
import { Quiz } from '../../types/ExamState';

interface Props {
  quiz: Quiz;
}
function PreviewQuestion({ quiz }:Props) {
  return (
    <div className="intro-y box lg:col-span-6 mt-5">
      <div style={{ wordWrap: 'break-word' }} className="items-center">
        <div className="text-base mr-auto font-medium p-5">
          Question Preview
        </div>
        <div className="border-b border-gray-200"></div>
        <div className="p-5">
          <div className="text-base mr-auto text-medium font-medium">
            {quiz && ReactHtmlParser(quiz.question)}
            {quiz && !quiz.question && (
              <h2 className="text-gray-700 mb-10">
                Fill out the form to see a preview of the question
              </h2>
            )}
          </div>
          <ul className="answerOptions">
            {quiz &&
              quiz.option &&
              quiz.option.map((elem, index) => (
                <li key={index} className="flex items-center m-2">
                  <h2 className="text-gray-700 font-medium text-md mr-1">
                    {index + 1}.
                  </h2>
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
  )
}
export { PreviewQuestion }
