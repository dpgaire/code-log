import React, { useState } from "react";
import { FiEdit, FiTrash, FiEye, FiClipboard, FiCheck } from "react-icons/fi";
import { IconButton } from "./ui";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atomOneDark,
  atomOneLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useThemeContext } from "../context/ThemeContext";

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
  const { theme } = useThemeContext();
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
    <div className="bg-secondary rounded-lg shadow-lg border border-default flex flex-col transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl">
      <div className="flex justify-between items-center px-4 py-2 bg-primary rounded-t-lg">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <div className="flex items-center">
          <IconButton
            icon={isCopied ? FiCheck : FiClipboard}
            title={isCopied ? "Copied!" : "Copy code"}
            onClick={handleCopy}
            className="text-white hover:text-accent"
          />
        </div>
      </div>
      <div className="p-4 overflow-auto" style={{ maxHeight: "300px" }}>
        <SyntaxHighlighter
          language="jsx"
          style={theme === "dark" ? atomOneDark : atomOneLight}
          customStyle={{
            borderRadius: "0.5rem",
            padding: "1rem",
            fontSize: "0.875rem",
          }}
          wrapLongLines={true}
        >
          {`${codeSnippet}`}
        </SyntaxHighlighter>
      </div>
      <div className="p-4 border-t border-default">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>
      <div className="flex justify-end items-center p-2 bg-primary rounded-b-lg">
        {buttonConfigs.map(({ icon: Icon, title, modalType }) => (
          <IconButton
            key={modalType}
            icon={Icon}
            title={title}
            onClick={() => handleOpenModal(modalType, id)}
            className="text-white hover:text-accent"
          />
        ))}
      </div>
    </div>
  );
};

export default CodePreviewCard;
