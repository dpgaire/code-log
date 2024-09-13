import React, { useState, useEffect } from "react";
import { Button, SelectField, TextArea, TextField } from "./ui";

/**
 * Custom dynamic form component with validation, error handling, and dynamic error removal.
 *
 * @param {Array} config - Array of field configurations for the form.
 * @param {Object} initialData - Initial data to pre-fill the form for editing.
 * @param {Function} onSubmit - Function to call with form data on successful submission.
 * @param {Function} onCancel - Function to call when cancelling the form.
 */
const DynamicForm = ({
  config,
  initialData,
  onSubmit,
  onCancel,
  submitText,
}) => {
  const [formData, setFormData] = useState(initialData || {});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const initialData = config.reduce((acc, field) => {
      acc[field.name] = field.value || "";
      return acc;
    }, {});
    setFormData(initialData);
  }, [config]);

  const validate = () => {
    const newErrors = {};
    config.forEach((field) => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    // Remove the error for the current field if it's valid
    if (value.trim() !== "") {
      setErrors((prevErrors) => {
        const { [name]: removedError, ...restErrors } = prevErrors;
        return restErrors;
      });
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    validateField(name);
  };

  const validateField = (fieldName) => {
    const fieldConfig = config.find((field) => field.name === fieldName);
    if (fieldConfig?.required && !formData[fieldName]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: `${fieldConfig.label} is required`,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  const renderField = (field) => {
    const commonProps = {
      name: field.name,
      placeholder: field.placeholder,
      value: formData[field.name] || formData[field.value],
      onChange: handleChange,
      onBlur: handleBlur,
      error: errors[field.name],
    };

    switch (field.fieldType) {
      case "textarea":
        return (
          <TextArea
            {...commonProps}
            style={{ fontFamily: "monospace", whiteSpace: "pre-wrap" }}
          />
        );
      case "select":
        return <SelectField {...commonProps} options={field.options} />;
      default:
        return <TextField {...commonProps} />;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {config.map((field, index) => (
        <div key={index} className="flex flex-col">
          <label htmlFor={field.name} className="font-semibold hidden">
            {field.label}
            {field.required && <span className="text-red-500"> *</span>}
          </label>
          {renderField(field)}
        </div>
      ))}
      <div className="flex space-x-2">
        <Button text={submitText} variant="primary" />
        <Button text="Cancel" variant="secondary" onClick={onCancel} />
      </div>
    </form>
  );
};

export default DynamicForm;
