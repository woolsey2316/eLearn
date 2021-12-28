import React from 'react'
import PropTypes from 'prop-types'
import { Question } from './Question'
import { AnswerOption } from './AnswerOption'

function Quiz(props) {

  console.log("answer options", props.answerOptions)

  return (
    <div
      style={{ height: 'calc(100vh - 272px)' }}
      className="items-center p-5 border-b border-gray-200 overflow-auto"
    >
      <Question content={props.question} />
      <ul className="answerOptions">
        {props.answerOptions.map((elem,index) => {
          console.log("elem :", elem)
        
          return <AnswerOption
          key={index}
          answerContent={elem}
          questionId={props.questionId}
          getUserAnswer={props.getUserAnswer}
          selectedOption={props.selectedOption}
        />})}
      </ul>
    </div>
  )
}

Quiz.propTypes = {
  selectedOption: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  getUserAnswer: PropTypes.func.isRequired,
}

export default Quiz
