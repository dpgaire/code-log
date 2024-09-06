import React, { useState } from "react";
import { FiClipboard, FiEdit, FiTrash, FiEye } from "react-icons/fi";
import { IconButton } from "./ui";

const buttonConfigs = [
  { icon: FiEdit, title: "Edit", modalType: "update" },
  { icon: FiTrash, title: "Delete", modalType: "delete" },
  { icon: FiEye, title: "Preview", modalType: "preview" },
];

const CodePreviewCard = ({
  id,
  title,
  codeSnippet,
  description,
  handleUpdate,
  handleDelete,
  handleDetils,
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(codeSnippet)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };

  const handleOpenModal = (modalType, id) => {
    switch (modalType) {
      case "update":
        handleUpdate(id);
        break;
      case "delete":
        handleDelete(id);
        break;
      case "preview":
        handleDetils(id);
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-white rounded-t-lg shadow-xl border border-gray-300 min-h-[500px] max-h-[700px] flex flex-col transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
      {/* Header */}
      <div className="p-4 flex items-center justify-between rounded-t-lg bg-primary border-b border-gray-200">
        <h2 className="text-lg md:text-xl font-semibold text-white">{title}</h2>
        <IconButton
          className={`${
            isCopied
              ? "bg-white-100 text-green-600"
              : "bg-white text-blue-600 hover:bg-blue-200"
          }`}
          icon={FiClipboard}
          title="Edit"
          onClick={handleCopy}
        />
      </div>

      {/* Code Snippet */}
      <div className="flex-grow p-4 overflow-x-auto bg-gray-900 rounded-md m-4">
        <pre className="text-sm md:text-base text-gray-200 leading-snug">
          <code>{codeSnippet}</code>
        </pre>
      </div>

      {/* Description */}
      <div className="p-4 border-t border-gray-200  ">
        <p className="text-grey-200 text-sm">{description}</p>
      </div>

      {/* Action Buttons */}
      <div className="p-4 flex justify-between items-center border-t border-gray-200">
        {buttonConfigs.map(({ icon: Icon, title, modalType }) => (
          <IconButton
            key={modalType}
            icon={Icon}
            title={title}
            className={"hover:scale-110 hover:font-bold"}
            onClick={() => handleOpenModal(modalType, id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CodePreviewCard;
