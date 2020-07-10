import React from 'react'

function QuestionField({submitted, quiz, handleChange}) {
  return (
    <div>
      {submitted && !quiz.question && (
        <div className="text-theme-6">Question is required</div>
      )}
      <textarea
        type="text"
        name="question"
        className="intro-x login__input input input--lg border border-gray-300 block mb-5 mt-1 overflow-y-auto"
        placeholder="Question"
        required={true}
        cols={55}
        rows={5}
        value={quiz.question}
        onChange={handleChange}
      />
    </div>
  )
}
export { QuestionField }