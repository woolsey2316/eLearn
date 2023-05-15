import React, { useState } from 'react'

import DateTimePicker from 'react-datetime-picker';
import { useCreateTaskMutation } from '../features/task/task-slice-api';
interface Props {
  setClose: () => void
}
function TaskModalContent({setClose}: Props) {
  const [createTask] = useCreateTaskMutation()
  const [task, setTask] = useState({
    title: "",
    completed: false,
  })

  const [due, onChange] = useState(new Date());

  function handleChange(e: React.FormEvent<HTMLInputElement>): void {
    const { name, value } = e.currentTarget;
    setTask((task) => ({
      ...task,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    if (task.title && due) {
      createTask({...task, due});
    }
  }
  return (
    <div className="modal__content">
      <div className="text-center">
        <div className="md:text-xl text-lg mt-5 text-gray-700">
          Add a new Task
        </div>
        <div className="text-gray-600 mt-2"></div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center text-center mt-5">
        <form
          name="form"
          onSubmit={handleSubmit}
          className="validate-form m-auto"
        >
          <div className="p-5">
            <div>
              <label className="font-medium" htmlFor="title">title</label>
              <input
                className="input w-full border border-theme-13"
                placeholder=""
                id="title"
                name="title"
                onChange={handleChange}
              />
            </div>
            <div className="mt-3">
              <label className="block font-medium">due</label>
              <DateTimePicker calendarClassName="border border-theme-13 p-5" onChange={(date) => date ? onChange(date) : ""} value={due} />
            </div>
            <button
              onClick={setClose}
              type="button"
              data-dismiss="modal"
              className="button w-28 mr-5 border border-theme-7 text-gray-700"
            >
              Back To Questions
            </button>
            <button type="submit" className="button bg-theme-1 text-white mt-4">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
   );
}



export default TaskModalContent;