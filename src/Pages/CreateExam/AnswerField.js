import React from 'react'

function AnswerField({quiz, handleChange, submitted}) {
  return (
    <div>
      <label className="text-gray-700 mt-5">answer</label>
      {(submitted && !quiz.answer && (
        <div className="text-theme-6">answer is required</div>
      )) }
      <input
        type="text"
        name="answer"
        className="intro-x login__input input input--lg border border-gray-300 block mb-2 mt-1"
        placeholder="answer"
        value={quiz.answer}
        onChange={handleChange}
      />
    </div>
  )
}
export { AnswerField } 