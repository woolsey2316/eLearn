import React from "react";

import Modal from "react-modal";
import TaskModalContent from "./TaskModalContent";

type Props = {
  modalIsOpen: boolean;
  closeModal: () => void;
};
function TaskModal(props: Props) {

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
      <TaskModalContent setClose={props.closeModal} />
    </Modal>
  );
}

export { TaskModal }