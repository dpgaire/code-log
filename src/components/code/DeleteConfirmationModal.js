import React from "react";
import { Modal } from "../ui";
import DeleteConfirmation from "../DeleteConfirmation";

const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm }) => (
  <Modal isOpen={isOpen} onClose={onClose} title="Confirm Deletion">
    <DeleteConfirmation onConfirm={onConfirm} onCancel={onClose} />
  </Modal>
);

export default DeleteConfirmationModal;
