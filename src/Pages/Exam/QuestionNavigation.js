import React from 'react'
import { QuestionButton } from './QuestionButton'

function QuestionNavigation(props) {
  return (
    <div class="intro-x box">
      <div class="p-5">
        <div class="flex flex-wrap text-center">
        {props.answerList.map((ans,index) => (
          <QuestionButton 
            answer={ans}
            onClickQuestion={props.onClickQuestion} 
            markedQuestions={props.markedQuestions} 
            questionId={index}
            currentQuestion={props.currentQuestion}
            />
        ) )}
        </div>
      </div>
    </div>
  )
}
export { QuestionNavigation }