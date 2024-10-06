import React from "react";
import DynamicForm from "../DynamicForm";
import { Modal } from "../ui";
import { formConfig } from "../../utlis/formConfig";

const UpdateCodeModal = ({ isOpen, onClose, onSubmit, initialData }) => (
  <Modal isOpen={isOpen} onClose={onClose} size="lg" title="Update Code">
    <DynamicForm
      initialData={initialData}
      config={formConfig}
      onSubmit={onSubmit}
      onCancel={onClose}
      submitText="Update"
    />
  </Modal>
);

export default UpdateCodeModal;
