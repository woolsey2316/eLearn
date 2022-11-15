import React, { useState } from "react";

import Modal from "react-modal";

import { OtherInstructions } from "./OtherInstructions";
import { ExamInstructions } from "./ExamInstructions";
type Props = {
  open: boolean;
  closeModal: () => void;
};
function ExamInstructionModal(props: Props) {
  const [page] = useState(true);
  return (
    <Modal
      isOpen={props.open}
      onRequestClose={props.closeModal}
      contentLabel="Example Modal"
      style={{
        overlay: { zIndex: 9999 },
        content: { bottom: "2%", top: "2%", left: "2%", right: "2%" },
      }}
    >
      <div className="modal__content">
        <div className="text-center">
          <div className="md:text-xl text-lg text-gray-700 overflow-y-auto">
            <div className="content rounded-none p-2">
              <div className="box text-left p-10 m-2">
                {page && <ExamInstructions />}
                {!page && <OtherInstructions />}
                <div className="flex flex-col sm:flex-row items-center justify-center text-center mt-5">
                  <button
                    type="button"
                    onClick={props.closeModal}
                    data-dismiss="modal"
                    className="button border text-gray-700 sm:mr-2 md:text-xl sm:text-lg text-medium"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-gray-600 mt-2"></div>
        </div>
      </div>
    </Modal>
  );
}

export { ExamInstructionModal };
