import React from "react";
import CodeDetails from "./CodeDetails";
import { Modal } from "../ui";

const DetailsModal = ({ isOpen, onClose, data }) => (
  <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
    <CodeDetails data={data} />
  </Modal>
);

export default DetailsModal;
