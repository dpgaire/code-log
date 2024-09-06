import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaCopy } from "react-icons/fa";
import { IconButton } from "../ui";

const CodePreviewComponent = (data) => {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(data.codeSnippet)
      .then(() => alert("Code copied to clipboard!"))
      .catch((err) => console.error("Failed to copy code: ", err));
  };

  return (
    <div className="bg-white shadow-lg rounded-lg border border-gray-300 overflow-hidden max-w-4xl mx-auto my-4">
      {/* Header */}
      <div className="bg-primary p-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">{data.title}</h2>
        <IconButton
          icon={FaCopy}
          title="Copy Code"
          className="text-white bg-blue-600 hover:bg-blue-700"
          onClick={handleCopy}
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Description */}
        <p className="text-gray-700 mb-4">{data.description}</p>

        {/* Code Snippet */}
        <div className="bg-gray-900 rounded-md p-4">
          <SyntaxHighlighter language="javascript" style={solarizedlight}>
            {data.codeSnippet}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default CodePreviewComponent;
