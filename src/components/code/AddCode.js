import React from "react";
import { Modal } from "../ui";
import DynamicForm from "../DynamicForm";
import useToggle from "../../hooks/useToggle";
import { formConfig } from "../../utlis/formConfig";

const AddCode = ({ addData }) => {
  const [isOpen, resetOpen] = useToggle();

  const handleFormSubmit = (data) => {
    addData(data);
    resetOpen();
  };

  return (
    <div className="p-6">
      <Modal isOpen={isOpen} onClose={resetOpen} title="Add Code">
        <DynamicForm
          config={formConfig}
          onSubmit={handleFormSubmit}
          onCancel={resetOpen}
        />
      </Modal>
    </div>
  );
};

export default AddCode;
