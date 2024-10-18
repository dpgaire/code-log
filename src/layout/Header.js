import React from "react";
import { Button } from "../components/ui";
import useToggle from "../hooks/useToggle";
import { LoginModal } from "../components/code";

const Header = ({ resetData }) => {
  const {
    state: addIsOpen,
    toggle: addToggle,
    reset: addResetOpen,
  } = useToggle();

  const handleFormSubmit = (data) => {
    console.log("data", data);
    addResetOpen();
  };

  return (
    <div className="bg-primary font-sans w-full tracking-widest text-white p-2 flex justify-center items-center">
      <span className="lg:text-4xl md:text-2xl flex-1 text-center">
        Codelog
      </span>
      <Button onClick={() => resetData()} text="Reset All" variant="danger" />
      <Button
        className="ml-2"
        onClick={addToggle}
        addToggle
        text="Login"
        variant="primary"
      />
      <LoginModal
        isOpen={addIsOpen}
        onClose={addResetOpen}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default Header;
