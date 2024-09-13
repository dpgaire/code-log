import { useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const useLocalStorage = () => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("data");
    return savedData ? JSON.parse(savedData) : [];
  });

  // Save data to localStorage
  const saveData = (newData) => {
    localStorage.setItem("data", JSON.stringify(newData));
    setData(newData);
  };

  // Add new data
  const addData = (newData) => {
    const newItem = { ...newData, id: uuidv4() };
    const updatedData = [...data, newItem];
    saveData(updatedData);
  };

  // Update existing data
  const updateData = (id, updatedData) => {
    const updatedArray = data.map((item) =>
      item.id === id ? { ...item, ...updatedData } : item
    );
    saveData(updatedArray);
  };

  // Delete data
  const deleteData = (id) => {
    const filteredData = data.filter((item) => item.id !== id);
    saveData(filteredData);
  };

  // Get details of a specific item
  const getDetails = (id) => {
    return data.find((item) => item.id === id);
  };

  // Function to refetch data from localStorage
  const refetch = useCallback(() => {
    const savedData = localStorage.getItem("data");
    setData(savedData ? JSON.parse(savedData) : []);
  }, []);

  // Export data to a JSON file
  const exportDataToFile = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.json";
    a.click();
    URL.revokeObjectURL(url); // Clean up after download
  };

  return {
    data,
    addData,
    updateData,
    deleteData,
    getDetails,
    refetch,
    exportDataToFile,
  };
};

export default useLocalStorage;
