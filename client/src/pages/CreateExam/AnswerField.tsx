import React from 'react'
import { Quiz } from '../../types/ExamState';
interface Props {
  quiz: Quiz;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitted: boolean;
}
function AnswerField({ quiz, handleChange, submitted }: Props) {
  return (
    <div>
      <label className="text-gray-700 mt-5">answer</label>
      {submitted && quiz && !quiz.answer && (
        <div className="text-theme-6">answer is required</div>
      )}
      <input
        type="text"
        name="answer"
        aria-label="answer field"
        className={
          'intro-x login__input input input--lg border border-gray-300 block mb-2 mt-1 w-full' +
          (submitted && !quiz.answer ? ' border-theme-6' : '')
        }
        placeholder="answer"
        value={(quiz && quiz.answer) || ''}
        onChange={handleChange}
      />
    </div>
  )
}
export { AnswerField }
