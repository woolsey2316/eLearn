import React, { useState } from "react";

import Modal from "react-modal";
import * as Icon from "react-feather";
import * as Loading from "react-spinners";

import { SuccessRegister } from "./SuccessRegister";
import { FailRegister } from "./FailRegister";

import { history } from "../../helpers";

import { CourseDTO } from "../../types/CourseState";
import { useRegisterMutation } from "../../features/course/course-slice-api";

type CourseSubscribeModalProps = {
  modalIsOpen: boolean;
  closeModal: () => void;
  register: () => void;
  openModal: () => void;
  chosenCourse: CourseDTO;
};
function CourseSubscribeModal({
  modalIsOpen,
  closeModal,
  chosenCourse,
}: CourseSubscribeModalProps) {

  const [register, {isLoading, isSuccess, isError}] = useRegisterMutation();
  // made an attempt to register for a course
  const [request, setRequest] = useState(false);

  async function attemptRegister() {
    try {
      const registerOutcome = await register(chosenCourse).unwrap()
    } catch(error) {
      console.log(error)
    }
  }

  function closeAndExit() {
    setRequest(false);
    closeModal();
    history.push("/student/courses/CourseRegister");
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      appElement={document.getElementById("root") ?? undefined}
      contentLabel="Example Modal"
      style={{
        overlay: { zIndex: 9999 },
        content: { bottom: "25%", top: "25%", left: "25%", right: "25%" },
      }}
    >
      <div className="modal__content text-center">
        {request && isSuccess ? (
          <SuccessRegister course={chosenCourse} />
        ) : null}
        {request && !isError ? (
          <FailRegister course={chosenCourse} />
        ) : null}
        {!request && (
          <div className="text-center">
            <Icon.PlayCircle className="sm:w-10 sm:h-10 md:w-12 md:h-12 w-10 h-10 text-theme-7 mx-auto mt-3" />
            <div className="md:text-lg mt-5 text-gray-700">
              Are you sure you want to register for
            </div>
            <div className="md:text-xl text-lg mt-5 text-gray-800">
              {chosenCourse.name}
            </div>
            <div className="text-gray-600 ml-1">{`Category: ${chosenCourse.category}`}</div>
            <div className="text-gray-600 mt-2"></div>
          </div>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center text-center mt-5">
          {!request && (
            <React.Fragment>
              <button
                type="button"
                onClick={closeModal}
                data-dismiss="modal"
                className="button border text-gray-700 sm:mr-2 md:text-lg sm:text-medium"
              >
                Cancel
              </button>
              <button
                onClick={attemptRegister}
                className="flex mt-2 sm:mt-0 button bg-theme-7 text-white md:text-lg sm:text-medium"
              >
                Register&nbsp;
                {isLoading && (
                  <Loading.PulseLoader
                    size={5}
                    color={"#ffffff"}
                    loading={isLoading}
                    // className="ml-5"
                  />
                )}
              </button>
            </React.Fragment>
          )}
          {request && (
            <button
              onClick={closeAndExit}
              className="flex mt-2 sm:mt-0 button bg-theme-7 text-white md:text-lg sm:text-medium"
            >
              Close
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
}

export { CourseSubscribeModal };
