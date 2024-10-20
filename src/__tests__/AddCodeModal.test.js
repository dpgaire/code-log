// src/__tests__/AddCodeModal.test.js

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddCodeModal from "../components/code/AddCodeModal";

test("renders AddCodeModal with form fields", () => {
  const handleSubmit = jest.fn();
  const handleClose = jest.fn();

  render(
    <AddCodeModal isOpen={true} onClose={handleClose} onSubmit={handleSubmit} />
  );

  // Check form elements
  expect(screen.getByLabelText("Title")).toBeInTheDocument();
  expect(screen.getByText("Submit")).toBeInTheDocument();
});

test("submits form data when form is submitted", () => {
  const handleSubmit = jest.fn();
  const handleClose = jest.fn();

  render(
    <AddCodeModal isOpen={true} onClose={handleClose} onSubmit={handleSubmit} />
  );

  // Simulate entering text and submitting form
  fireEvent.change(screen.getByLabelText("Title"), {
    target: { value: "New Code" },
  });
  fireEvent.click(screen.getByText("Submit"));

  // Check if submit function is called
  expect(handleSubmit).toHaveBeenCalled();
});
