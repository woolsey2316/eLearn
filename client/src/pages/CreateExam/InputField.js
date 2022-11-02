import React from "react";

function InputField({ quiz, changeAnswerOption, number, submitted }) {
  const index = number - 1;
  return (
    <div>
      <label className="text-gray-700 mt-5">{"option " + number}</label>
      {submitted && quiz && !quiz.option[index] && (
        <div className="text-theme-6">{"option " + number} is required</div>
      )}
      <input
        type="text"
        name={index}
        className={
          "intro-x login__input rounded-full input input--lg border border-gray-300 block mb-2 mt-1 w-full" +
          (submitted && quiz && !quiz.option[index] ? " border-theme-6" : "")
        }
        placeholder={quiz && quiz.option[index]}
        value={(quiz && quiz.option[index]) || ""}
        onChange={changeAnswerOption}
      />
    </div>
  );
}
export { InputField };
