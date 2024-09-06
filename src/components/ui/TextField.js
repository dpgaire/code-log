import React from "react";
import PropTypes from "prop-types";

const TextField = ({
  type = "text",
  placeholder,
  name,
  value,
  onChange,
  onBlur,
  error,
  style,
}) => {
  return (
    <div style={style} className="flex flex-col space-y-2">
      <input
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        className={` p-2 w-full outline-none rounded-lg sm:w-auto focus:outline-none focus:dark:bg-gray-50 focus:dark:border-sky-600 focus:focus text-lg  transition duration-150 ease-in-out  ${
          error ? "border-red-500" : "border-DEFAULT"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

TextField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default TextField;
