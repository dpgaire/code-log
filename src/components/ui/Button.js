import React from "react";
import PropTypes from "prop-types";

const Button = ({
  text = "Add",
  variant = "primary",
  onClick,
  className = "",
  ...props
}) => {
  // Define base styles
  const baseStyles =
    "px-4 py-2 border-none cursor-pointer rounded-lg font-semibold text-white transition duration-150 ease-in-out";

  // Define variant styles
  let variantStyles;
  switch (variant) {
    case "primary":
      variantStyles =
        "bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500";
      break;
    case "secondary":
      variantStyles =
        "bg-gray-500 hover:bg-gray-600 focus:ring-2 focus:ring-gray-500";
      break;
    case "danger":
      variantStyles =
        "bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-500";
      break;
    default:
      variantStyles =
        "bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500";
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
