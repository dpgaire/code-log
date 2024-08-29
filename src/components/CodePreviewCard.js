import React, { useState } from "react";
import { FiClipboard, FiEdit, FiTrash, FiEye } from "react-icons/fi";

const CodePreviewCard = ({ title, codeSnippet, description }) => {
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

  return (
    <div className="bg-white shadow-xl rounded-lg border border-gray-300 min-h-[400px] flex flex-col transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
      {/* Header */}
      <div className="p-4 flex items-center justify-between bg-blue-50 border-b border-gray-200">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800">
          {title}
        </h2>
        <button
          onClick={handleCopy}
          className={`p-2 cursor-pointer rounded-full focus:outline-none transition-colors duration-200 ${
            isCopied
              ? "bg-green-100 text-green-600"
              : "bg-blue-100 text-blue-600 hover:bg-blue-200"
          }`}
          title={isCopied ? "Copied!" : "Copy to clipboard"}
        >
          <FiClipboard className="w-5 h-5" />
        </button>
      </div>

      {/* Code Snippet */}
      <div className="flex-grow p-4 overflow-x-auto bg-gray-900 rounded-md m-4">
        <pre className="text-sm md:text-base text-gray-200 leading-snug">
          <code>{codeSnippet}</code>
        </pre>
      </div>

      {/* Description */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <p className="text-gray-600 text-sm">{description}</p>
      </div>

      {/* Action Buttons */}
      <div className="p-4 flex justify-between items-center bg-white border-t border-gray-200">
        <button
          className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          title="Edit"
        >
          <FiEdit className="w-5 h-5 text-gray-600" />
        </button>
        <button
          className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          title="Delete"
        >
          <FiTrash className="w-5 h-5 text-gray-600" />
        </button>
        <button
          className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          title="Preview"
        >
          <FiEye className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default CodePreviewCard;
