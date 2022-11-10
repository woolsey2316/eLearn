import React, { ChangeEventHandler } from "react";
import PropTypes from "prop-types";
import { Question } from "./Question";
import { AnswerOption } from "./AnswerOption";
type Props = {
  selectedOption: number;
  answerOptions: string[];
  question: string;
  questionId: number;
  getUserAnswer: ChangeEventHandler<HTMLInputElement>;
};
function Quiz(props: Props) {
  return (
    <div
      style={{ height: "calc(100vh - 272px)" }}
      className="items-center p-5 border-b border-gray-200 overflow-auto"
    >
      <Question content={props.question} />
      <ul className="answerOptions">
        {props.answerOptions.map((elem, index) => {
          return (
            <AnswerOption
              key={index}
              answerIndex={index}
              answerContent={elem}
              getUserAnswer={props.getUserAnswer}
              selectedOption={props.selectedOption}
            />
          );
        })}
      </ul>
    </div>
  );
}

Quiz.propTypes = {};

export default Quiz;
