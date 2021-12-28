import React from 'react'
import { QuestionButton } from './QuestionButton'

function QuestionNavigation(props) {
  return (
    <div className="intro-x box">
      <div className="p-1">
        <div
          style={{ maxHeight: '27vh', height: '27vh' }}
          className="flex flex-wrap text-center overflow-y-auto content-start"
        >
          {props.answerList.map((ans, index) => (
            <QuestionButton
              answer={ans}
              onClickQuestion={props.onClickQuestion}
              markedQuestions={props.markedQuestions}
              questionId={index}
              currentQuestion={props.currentQuestion}
            />
          ))}
          
        </div>
      </div>
    </div>
  )
}
export { QuestionNavigation }
