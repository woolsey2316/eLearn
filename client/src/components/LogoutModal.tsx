import React from "react";

import Modal from "react-modal";
import * as Icon from "react-feather";
type Props = {
  modalIsOpen: boolean;
  closeModal: () => void;
};
function LogoutModal(props: Props) {
  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
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
          <Icon.LogOut className="sm:w-10 sm:h-10 md:w-12 md:h-12 w-10 h-10 text-theme-6 mx-auto mt-3" />
          <div className="md:text-xl text-lg mt-5 text-gray-700">
            Are you sure you want to Logout?
          </div>
          <div className="text-gray-600 mt-2"></div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center text-center mt-5">
          <button
            type="button"
            onClick={props.closeModal}
            data-dismiss="modal"
            className="button border text-gray-700 sm:mr-2 md:text-xl sm:text-lg text-medium"
          >
            Cancel
          </button>
          <a
            href="/login"
            className="mt-2 sm:mt-0 button bg-theme-6 text-white md:text-xl sm:text-lg text-medium"
          >
            Log Out
          </a>
        </div>
      </div>
    </Modal>
  );
}

export { LogoutModal };
