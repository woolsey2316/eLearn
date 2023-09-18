import React, { useState } from "react";
import Task from "../../components/task/Task";

import * as Icon from "react-feather";
import { TaskModal } from "../../components/modal/TaskModal";
import { useGetTasksQuery } from "../../features/task/task-slice-api";

function TaskMenu() {
  const { data: tasks} =  useGetTasksQuery()
  const [active, setActive] = useState("New")
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    console.log("open modal request");
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
      <div className="col-span-12 lg:col-span-3 xxl:col-span-4">
        {/* <!-- BEGIN: Latest Tasks --> */}
        <TaskModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
        <div className="intro-y box">
          <div className="flex items-center px-5 py-5 sm:py-0 border-b border-gray-200">
            <h2 className="font-medium text-base mr-auto">Latest Tasks</h2>
            <div className="nav-tabs ml-auto hidden sm:flex">
              <div
                className="py-5 ml-6 cursor-pointer"
                onClick={() => openModal()}
              >
                <Icon.Plus/>
              </div>
              <div
                className={`py-5 ml-6 cursor-pointer ${active === "New" ? "active" : ""}`}
                onClick={() => setActive("New")}
              >
                New
              </div>
              <div
                className={`py-5 ml-6 cursor-pointer ${active === "Last Week" ? "active" : ""}`}
                onClick={() => setActive("Last Week")}
              >
                Last Week
              </div>
            </div>
          </div>
          <div className="p-5">
            <div className="tab-content">
              {tasks?.map(task => <Task title={task.title} due={task.due.toString().slice(0,10)} completed={task.completed}></Task>)}
            </div>
          </div>
        </div>
      </div>
  );
}
export { TaskMenu };
