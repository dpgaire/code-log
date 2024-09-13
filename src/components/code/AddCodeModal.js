import React from "react";
import { Modal } from "../ui";
import DynamicForm from "../DynamicForm";
import { formConfig } from "../../utlis/formConfig";

const AddCodeModal = ({ isOpen, onClose, onSubmit }) => (
  <Modal isOpen={isOpen} onClose={onClose} title="Add Code">
    <DynamicForm
      config={formConfig}
      onSubmit={onSubmit}
      onCancel={onClose}
      submitText="Add"
    />
  </Modal>
);

export default AddCodeModal;
