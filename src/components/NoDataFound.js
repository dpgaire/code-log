import React from "react";
import { FaRegFrown } from "react-icons/fa"; // Importing a frown icon from React Icons
import PropTypes from "prop-types";

const NoDataFound = ({ message = "No data found" }) => {
  return (
    <div className="flex flex-col h-full items-center justify-center text-gray-500">
      <FaRegFrown className="text-4xl mb-4" />
      <p className="text-lg font-semibold">{message}</p>
    </div>
  );
};

NoDataFound.propTypes = {
  message: PropTypes.string,
};

export default NoDataFound;
