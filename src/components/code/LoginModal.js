import React from "react";
import { Modal } from "../ui";
import DynamicForm from "../DynamicForm";
import { loginConfig } from "../../utlis/formConfig";

const LoginModal = ({ isOpen, onClose, onSubmit }) => (
  <Modal isOpen={isOpen} size="md" onClose={onClose} title="Login">
    <DynamicForm
      config={loginConfig}
      onSubmit={onSubmit}
      onCancel={onClose}
      submitText="Login"
    />
  </Modal>
);

export default LoginModal;
