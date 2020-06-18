import React from 'react';
import PropTypes from 'prop-types';
import { Question } from './Question';
import { AnswerOption } from './AnswerOption';

function Quiz(props) {
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key}
        answerContent={key}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
        setUserAnswer={props.setUserAnswer}
      />
    );
  }

  return (
      <div className="items-center p-5 border-b border-gray-200" key={props.questionId}>
        <div className="text-base mr-auto"> 
          Question <span>{props.questionId+1}</span> of <span>{props.questionTotal}</span>
        </div>
        <Question content={props.question} />
        <ul className="answerOptions">
          {props.answerOptions.map(renderAnswerOptions)}
        </ul>
      </div>
  );
}

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;