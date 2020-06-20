import React from 'react'

import Modal from 'react-modal'
import * as Icon from 'react-feather'

function LogoutModal(props) {
  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      contentLabel="Example Modal"
      style={{
        overlay: { zIndex: 9999 },
        content: { top: '10em', bottom: '15em', right: '25em', left: '25em' },
      }}
    >
      <div className="modal__content">
        <div className="p-5 text-center">
          <Icon.LogOut className="w-16 h-16 text-theme-6 mx-auto mt-3" />
          <div className="text-3xl mt-5">Are you sure you want to Logout?</div>
          <div className="text-gray-600 mt-2"></div>
        </div>
        <div className="px-5 pb-8 text-center">
          <button
            type="button"
            onClick={props.closeModal}
            data-dismiss="modal"
            className="button w-24 border text-gray-700 mr-1"
          >
            Cancel
          </button>
          <a href="/login" class="button button--lg w-24 bg-theme-6 text-white">
            Log Out
          </a>
        </div>
      </div>
    </Modal>
  )
}

export { LogoutModal }
