import React, { useState, createContext, SetStateAction, Dispatch } from "react";
import ReactDOM from "react-dom/client";

interface ModalCtx {
  logoutModalIsOpen: boolean;
  setLogoutModalOpen: Dispatch<SetStateAction<boolean>>;
  openLogoutModal: () => void;
  closeLogoutModal: () => void;
}

interface InitialState {
  logoutModalIsOpen: false
  closeLogoutModal: () => void
  openLogoutModal: () => void
}
const ModalContext = createContext<ModalCtx | InitialState>({
  logoutModalIsOpen: false,
  closeLogoutModal: () => {
    return
  },
  openLogoutModal: () => {
    return
  }

})
interface Props {
  children: JSX.Element | JSX.Element[]
}
const MovieContextProvider = ({children}: Props) => {

  const [logoutModalIsOpen, setLogoutModalOpen] = useState(false);

  function openLogoutModal() {
    setLogoutModalOpen(true);
  }

  function closeLogoutModal() {
    setLogoutModalOpen(false);
  }

  const modalContext = {
    logoutModalIsOpen,
    setLogoutModalOpen,
    openLogoutModal,
    closeLogoutModal
  }

  return (
    <ModalContext.Provider value={modalContext}>
      {children}
    </ModalContext.Provider>
  )
}

export { MovieContextProvider, ModalContext }
