import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

/**
 * Custom modal component.
 *
 * @param {boolean} isOpen - Boolean state to control visibility of the modal.
 * @param {function} onClose - Function to call when closing the modal.
 * @param {string} title - Title of the modal.
 * @param {React.ReactNode} children - Content of the modal.
 */

// Size mapping for pixel widths
const sizeMap = {
  sm: { width: "300px" }, // Small size
  md: { width: "600px" }, // Medium size
  lg: { width: "800px" }, // Large size
  xl: { width: "1000px" }, // Extra Large size
  "2xl": { width: "1200px" }, // 2X Large size
};

const Modal = ({ isOpen, onClose, title = "", size = "lg", children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        style={{
          maxWidth: sizeMap[size].width,
          width: "100%",
        }}
        className={`bg-white rounded-lg shadow-lg w-full ${
          title ? "p-6" : "p-2"
        }`}
      >
        <div
          className={`flex  ${
            !title ? "justify-end" : "justify-between pb-3"
          } items-center border-b `}
        >
          {title && <h2 className="text-xl font-semibold">{title}</h2>}
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 rounded-full border-none cursor-pointer  bg-transparent"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div className="mt-4 ">{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
