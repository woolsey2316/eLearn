import React from "react";
import Modal from "react-modal";
import * as Icon from "react-feather";
type Props = {
  modalIsOpen: boolean;
  closeModal: () => void;
};
function SubmitModal(props: Props) {
  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      appElement={document.getElementById("root") ?? undefined}
      contentLabel="Submit Modal"
      style={{
        overlay: { zIndex: 9999 },
        content: { bottom: "20%", top: "20%" },
      }}
    >
      <div className="modal__content">
        <div className="p-5 text-center">
          <Icon.CheckCircle className="w-16 h-16 text-theme-9 mx-auto mt-3" />
          <div className="text-3xl mt-5">Good job!</div>
          <div className="text-gray-600 mt-2">
            You completed the test! <br />
          </div>
        </div>
        <div className="px-5 pb-8 text-center">
          <a
            onClick={props.closeModal}
            href="/"
            data-dismiss="modal"
            className="button w-24 cursor-pointer bg-theme-1 text-white"
          >
            Back To homepage
          </a>
        </div>
      </div>
    </Modal>
  );
}

export { SubmitModal };
