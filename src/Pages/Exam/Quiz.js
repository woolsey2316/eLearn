import React from 'react'
import PropTypes from 'prop-types'
import { Question } from './Question'
import { AnswerOption } from './AnswerOption'

function Quiz(props) {
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key}
        answerContent={key}
        questionId={props.questionId}
        getUserAnswer={props.getUserAnswer}
        selectedOption={props.selectedOption}
      />
    )
  }

  return (
    <div className="items-center p-5 border-b border-gray-200">
      <div className="text-base mr-auto">
        Question <span>{props.questionId + 1}</span> of
        <span>{' ' + props.questionTotal}</span>
      </div>
      <Question content={props.question} />
      <ul className="answerOptions">
        {props.answerOptions.map(renderAnswerOptions)}
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
