// src/__tests__/App.test.js

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import { ModalProvider } from "../context";

// Mock useLocalStorage hook
jest.mock("../hooks/useLocalStorage", () => () => ({
  data: [{ id: 1, title: "Test Code 1" }],
  addData: jest.fn(),
  updateData: jest.fn(),
  deleteData: jest.fn(),
  getDetails: jest.fn(),
  resetData: jest.fn(),
}));

test("renders App component with modal", () => {
  render(
    <ModalProvider>
      <App />
    </ModalProvider>
  );

  // Check if search and add components are rendered
  expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  expect(screen.getByText("Add New")).toBeInTheDocument();

  // Check if modal is hidden initially
  const addModal = screen.queryByRole("dialog", { hidden: true });
  expect(addModal).toBeNull();
});

test("opens AddCodeModal when Add button is clicked", () => {
  render(
    <ModalProvider>
      <App />
    </ModalProvider>
  );

  // Click on Add button
  const addButton = screen.getByText("Add New");
  fireEvent.click(addButton);

  // Check if modal opens
  expect(screen.getByRole("dialog")).toBeInTheDocument();
});
