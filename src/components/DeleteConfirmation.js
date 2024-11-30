import React from "react";
import { Button } from "./ui";

const DeleteConfirmation = ({ onConfirm, onCancel }) => {
  return (
    <div className="bg-white rounded-lg  w-full">
      <p className="text-gray-700 mb-4">
        Are you sure you want to delete this item? This action cannot be undone.
      </p>
      <div className="flex justify-end space-x-4">
        <Button text="Delete" variant="danger" onClick={onConfirm} />
        <Button text="Cancel" variant="secondary" onClick={onCancel} />
      </div>
    </div>
  );
};

export default DeleteConfirmation;
