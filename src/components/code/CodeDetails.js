import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeDetails = (data) => {
  const [isCopied, setIsCopied] = useState(false);
  const { title, description, codeSnippet } = data.data;

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
    <div className="bg-white rounded-lg shadow-xl border border-gray-300 min-h-[300px] max-h-[700px] flex flex-col transition-transform transform  hover:shadow-2xl duration-300">
      <div className="flex rounded-t-lg justify-between items-center px-4 py-1 text-white text-xs bg-primary">
        <p className="text-lg font-bold">{title}</p>
        {isCopied ? (
          <button
            onClick={handleCopy}
            className="py-1 bg-transparent text-green-500 font-bold cursor-pointer border-none outline-none inline-flex items-center justify-center gap-1 "
          >
            <span className="text-base mt-1 text-green-500">
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

      <div className="p-4 border-t  border-gray-200  ">
        <p className="text-grey-200 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default CodeDetails;
