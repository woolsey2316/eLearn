import React from 'react'

function QuestionNumberField({quiz, handleChange, submitted}) {
  return (
    <div>
      <label className="text-gray-700 mt-5">Question number</label>
      {(submitted && !(quiz.id+1) && (
        <div className="text-theme-6">Question number is required</div>
      )) }
      <input
        type="text"
        name="id"
        className="intro-x login__input input input--lg border border-gray-300 block mb-2 mt-1"
        placeholder="question number"
        value={quiz.id+1}
        onChange={handleChange}
      />
    </div>
  )
}
export { QuestionNumberField }