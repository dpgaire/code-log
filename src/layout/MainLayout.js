import React from "react";
import { Header, Footer } from "./index";
import { ThemeProvider } from "../context/ThemeContext";

const MainLayout = ({
  resetData,
  exportDataToFile,
  importDataFromFile,
  children,
}) => {
  return (
    <ThemeProvider>
      <div className="flex flex-col h-screen relative bg-background">
        <Header
          resetData={resetData}
          exportDataToFile={exportDataToFile}
          importDataFromFile={importDataFromFile}
        />
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default MainLayout;
