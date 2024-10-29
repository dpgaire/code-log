import React, { useRef, useEffect } from "react";
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
  autoFocus = false,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (autoFocus) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <div style={style} className="flex flex-col space-y-2 font-sans">
      <input
        ref={inputRef}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        autoComplete="off"
        onChange={onChange}
        onBlur={onBlur}
        className={`p-2 w-full font-sans rounded-lg shadow-sm sm:w-auto focus:outline-none text-lg transition duration-150 ease-in-out ${
          error ? "border-red-500" : ""
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1 font-sans">{error}</p>}
    </div>
  );
};

TextField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  error: PropTypes.string,
  autoFocus: PropTypes.bool,
};

export default TextField;
