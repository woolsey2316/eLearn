import React from 'react'
import { Quiz } from '../../types/ExamState';
interface Props {
  quiz: Quiz;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  submitted: boolean;
}
function QuestionNumberField({ quiz, handleChange, submitted }: Props) {
  return (
    <div>
      <label className="text-gray-700 mt-5">Question number</label>
      {submitted && quiz && !quiz.number && (
        <div className="text-theme-6">Question number is required</div>
      )}
      <input
        type="text"
        name="number"
        className="intro-x login__input input input--lg border border-gray-300 block mb-2 mt-1 w-full"
        placeholder="question number"
        value={quiz && quiz.number}
        onChange={handleChange}
      />
    </div>
  )
}
export { QuestionNumberField }
