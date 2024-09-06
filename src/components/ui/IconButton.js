import React from "react";

// Define the reusable Button component
const IconButton = ({ icon: Icon, title, onClick, className, ...props }) => {
  return (
    <button
      className={`p-2 cursor-pointer rounded-full  transition-colors duration-200 border-none ${className}`}
      title={title}
      onClick={onClick}
      {...props}
    >
      <Icon className="w-5 h-5" />
    </button>
  );
};

export default IconButton;
