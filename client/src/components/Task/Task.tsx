import React from 'react'

type TaskProps = {
  title: string;
  due: string;
  completed: boolean;
}
function Task({title, due, completed}: TaskProps) {
  return (
    <div className="flex items-center first:mt-0 mt-5">
      <div className="border-l-2 border-theme-1 pl-4">
        <a href="/" className="font-medium">
          {title}
        </a>
        <div className="text-gray-600">{due}</div>
      </div>
      <input
        className="input input--switch ml-auto border"
        type="checkbox"
      />
    </div>
   );
}

export default Task;