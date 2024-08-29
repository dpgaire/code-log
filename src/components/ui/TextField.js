import React from "react";
import PropTypes from "prop-types";

const TextField = ({
  type = "text",
  placeholder = "Enter text here",
  error,
  style,
  ...props
}) => {
  return (
    <div style={style} className="flex flex-col space-y-2">
      <input
        type={type}
        placeholder={placeholder}
        className={` p-2 w-full border-DEFAULT focus:focus text-lg rounded-lg shadow-sm transition duration-150 ease-in-out  ${
          error ? "border-red-500" : ""
        }`}
        {...props}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

TextField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  borderColor: PropTypes.string,
  focusBorderColor: PropTypes.string,
  focusRingColor: PropTypes.string,
};

export default TextField;
