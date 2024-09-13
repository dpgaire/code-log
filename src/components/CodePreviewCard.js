import React, { useState } from "react";
import { FiClipboard, FiEdit, FiTrash, FiEye } from "react-icons/fi";
import { IconButton } from "./ui";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

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
    <div className="bg-primary rounded-lg shadow-xl border border-gray-300 scrollbar-hidden overflow-y-auto min-h-[300px] max-h-[500px] flex flex-col transition-transform transform  hover:shadow-2xl duration-300">
      <div className="flex rounded-t-lg justify-between items-center px-4 py-1 text-white text-xs bg-primary">
        <p className="text-lg font-bold">{title}</p>
        {isCopied ? (
          <button
            onClick={handleCopy}
            className="py-1 bg-transparent text-white font-bold cursor-pointer border-none outline-none inline-flex items-center justify-center gap-1 "
          >
            <span className="text-base mt-1">
              <ion-icon name="checkmark-sharp"></ion-icon>
            </span>
            Copied!
          </button>
        ) : (
          <button
            onClick={handleCopy}
            className="py-1 bg-transparent text-white font-bold cursor-pointer border-none outline-none inline-flex items-center justify-center gap-1 "
          >
            <span className="text-base mt-1">
              <ion-icon name="clipboard-outline"></ion-icon>
            </span>
            Copy code
          </button>
        )}
      </div>
      <SyntaxHighlighter
        language="jsx"
        style={atomOneDark}
        customStyle={{ padding: "25px" }}
        wrapLongLines={true}
      >
        {`${codeSnippet}`}
      </SyntaxHighlighter>

      {/* Description */}
      <div className="p-4 border-t text-white border-gray-200  ">
        <p className="text-grey-200 text-sm">{description}</p>
      </div>

      {/* Action Buttons */}
      <div className="p-2 flex justify-between items-center rounded-b-lg border-b border-gray-200 bg-primary">
        {buttonConfigs.map(({ icon: Icon, title, modalType }) => (
          <IconButton
            key={modalType}
            icon={Icon}
            title={title}
            className={
              "hover:scale-110 hover:font-bold bg-transparent text-white"
            }
            onClick={() => handleOpenModal(modalType, id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CodePreviewCard;
