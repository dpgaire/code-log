import React, { createContext, useContext } from "react";
import useToggle from "../hooks/useToggle";

// Create a context to store modal states and handlers
const ModalContext = createContext();

// Provide the context to your component tree
export const ModalProvider = ({ children }) => {
  const {
    state: addIsOpen,
    toggle: addToggle,
    reset: addResetOpen,
  } = useToggle();
  const {
    state: deleteIsOpen,
    toggle: deleteToggle,
    reset: deleteResetOpen,
  } = useToggle();
  const {
    state: updateIsOpen,
    toggle: updateToggle,
    reset: updateResetOpen,
  } = useToggle();
  const {
    state: detailsIsOpen,
    toggle: detailsToggle,
    reset: detailsResetOpen,
  } = useToggle();

  return (
    <ModalContext.Provider
      value={{
        addIsOpen,
        addToggle,
        addResetOpen,
        deleteIsOpen,
        deleteToggle,
        deleteResetOpen,
        updateIsOpen,
        updateToggle,
        updateResetOpen,
        detailsIsOpen,
        detailsToggle,
        detailsResetOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);
  console.log("context", context);
  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
};
