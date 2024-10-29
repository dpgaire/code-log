import React from "react";
import { FaPlus } from "react-icons/fa";
import { IconButton, TextField } from "./ui";

const SearchAndAdd = ({ onSearchChange, onAddClick }) => (
  <div className="flex flex-wrap my-2 gap-2 items-center">
    <TextField
      onChange={onSearchChange}
      style={{ flex: 1 }}
      type="text"
      name="search"
      placeholder="Search..."
      autoFocus={true}
    />
    <IconButton
      className="text-white bg-primary py-4 px-4 hover:scale-105 rounded-full"
      icon={FaPlus}
      title="Add"
      onClick={onAddClick}
    />
  </div>
);

export default SearchAndAdd;
