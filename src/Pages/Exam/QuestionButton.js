import React, {useState, useEffect} from 'react'

import { AnswerStatusIcon } from './AnswerStatusIcons'

function QuestionButton(props) {
  
  const [visited, setVisited] = useState(false)

  useEffect(() => {
    if (props.currentQuestion === props.questionId) {
      setVisited(true)
    }
  },[props.currentQuestion, props.questionId, visited]
  )

  return (
    <div 
      style={{cursor:"pointer"}}
      onClick={() => props.onClickQuestion(props.questionId)}
      className={"border text-gray-700 py-1 p-3 rounded relative font-medium mx-2"+(props.currentQuestion === props.questionId ? " border-gray-700 bg-gray-200 text-gray-600" :" border-gray-400")}>
      {props.questionId + 1}
      <AnswerStatusIcon
        answer={props.answer}
        marked={props.markedQuestions}
        questionId={props.questionId}
        visited={visited}
        />
    </div> 
  )
}

export { QuestionButton }