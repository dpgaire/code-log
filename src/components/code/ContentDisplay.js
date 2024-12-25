import React, { useState } from "react";
import CodePreviewCard from "../CodePreviewCard";
import NoDataFound from "../NoDataFound";

const ContentDisplay = ({
  data,
  filteredData,
  handleUpdate,
  handleDelete,
  handleDetils,
  handleUpdateConfirm,
}) => {
  const files = filteredData.length > 0 ? filteredData : data;

  const [activeFile, setActiveFile] = useState(files[0]?.id);
  const [expandedFolders, setExpandedFolders] = useState({});

  const handleFileClick = (id) => {
    setActiveFile(id);
  };

  const toggleFolder = (folderName) => {
    setExpandedFolders((prevState) => ({
      ...prevState,
      [folderName]: !prevState[folderName],
    }));
  };

  // Group files by folder
  const groupedFiles = files.reduce((acc, file) => {
    if (!acc[file.folder]) acc[file.folder] = [];
    acc[file.folder].push(file);
    return acc;
  }, {});

  return (
    <div className="flex bg-gray-900 rounded-lg shadow-md">
      {/* Folder & File Sidebar */}
      <div className="w-72 bg-gray-800 border-r border-gray-700 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
        {Object.keys(groupedFiles).map((folder) => (
          <div key={folder} className="border-b border-gray-700">
            {/* Folder Name */}
            <div
              className="flex items-center justify-between px-2 py-2 cursor-pointer text-gray-300 hover:bg-gray-700"
              onClick={() => toggleFolder(folder)}
            >
              <span className="flex items-center">
                {/* Folder Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 7.5h16.5M3.75 12h16.5m-16.5 4.5h16.5"
                  />
                </svg>
                {folder}
              </span>
              {/* Toggle Icon */}
              <span>
                {expandedFolders[folder] ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 6l12 12"
                    />
                  </svg>
                )}
              </span>
            </div>
            {/* File List */}
            {expandedFolders[folder] && (
              <div className="pl-6">
                {groupedFiles[folder].map((file) => (
                  <div
                    key={file.id}
                    className={`flex items-center justify-between px-4 py-2 text-sm cursor-pointer ${
                      activeFile === file.id
                        ? "bg-gray-700 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                    onClick={() => handleFileClick(file.id)}
                  >
                    <span className="flex items-center">
                      {/* File Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                        />
                      </svg>
                      {file.title || "Untitled File"}
                    </span>
                    {/* Delete Icon */}
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
            )}
          </div>
        ))}
      </div>

      {/* File Content Area */}
      <div className="flex-1 p-4 bg-gray-850">
        {files.length === 0 ? (
          <NoDataFound message="No data at the moment. Try again or add" />
        ) : (
          <div className="bg-gray-900 rounded-lg shadow-inner border border-gray-700">
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
                  handleUpdateConfirm={handleUpdateConfirm}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentDisplay;
