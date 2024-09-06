import React from "react";
import PropTypes from "prop-types";

const TextArea = ({ placeholder, name, value, onChange, onBlur, error }) => {
  return (
    <div className="flex flex-col">
      <textarea
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`p-2 w-full border-DEFAULT focus:focus text-lg rounded-lg shadow-sm transition duration-150 ease-in-out ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

TextArea.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default TextArea;
