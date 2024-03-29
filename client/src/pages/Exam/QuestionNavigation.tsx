import React from "react";
import { QuestionButton } from "./QuestionButton";
type Props = {
  answerList: number[];
  onClickQuestion: (qId: number) => void;
  markedQuestions: number[];
  currentQuestion: number;
};
function QuestionNavigation(props: Props) {
  return (
    <div className="intro-x box">
      <div className="p-1">
        <div
          style={{ maxHeight: "27vh", height: "27vh" }}
          className="flex flex-wrap text-center overflow-y-auto content-start"
        >
          {props.answerList.map((ans, index) => (
            <QuestionButton
              key={index}
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
  );
}
export { QuestionNavigation };
