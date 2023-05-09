import React from "react";
import { Quiz } from "../../types/ExamState";
interface Props {
  quiz: Quiz;
  changeAnswerOption: (e: React.ChangeEvent<HTMLInputElement>) => void;
  number: number;
  submitted: boolean;
}
function InputField({ quiz, changeAnswerOption, number, submitted }: Props) {
  const index = number - 1;
  return (
    <div>
      <label className="text-gray-700 mt-5">{"option " + number}</label>
      {submitted && quiz && !quiz.possibleAnswers[index] && (
        <div className="text-theme-6">{"option " + number} is required</div>
      )}
      <input
        type="text"
        name={index.toString()}
        className={
          "intro-x login__input rounded-full input input--lg border border-gray-300 block mb-2 mt-1 w-full" +
          (submitted && quiz && !quiz.possibleAnswers[index] ? " border-theme-6" : "")
        }
        placeholder={quiz && quiz.possibleAnswers[index]}
        value={(quiz && quiz.possibleAnswers[index]) || ""}
        onChange={changeAnswerOption}
      />
    </div>
  );
}
export { InputField };
