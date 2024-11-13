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

  // Reset data to initial state
  const resetData = () => {
    localStorage.removeItem("data");
    setData([]);
  };

  // Export data to a JSON file
  const exportDataToFile = () => {
    const currentDate = new Date().toISOString().split("T")[0];
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${currentDate}-code-log.json`;
    a.click();
    URL.revokeObjectURL(url); // Clean up after download
  };

  const importDataFromFile = (file) => {
    if (!file) {
      console.error("No file selected");
      return;
    }

    // Check if the file is a valid JSON file (optional)
    if (file.type !== "application/json") {
      console.error("The selected file is not a JSON file");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedData = JSON.parse(e.target.result);

        // Check if the imported data is an array
        if (Array.isArray(importedData)) {
          // Get the existing data from localStorage
          const existingData = JSON.parse(localStorage.getItem("data")) || [];

          // Merge the imported data with the existing data (no duplicates)
          const updatedData = [...existingData, ...importedData];

          // Save the merged data back to localStorage
          saveData(updatedData);
        } else {
          console.error("Invalid JSON format: Expected an array.");
        }
      } catch (error) {
        console.error("Error reading the JSON file:", error);
      }
    };
    reader.readAsText(file); // Read the file as text
  };

  return {
    data,
    addData,
    updateData,
    deleteData,
    getDetails,
    refetch,
    resetData,
    exportDataToFile,
    importDataFromFile,
  };
};

export default useLocalStorage;
