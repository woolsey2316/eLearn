import React from 'react'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { Quiz } from '../../types/ExamState';
import { Delta as TypeDelta, Sources } from 'quill';
interface Props {
  submitted: boolean;
  quiz: Quiz;
  handleChange: (_content: string,_delta: TypeDelta, _source: Sources, editor: any) => void
}
function QuestionField({ submitted, quiz, handleChange }: Props) {
  return (
    <div>
      {submitted && quiz && !quiz.question && (
        <div className="text-theme-6">Question is required</div>
      )}
      <ReactQuill
        className="mb-12 w-full h-32"
        theme="snow"
        placeholder="enter question..."
        value={(quiz && quiz.question) || ''}
        onChange={handleChange}
      ></ReactQuill>
    </div>
  )
}
export { QuestionField }
