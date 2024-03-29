import React, { useState, useEffect } from "react";

import { AnswerStatusIcon } from "./AnswerStatusIcons";
type Props = {
  currentQuestion: number;
  questionId: number;
  onClickQuestion: (num: number) => void;
  answer: number;
  markedQuestions: number[];
};
function QuestionButton(props: Props) {
  const [visitedOnce, setVisited] = useState(false);
  useEffect(() => {
    if (props.currentQuestion === props.questionId) {
      setVisited(true);
    }
  }, [visitedOnce, props.currentQuestion, props.questionId]);

  return (
    <div
      onClick={() => props.onClickQuestion(props.questionId)}
      style={{ height: "50px", width: "45px" }}
      className={
        "border text-gray-700 py-1 p-3 rounded relative font-medium m-1 cursor-pointer" +
        (props.currentQuestion === props.questionId
          ? " border-gray-700 bg-gray-200 text-gray-600"
          : " border-gray-400")
      }
    >
      {props.questionId + 1}
      <AnswerStatusIcon
        answer={props.answer}
        marked={props.markedQuestions}
        questionId={props.questionId}
        visited={visitedOnce}
        currentQuestion={props.currentQuestion}
      />
    </div>
  );
}

export { QuestionButton };
