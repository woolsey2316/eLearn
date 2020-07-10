import React from 'react'

function InputField({quiz, changeAnswerOption, number, submitted}) {
  var index = number - 1
  return (
    <div >
      <label className="text-gray-700 mt-5">{"option " + number}</label>
      {submitted && !quiz.option[index] && (
        <div className="text-theme-6">{"option " + number} is required</div>
      )}
      <input
        type="text"
        name={index}
        className="intro-x login__input rounded-full input input--lg border border-gray-300 block mb-2 mt-1"
        placeholder={quiz.option[index]}
        value={quiz.option[index]}
        onChange={changeAnswerOption}
      />
    </div>
  )
}
export { InputField }