import React from "react";
import * as Icon from "react-feather";
import Tooltip from "@reach/tooltip";

type Props = {
  answer: number;
  marked: number[];
  visited: boolean;
  currentQuestion: number;
  questionId: number;
};
function answered(message: string) {
  return (
    <div>
      <Tooltip
        style={{
          background: "hsla(0, 0%, 0%, 0.75)",
          color: "white",
          border: "none",
          borderRadius: "4px",
          padding: "0.5em 1em",
        }}
        label={message}
      >
        <Icon.Check className="w-5 h-5 text-theme-9 mx-auto" />
      </Tooltip>
    </div>
  );
}
function notAnswered(message: string) {
  return (
    <div>
      <Tooltip
        style={{
          background: "hsla(0, 0%, 0%, 0.75)",
          color: "white",
          border: "none",
          borderRadius: "4px",
          padding: "0.5em 1em",
        }}
        label={message}
      >
        <Icon.AlertTriangle className="w-5 h-5 text-theme-12 mx-auto" />
      </Tooltip>
    </div>
  );
}
function marked(message: string) {
  return (
    <div>
      <Tooltip
        style={{
          background: "hsla(0, 0%, 0%, 0.75)",
          color: "white",
          border: "none",
          borderRadius: "4px",
          padding: "0.5em 1em",
        }}
        label={message}
      >
        <Icon.Crosshair className="w-5 h-5 text-theme-11 mx-auto" />
      </Tooltip>
    </div>
  );
}
function answeredAndMarked(message: string) {
  return (
    <div>
      <Tooltip
        style={{
          background: "hsla(0, 0%, 0%, 0.75)",
          color: "white",
          border: "none",
          borderRadius: "4px",
          padding: "0.5em 1em",
        }}
        label={message}
      >
        <Icon.UserCheck className="w-5 h-5 text-theme-9 mx-auto" />
      </Tooltip>
    </div>
  );
}
function notVisited(message: string) {
  return (
    <div>
      <Tooltip
        style={{
          background: "hsla(0, 0%, 0%, 0.75)",
          color: "white",
          border: "none",
          borderRadius: "4px",
          padding: "0.5em 1em",
        }}
        label={message}
      >
        <Icon.AlertCircle className="w-5 h-5 text-gray-600 mx-auto" />
      </Tooltip>
    </div>
  );
}
function defaultStatus(message: string) {
  return (
    <div>
      <Tooltip
        style={{
          background: "hsla(0, 0%, 0%, 0.75)",
          color: "white",
          border: "none",
          borderRadius: "4px",
          padding: "0.5em 1em",
        }}
        label={message}
      >
        <Icon.AlertCircle className="w-5 h-5 text-gray-600 mx-auto" />
      </Tooltip>
    </div>
  );
}

function AnswerStatusIcon(props: Props) {
  if (props.answer != -1 && props.marked.includes(props.questionId)) {
    return answeredAndMarked("Question was answered AND marked for review");
  } else if (props.answer != -1) {
    return answered("Question is answered");
  } else if (props.visited && props.marked.includes(props.questionId)) {
    return marked("Question was NOT answered and marked for review");
  } else if (props.visited && props.currentQuestion === props.questionId) {
    return notAnswered("Question was skipped");
  }
  return notVisited("Haven't visited question yet");
}

export {
  answered,
  notAnswered,
  marked,
  answeredAndMarked,
  notVisited,
  defaultStatus,
  AnswerStatusIcon,
};
