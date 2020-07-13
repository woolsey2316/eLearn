import React from 'react'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function QuestionField({submitted, quiz, handleChange}) {
  function rteChange(content, delta, source, editor) {
		console.log(editor.getHTML()); // rich text
		console.log(editor.getText()); // plain text
		console.log(editor.getLength()); // number of characters
	}
  return (
    <div>
      {submitted && quiz && !quiz.question && (
        <div className="text-theme-6">Question is required</div>
      )}
      <ReactQuill 
        className="overflow-y-auto mb-2"
        theme="snow"
        placeholder="enter question..."
        value={quiz && quiz.question || ''}
        onChange={handleChange}
        style= {{maxWidth: '33em', height:'auto', maxHeight: '33em'}}
      >
      </ReactQuill>
    </div>
  )
}
export { QuestionField }
