import React, { useState } from "react";
import { FiClipboard } from "react-icons/fi";

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

<div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 h-[400px] flex flex-col transition-transform transform hover:scale-105">
<div className="p-4 flex items-center justify-between border-b border-gray-300">
<h2 className="text-lg md:text-xl font-semibold text-gray-800">
{title}
</h2>
<button
onClick={handleCopy}
className={`p-2 rounded-md focus:outline-none transition-colors duration-200 ${
            isCopied ? "text-green-500" : "text-blue-500 hover:text-blue-600"
          }`}
title={isCopied ? "Copied!" : "Copy to clipboard"} >
<FiClipboard className="w-5 h-5" />
</button>
</div>
<div className=" w-full h-full p-4 overflow-auto">
<pre className="bg-gray-900 text-gray-200 p-4 rounded-md w-full h-full">
<code>{codeSnippet}</code>
</pre>
</div>
<div className="p-4 border-t border-gray-300">
<p className="text-gray-600 text-sm">{description}</p>
</div>
</div>
);
};

export default CodePreviewCard;

{
id: 1,
title: "Sample Code 1",
description: "This is a sample code snippet for adding two numbers.",
codeSnippet: "const add = (a, b) => a + b;\nconsole.log(add(2, 3));",
},
