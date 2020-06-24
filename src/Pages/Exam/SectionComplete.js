import React from 'react'
import Modal from 'react-modal'
import * as Icon from 'react-feather'

function SectionComplete(props) {
  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      contentLabel="Example Modal"
      style={{
        overlay: { zIndex: 9999 },
        content: { bottom: '20%', top: '20%' },
      }}
    >
      <div className="modal__content">
        <div className="p-5 text-center">
          <Icon.CheckCircle className="w-16 h-16 text-theme-9 mx-auto mt-3" />
          <div className="text-3xl mt-5">Good job!</div>
          <div className="text-gray-600 mt-2">
            You Completed a section! <br />
            make sure all other sections are completed
          </div>
        </div>
        <div className="px-5 pb-8 text-center">
          <button
            onClick={props.closeModal}
            type="button"
            data-dismiss="modal"
            className="button w-24 bg-theme-1 text-white"
          >
            Back To Questions
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default SectionComplete
