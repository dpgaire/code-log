import React from "react";
import PropTypes from "prop-types";

const SelectField = ({ options, name, value, onChange, onBlur, error }) => {
  return (
    <div className="flex flex-col">
      <select
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`p-2 w-full border-DEFAULT focus:focus text-lg rounded-lg shadow-sm transition duration-150 ease-in-out ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      >
        <option value="">Select an option</option>
        {options.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

SelectField.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  error: PropTypes.string,
};

export default SelectField;
