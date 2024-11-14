import React, { useRef } from "react";
import { Button } from "../components/ui";
import useToggle from "../hooks/useToggle";
import { LoginModal } from "../components/code";

const Header = ({ resetData, exportDataToFile, importDataFromFile }) => {
  const {
    state: addIsOpen,
    toggle: addToggle,
    reset: addResetOpen,
  } = useToggle();

  // Reference to the hidden file input element
  const fileInputRef = useRef(null);

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      importDataFromFile(file); // Call importDataFromFile with the selected file
    }
  };

  // Handle button click to trigger file input
  const handleImportClick = () => {
    fileInputRef.current.click(); // Trigger the hidden file input click event
  };

  const handleFormSubmit = (data) => {
    console.log("data", data);
    addResetOpen();
  };

  return (
    <div className="bg-primary font-sans w-full tracking-widest text-white p-2 flex justify-center items-center sticky top-0 z-20">
      <span className="lg:text-4xl md:text-2xl flex-1 ">Codelog</span>
      <Button onClick={() => resetData()} text="Reset All" variant="danger" />
      {/* <Button
        className="ml-2"
        onClick={addToggle}
        text="Login"
        variant="primary"
      /> */}
      <Button
        className="ml-2"
        onClick={() => exportDataToFile()}
        text="Export"
        variant="primary"
      />
      <Button
        className="ml-2"
        onClick={handleImportClick}
        text="Import"
        variant="primary"
      />
      {/* Hidden file input to select a file */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".json" // Only allow JSON files
        style={{ display: "none" }} // Make it invisible
        onChange={handleFileChange} // Handle the file selection
      />

      {/* <LoginModal
        isOpen={addIsOpen}
        onClose={addResetOpen}
        onSubmit={handleFormSubmit}
      /> */}
    </div>
  );
};

export default Header;
