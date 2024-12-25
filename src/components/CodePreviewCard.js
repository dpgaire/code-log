import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Button } from "./ui";

const CodePreviewCard = ({ codeSnippet, handleUpdate,handleUpdateConfirm }) => {
  const [editableCode, setEditableCode] = useState(codeSnippet);
  const [isEditing, setIsEditing] = useState(false);

  const handleCodeChange = (event) => {
    setEditableCode(event.target.value);
  };

  const toggleEditing = () => {
    if (isEditing) {
      handleUpdate(editableCode);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="bg-gray-900 rounded-lg shadow-md border border-gray-700 flex flex-col overflow-hidden w-full">
      {/* Code Editor Area */}
      <div className="relative flex">
        {/* Line Numbers */}
        <div className="bg-gray-800 text-gray-400 text-sm flex flex-col items-end py-3 px-2 overflow-hidden">
          {Array.from({ length: editableCode.split("\n").length }).map((_, i) => (
            <span key={i} className="pr-2">{i + 1}</span>
          ))}
        </div>
        {/* Code Section */}
        <div
          className="flex-1 bg-gray-900 "
          // style={{ maxHeight: "400px" }}
          onClick={toggleEditing}
        >
          {isEditing ? (
            <textarea
              value={editableCode}
              onChange={handleCodeChange}
              className="w-full h-full bg-gray-900 text-gray-200 text-sm p-4 font-mono outline-none resize-none"
              spellCheck={false}
            />
          ) : (
            <SyntaxHighlighter
              language="javascript"
              style={atomOneDark}
              customStyle={{
                padding: "15px",
                margin: 0,
                background: "transparent",
                overflowX: "auto",
              }}
              wrapLongLines={true}
              lineProps={{
                style: { wordBreak: "break-word", whiteSpace: "pre-wrap" },
              }}
            >
              {editableCode}
            </SyntaxHighlighter>
          )}
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex items-center justify-between bg-gray-800 px-4 py-3 border-t border-gray-700">
      <Button
        className="ml-2"
        onClick={toggleEditing}
        text= {isEditing ? "Save" : "Edit"}
        variant="primary"
      />
        {!isEditing && (
          <Button
          className="ml-2"
          onClick={() => navigator.clipboard.writeText(editableCode)}
          text= "Copy"
          variant="primary"
        />
  
        )}
      </div>
    </div>
  );
};

export default CodePreviewCard;
