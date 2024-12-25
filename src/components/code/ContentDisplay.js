import React, { useState } from "react";
import CodePreviewCard from "../CodePreviewCard";
import NoDataFound from "../NoDataFound";

const ContentDisplay = ({
  data,
  filteredData,
  handleUpdate,
  handleDelete,
  handleDetils,
}) => {
  const files = filteredData.length > 0 ? filteredData : data;
  const [activeFile, setActiveFile] = useState(files[0]?.id);

  const handleFileClick = (id) => {
    setActiveFile(id);
  };

  return (
    <div className="bg-gray-900 rounded-lg shadow-md">
      {/* VS Code-Like File Tabs */}
      <div className="flex items-center bg-gray-800 text-gray-300 border-b border-gray-700 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
        {files.map((file) => (
          <div
            key={file.id}
            className={`relative flex cursor-pointer items-center px-4 py-2 text-sm font-medium whitespace-nowrap transition ${
              activeFile === file.id
                ? "bg-gray-700 text-white border-t-2 border-blue-500"
                : "hover:bg-gray-700 hover:text-white"
            }`}
            onClick={() => handleFileClick(file.id)}
          >
            {/* File Icon */}
            <span className="mr-2 text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
            </span>
            {file.title || "Untitled File"}
            {activeFile === file.id && (
              <span className="absolute inset-x-0 bottom-0 h-1 bg-blue-500" />
            )}
            {/* Close Icon */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="ml-2 size-6"
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the file click
                handleDelete(file.id);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* File Content */}
      <div className="p-4 bg-gray-850">
        {files.length === 0 ? (
          <NoDataFound message="No data at the moment. Try again or add" />
        ) : (
          <div className="p-4 bg-gray-900 rounded-lg shadow-inner border border-gray-700">
            {files
              .filter((file) => file.id === activeFile)
              .map((item) => (
                <CodePreviewCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  codeSnippet={item.codeSnippet}
                  handleUpdate={handleUpdate}
                  handleDelete={handleDelete}
                  handleDetils={handleDetils}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentDisplay;
