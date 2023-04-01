import React, { useState } from "react";

import Modal from "react-modal";
import { taskActions } from "../actions";
import { useAppDispatch } from "../hooks/hooks";

import DateTimePicker from 'react-datetime-picker';

type Props = {
  modalIsOpen: boolean;
  closeModal: () => void;
};
function TaskModal(props: Props) {
  const dispatch = useAppDispatch();
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
      dispatch(taskActions.createTask({...task, due}));
    }
  }
  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      appElement={document.getElementById("root") ?? undefined}
      contentLabel="Example Modal"
      style={{
        overlay: { zIndex: 9999 },
        content: {
          bottom: "25%",
          top: "25%",
          inset: "25% 25%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <div className="modal__content">
        <div className="text-center">
          <div className="md:text-xl text-lg mt-5 text-gray-700">
            Add a new Task
          </div>
          <div className="text-gray-600 mt-2"></div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center text-center mt-5">
        <form
        style={{ margin: "auto" }}
        name="form"
        onSubmit={handleSubmit}
        className="validate-form"
      >
        <div className="p-5">
          <div>
            <label>title</label>
            <input
              className="input w-full border mt-2"
              placeholder=""
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="mt-3">
            <label>due</label>
            <DateTimePicker onChange={(date) => onChange(date)} value={due} />
          </div>
          <button type="submit" className="button bg-theme-1 text-white mt-4">
            Submit
          </button>
        </div>
      </form>
        </div>
      </div>
    </Modal>
  );
}

export { TaskModal }