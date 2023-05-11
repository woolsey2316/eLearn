import React, { ChangeEventHandler } from "react";
import { Question } from "./Question";
import { AnswerOption } from "./AnswerOption";
type Props = {
  selectedOption: number;
  answerOptions: string[] | undefined;
  question: string | undefined;
  getUserAnswer: ChangeEventHandler<HTMLInputElement>;
};
function Quiz({
  selectedOption,
  answerOptions = [],
  question = '',
  getUserAnswer}: Props) {
  return (
    <div
      style={{ height: "calc(100vh - 272px)" }}
      className="items-center p-5 border-b border-gray-200 overflow-auto"
    >
      <Question content={question} />
      <ul className="answerOptions">
        {answerOptions.map((answer, index) => {
          return (
            <AnswerOption
              key={index}
              answerIndex={index}
              answerContent={answer}
              getUserAnswer={getUserAnswer}
              selectedOption={selectedOption}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Quiz;
