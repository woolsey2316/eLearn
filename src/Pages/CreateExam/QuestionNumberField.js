import React from 'react'

function QuestionNumberField({ quiz, handleChange, submitted }) {
  return (
    <div>
      <label className="text-gray-700 mt-5">Question number</label>
      {submitted && quiz && !(quiz.number) && (
        <div className="text-theme-6">Question number is required</div>
      )}
      <input
        type="text"
        name="number"
        className="intro-x login__input input input--lg border border-gray-300 block mb-2 mt-1"
        placeholder="question number"
        value={quiz && quiz.number && parseInt(quiz.number, 10)}
        onChange={handleChange}
      />
    </div>
  )
}
export { QuestionNumberField }
